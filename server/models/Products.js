import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    sku: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
});

ProductSchema.method({});

ProductSchema.statics = {
    list() {
        return this.find().exec();
    }
};

export default mongoose.model("Product", ProductSchema);
