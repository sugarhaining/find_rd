module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const CommentSchema = new Schema({
        content: String,
        mood: String,
        boardId: Number,
        location: {
            longitude: Number,
            latitude: Number
        },
        time: Date,
        tag: String,
        userId: Number,
        id: Number,
        userInfo: {
            nickName: String,
            avatarUrl: String
        },
        reply: [String]
    });

    return mongoose.model('Comment', CommentSchema);
}
