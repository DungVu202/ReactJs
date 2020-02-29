import React, { Component } from 'react'

export default class ExampleHandlingEvent extends Component {
    isLogin = false;
    userName = "World";

    login = () => {
        this.isLogin = true;
        return <div>{this.renderHTML()}</div>
    };

    // renderHTML = () => {
    //     // if (this.isLogin){
    //     //     return <p>Hello {this.userName}</p>
    //     // } else {
    //     //     return (
    //     //         <div>
    //     //             <button className="btn btn-success">Đăng nhập</button>
    //     //         </div>
    //     //     ); 
    //     // };

    //     // cach khac
    //     let result = (this.isLogin) ? (<p>Hello {this.userName}</p>) : (
    //         <div>
    //             <button className="btn btn-success">Đăng nhập</button>
    //         </div>
    //     );
    //     return result;
    // };

    renderHTML = () => {
        return this.isLogin ? <p>Hello {this.userName}</p> : (
            <div>
                <button className="btn btn-success" onClick={this.login}>
                    Đăng nhập
                </button>
            </div>)
    };

    render() {
        return (
            <div>
                <h3 className="title">*ExampleEvent</h3>
                {this.renderHTML()}
            </div>
        );
    };
};
