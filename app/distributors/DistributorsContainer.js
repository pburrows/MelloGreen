import React from "react";

import MelloGreenData from '../shared/data';
import DistributorsList from "./DistributorsList";

export default class DistributorsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {distributors: []};
    }

    componentDidMount() {
        let api = new MelloGreenData();
        let self = this;
        api.getDistributors().then(data => {
            self.setState({distributors: data.data});
        });
    }

    render(){
        return(
            <DistributorsList distributors={this.state.distributors} />
        );
    }
}