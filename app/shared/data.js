import axios from "axios";

export default class MelloGreenData {
    constructor(){

    }

    getDistributors() {
        return axios.get("/api/distributors");
    }

    getTotalSalesThisWeek(){
        return axios.get("/api/sales/this-week/total");
    }

    getTotalSalesThisWeekByProduct(){
        return axios.get("/api/sales/this-week/by-product");
    }
}