import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SalesSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    currentPrice: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: false
    },
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    distributor: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Distributor"
    }
});

SalesSchema.method({});

SalesSchema.statics = {
    list(limit) {
        if (!limit) {
            limit = 50; //default to returning only 50 if not otherwise specified
        }
        return this.find()
            .limit(limit)
            .exec();
    },
    getByDistributor(id){
        return this.find({distributor: id})
    },
    getByProduct(id){
        return this.find({product: id})
    },
    getTotalInDateRange(start, end){
        return this.find({date: {"$gte": start, "$lte": end}}).count().exec();
    },
    getTotalInDateRangeGroupedByProduct(start, end){
        return this
            .aggregate([
                {$match: {date: {"$gte": start, "$lte": end}}},
                {$group: {_id: "$product", count: {$sum: 1}}},
                {$lookup: {from: "products", localField: "_id", foreignField: "_id", as: "detail"}}
            ])
            .exec();
    }
};

export default mongoose.model("Sale", SalesSchema);
