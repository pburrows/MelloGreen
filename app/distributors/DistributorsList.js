import React from "react";

import DistributorsListItem from "./DistributorListItem";

export default class DistributorsList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <div className="row">
                <div className="col-sm-6"><h4>Distributor Name</h4></div>
                <div className="col-sm-3"><h4>City</h4></div>
                <div className="col-sm-1"><h4>State</h4></div>
            </div>
            {this.props.distributors.map(distributor => {
                return <DistributorsListItem distributor={distributor}/>;
            })}
        </div>
        );
    }
}