import React, { Component } from 'react'

export default class HandlingEvent extends Component {

    handleOnClick = () => {
        console.log(123);
    };

    handleOnClickParams = name => {
        console.log(name);
    };

    render() {
        return (
            <div>
                <h3 className="title">*Handling Event</h3>
                <button className="btn btn-success" onClick={this.handleOnClick}>HandlingEvent</button>
                <button
                    className="btn btn-info"
                    onClick={() => {
                        this.handleOnClickParams("Dung")
                    }}
                >
                    Handling Event Params
                </button>
            </div>
        )
    }
}
