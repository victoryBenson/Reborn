import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        trim: true
    },
    sku: {
        type: String,
        required: true,
        default: "SKU",
        trim: true 
    },
    category: {
        type: String,
        required: [true, "Please add a category"],
        trim: true
    },
    section: {
        type: String,
        // required: [true, "Please add a category"],
        trim: true
    },
    brand: {
        type: String,
        required: [true, "Please add a brand"],
        trim: true
    },
    quantity: {
        type: Number,
        required: [true, "Please add a quantity"],
        trim: true
    },
    sold: {
        type: Number,
        default: 0,
        trim: true
    },
    oldPrice: {
        type: Number,
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please add a price"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        trim: true
    },
    image: {
        type: [String]
    },
    ratings: {
        type: [Object]
    },
    color: {
        type: [String]
    },
    size: {
        type: [String]
    },
},
{
    timestamps: true
}
)

export const Product = mongoose.model('Product', productSchema)
