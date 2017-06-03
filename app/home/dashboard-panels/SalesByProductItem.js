import React from "react";

export default class SalesByProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-9">
                     {this.props.productSale.detail[0].name}
                </div>
                <div className="col-sm-3">
                    <b>{this.props.productSale.count}</b>
                </div>
            </div>
        );
    }
}
