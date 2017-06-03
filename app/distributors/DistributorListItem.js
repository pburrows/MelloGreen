import React from "react";

export default class DistributorsListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="row">
            <div className="col-sm-6">
                {this.props.distributor.name}
            </div>
            <div className="col-sm-3">
                {this.props.distributor.city}
            </div>
            <div className="col-sm-1">
                {this.props.distributor.state}
            </div>
        </div>
        );
    }
}
