import React from "react";

import MelloGreenData from '../../shared/data';

export default class SalesThisWeek extends React.Component {
    constructor(props){
        super(props);

        this.state = {totalSales: 0};
    }

    componentDidMount() {
        let api = new MelloGreenData();
        let self = this;

        api.getTotalSalesThisWeek().then(data => {
            self.setState({totalSales: data.data});
        });
    }

    render(){
        return (
            <div className="panel panel-success">
                <div className="panel-heading text-center">
                        <h4>Sales this week</h4>
                </div>
                <div className="panel-body text-center">
                        <h1>{this.state.totalSales}</h1>
                </div>
            </div>
        );
    }
}