import React, { Component } from 'react';

export default class RenderingElements extends Component {
    username = "Vu";
    lop = " FE35";

    renderInfor = () => {
        return (
            <p>Username: {this.username} - Class: {this.lop} </p>
        )
    }

    render() {
        return (
            <div>
                <h3 className="title">*Rendering Elements</h3>
                {this.renderInfor()}
            </div>
        )
    }
}
