import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DistributorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

DistributorSchema.method({});

DistributorSchema.statics = {
    list() {
        return this.find().exec();
    }
};

export default mongoose.model("Distributor", DistributorSchema);
