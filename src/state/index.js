import React, { Component } from 'react'

//render chay lai khi state thay doi

export default class State extends Component {

    constructor (props) {
        super (props);

        this.state = {
            isLogin: false,
            userName: "World"
        };
    };

    handleLogin =()=>{
        this.setState({
            isLogin : true
        })
    };

    renderHTML = () => {
        return this.state.isLogin ? <p>Hello {this.state.userName}</p> : (
            <div>
                <button className="btn btn-success" onClick={this.handleLogin}>
                    Đăng nhập
                </button>
            </div>);
    };

    render() {
        return (
            <div>
                <h3 className="title">*State</h3>
                {this.renderHTML()}
            </div>
        );
    };
};
