import React from "react";

export default class Main extends React.Component {
    constructor(props){
        super(props);


    }

    render(){
        return (<div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="#"><img src="/img/MelloGreen.png" /></a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                        <ul className="nav navbar-nav">
                            <li className={this.props.location.pathname === "/" ? "active": ""}><a href="#/">Dashboard</a></li>
                            <li className={this.props.location.pathname === "/products" ? "active": ""}><a href="#/products">Products</a></li>
                            <li className={this.props.location.pathname === "/distributors" ? "active": ""}><a href="#/distributors">Distributors</a></li>
                            <li className={this.props.location.pathname === "/sales" ? "active": ""}><a href="#/sales">Sales</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">{this.props.children}</div>
        </div>);
    }
}