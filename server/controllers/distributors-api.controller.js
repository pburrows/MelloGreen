import Distributor from "../models/Distributors";
import express from "express";

const router = express.Router();

function findSpecificDistributor(req, res){
    Distributor.findById(req.params.id).then(data => {
        res.json(data);
    });
}

function listDistributors(req, res){
    Distributor.list().then(data => {
        res.json(data);
    });
}

router.route("/").get(listDistributors);
router.route("/:id").get(findSpecificDistributor);

export default router;