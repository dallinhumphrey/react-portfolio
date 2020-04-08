import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                { title: "Good Earth", category: "Management" },
                { title: "Insidesales", category: "Sales" },
                { title: "NetDocuments", category: "Sales" },
                { title: "Pineapple Promises", category: "Product Development" }
            ]
        }

        this.handlePageTitleUpdate = this.handleFilter.bind(this)
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        })
    }
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter("Management")}>
                    Management
            </button>
                <button onClick={() => this.handleFilter("Sales")}>
                    Sales
            </button>
                <button onClick={() => this.handleFilter("Product Development")}>
                    Product Development
            </button>

                {this.portfolioItems()}
            </div>
        );
    }
}