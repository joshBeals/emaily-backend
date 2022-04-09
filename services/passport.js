import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.googleClientID,
            clientSecret: process.env.googleClientSecret,
            callbackURL: "/auth/google/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id }).then(existingUser => {
                if (existingUser) {
                    done(null, existingUser);
                } else {
                    new User({
                        googleId: profile.id,
                        name: `${profile.name.givenName} ${profile.name.familyName}`,
                        email: profile.emails[0].value,
                        image: profile.photos[0].value
                    }).save()
                        .then(user => done(null, user));
                }
            });

        }
    )
);
