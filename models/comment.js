const  mongoose  = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema(
    {
        description: {type: String, required: true},
        idmovie:{type: Number, required: true},
        email: {type: String, required: true}

    }
);

module.exports = mongoose.model('Comment', CommentSchema);
