import Sale from "../models/Sales";
import express from "express";

const router = express.Router();

function listSales(req, res){
    Sale.list().then(data => {
        res.json(data);
    });
}

function getTotalSalesThisWeek(req, res){
    let end = new Date();
    let start = new Date();
    start = new Date(start.setDate(start.getDate() - 10));
    Sale.getTotalInDateRange(start, end).then(data => {
        res.json(data);
    });
}

function getTotalSalesThisWeekByProduct(req, res){
    let end = new Date();
    let start = new Date();
    start = new Date(start.setDate(start.getDate() - 10));
    Sale.getTotalInDateRangeGroupedByProduct(start, end).then(data => {
        res.json(data);
    });
}

router.route("/").get(listSales);
router.route("/this-week/total").get(getTotalSalesThisWeek);
router.route("/this-week/by-product").get(getTotalSalesThisWeekByProduct);

export default router;