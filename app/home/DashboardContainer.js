import React from "react";

import MelloGreenData from '../shared/data';
import DashboardLayout from "./DashboardLayout";

export default class DashboardContainer extends React.Component {
    constructor(props){
        super(props);
        // this.state = {distributors: []};
    }

    componentDidMount() {
        let api = new MelloGreenData();
        let self = this;
        // api.getDistributors().then(data => {
        //     self.setState({distributors: data.data});
        //     console.log(data);
        // });
    }

    render(){
        return(
            <DashboardLayout />
        );
    }
}