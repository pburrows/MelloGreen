import Product from "../models/Products";
import Distributor from "../models/Distributors";
import Sale from "../models/Sales";
import * as seedData from "./data";

export default class DatabaseSeeder {
    constructor() {

    }

    runSeed() {
        let self = this;
        Product.list().then(data => {
            if(data.length > 0){
                //database already seeded.
                return;
            }
            console.log("Seeding database.")
            self.seed();
        });
    }

    seed() {
        let self = this;
        self.seedDistributors();
        self.seedProducts();
        self.seedSales();
    }

    seedDistributors() {
        Distributor.remove({}) //first clear out any existing items
            .then(() => {
                console.log("Adding distributors");
                for (let i = 0; i < seedData.distributors.length; i++) {
                    Distributor.create(seedData.distributors[i]);
                }
            });
    }

    seedProducts() {
        Product.remove({}) //first clear out any existing items
            .then(() => {
                console.log("Adding products");
                for (let i = 0; i < seedData.products.length; i++) {
                    Product.create(seedData.products[i]);
                }
            });
    }

    seedSales() {
        //generate fake random sales
        let self = this;

        //set timeout hack to make sure products and distributors are added before we try and add sales.
        setTimeout(function () {
            Sale.remove({})
                .then(() => {
                    for (let i = 0; i < 5000; i++) {
                        let product = seedData.products[self.getRandomNumberInRange(0, seedData.products.length)];
                        let distributor = seedData.distributors[self.getRandomNumberInRange(0, seedData.distributors.length)];
                        let mongoDistributor;
                        let mongoProduct;

                        if (!distributor || !product) {
                            continue;
                        }

                        Distributor.find({name: distributor.name})
                            .then(dist => {
                                mongoDistributor = dist[0];
                                return Product.find({sku: product.sku})
                            }).then(prod => {
                                mongoProduct = prod[0];
                                let saleData = {
                                    date: self.getRandomDate(),
                                    quantity: Math.ceil(Math.random() * (1000 - 100) + 100),
                                    currentPrice: product.price,
                                    discount: self.getRandomNumberInRange(0, 25),
                                    product: mongoProduct._id,
                                    distributor: mongoDistributor._id
                                };
                                Sale.create(saleData);
                        });
                    }
                });
        }, 500);
    }

    getRandomNumberInRange(min, max) {
        return Math.ceil(Math.random() * (max - min) + min)
    }

    getRandomDate() {
        //returns a random date between today and ten days ago.
        let end = new Date();
        let start = new Date();
        start = new Date(start.setDate(start.getDate() - 10));

        let newDate = new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime())));
        return newDate;
    }
}