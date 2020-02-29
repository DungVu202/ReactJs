import React, { Component } from 'react';

export default class ListKey extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listProduct: [
                { id: 1, name: "Iphone", price: 1000 },
                { id: 2, name: "Samsung", price: 1000 },
                { id: 3, name: "HTC", price: 1000 }
            ]
        };
    };

    renderTable = () => {
        return this.state.listProduct.map(product => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3 className="titile">*List Key</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>price</td>
                        </tr>
                    </thead>
                    <tbody>{this.renderTable()}</tbody>
                </table>
            </div>
        )
    }
}
