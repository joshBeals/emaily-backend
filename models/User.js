import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('users', userSchema);