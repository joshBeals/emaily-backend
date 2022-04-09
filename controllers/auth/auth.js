import User from '../../models/User.js';

export const auth = async ({ id, name, emails, photos }) => {
    const user = await User.findOne({ googleId: id });
    if (user) {
        console.log('User Already Exists!!!');
    } else {
        const newUser = new User({
            googleId: id,
            name: `${name.givenName} ${name.familyName}`,
            email: emails[0].value,
            image: photos[0].value
        });
        const savedUser = await newUser.save();
        if (savedUser) {
            console.log('User Added Successfully');
        } else {
            console.log('Failed!!!');
        }
    }
}