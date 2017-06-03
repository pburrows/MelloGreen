import Product from "../models/Products";
import express from "express";

const router = express.Router();

function findSpecificProduct(req, res){
    Product.findById(req.params.id).then(data => {
        res.json(data);
    });
}

function listProduct(req, res){
    Product.list().then(data => {
        res.json(data);
    });
}

router.route("/").get(listProduct);
router.route("/:id").get(findSpecificProduct);

export default router;