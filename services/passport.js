import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import keys from "../config/keys.js";
import { auth } from '../controllers/auth/auth.js'

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            auth(profile);
        }
    )
);
