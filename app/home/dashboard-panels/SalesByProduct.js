import React from "react";

import MelloGreenData from '../../shared/data';

import SalesByProductItem from "./SalesByProductItem";

export default class SalesByProduct extends React.Component {
    constructor(props){
        super(props);

        this.state = {aggregatedSales: []}
    }

    componentDidMount() {
        let api = new MelloGreenData();
        let self = this;

        api.getTotalSalesThisWeekByProduct().then(data => {
            self.setState({aggregatedSales: data.data});
            console.log(data);
        });
    }

    render(){
        return (
            <div className="panel panel-success">
                <div className="panel-heading text-center">
                    <h4>Sales By Product</h4>
                </div>
                <div className="panel-body text-center">
                    {this.state.aggregatedSales.map(sale => {
                        return <SalesByProductItem key={sale._id} productSale={sale}/>;
                    })}
                </div>
            </div>
        );
    }
}