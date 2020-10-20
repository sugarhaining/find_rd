module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        id: {type: Number},
        nickName: { type: String },
        avatarUrl: { type: String },
    });

    return mongoose.model('User', UserSchema);
}
