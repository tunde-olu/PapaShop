import mongoose from 'mongoose';
const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
});
const ProductSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: {
            values: ['Electronics'],
            message: '{VALUE} is not supported',
        },
    },
    description: {
        type: String,
        required: true,
    },
    review: [ReviewSchema],
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
const Product = mongoose.model('Product', ProductSchema);
export default Product;
