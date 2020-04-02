import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("Portfolio container has rendered")
    }


    portfolioItems() {
        const data = ["Good Earth", "Insidesales", "NetDocuments"];

        return data.map(item => {
            return <PortfolioItem title={item} url={"google.com"} />
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio Item</h2>

                {this.portfolioItems()}
            </div>
        );
    }
}