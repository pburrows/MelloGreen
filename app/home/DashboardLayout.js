import React from "react";

import SalesThisWeek from "./dashboard-panels/SalesThisWeek";
import SalesByProduct from "./dashboard-panels/SalesByProduct";

export default class DashboardLayout extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <SalesThisWeek />
                        <SalesByProduct />
                    </div>
                    <div className="col-sm-6"><img src="/img/MelloGreen-Cans.png" /></div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        );
    }
}