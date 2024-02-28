import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add product name"],
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please add a price"],
        trim: true
    },
    oldPrice: {
        type: Number,
        trim: true,
        required: [true, "Pls add old price"]
    },
    category: {
        type: String,
        required: [true, "Please add product category"],
        trim: true
    },
    brand: {
        type: String,
        required: [true, "Please add product brand"],
        trim: true
    },
    quantity: {
        type: Number,
        required: [true, "Please add product quantity"],
        trim: true
    },
    image: {
        type: [String],
        required: [true, "Please add an image"],
        trim: true
    },
    sold: {
        type: Number,
        default: 0,
        trim: true
    },
    rating: {
        type: [Object],
        trim: true
    },
    color: {
        type: [String],
        default: "As Seen",
        trim: true
    },
    size: {
        type: [String],
        trim: true
    },
},
{
    timestamps: true
}
)

export const Product = mongoose.model('Product', productSchema)
