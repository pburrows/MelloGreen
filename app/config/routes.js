import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import Main from "../shared/Main";

import DashboardContainer from "../home/DashboardContainer";
import DistributorsContainer from "../distributors/DistributorsContainer";
import {ProductsList} from "../products/ProductsList";
import {SalesList} from "../sales/SalesList";

const routeJsx = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="dashboard" component={DashboardContainer} />
            <Route path="distributors" component={DistributorsContainer} />
            <Route path="products" component={ProductsList} />
            <Route path="sales" component={SalesList} />
            <IndexRoute component={DashboardContainer} />
        </Route>
    </Router>
    );

export {routeJsx};
