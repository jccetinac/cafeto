const  mongoose  = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema(
    {
        rating: {type: Number, required: true},
        idmovie: {type: Number, required: true},
        email: {type: String, required: true}
    }
);

module.exports = mongoose.model('Movie', MovieSchema);
