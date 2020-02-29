import React, { Component } from 'react'

export default class BaitapCar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            img: "./img/imgRedCar.jpg",
            alt: "red Car"
        };
    };

    ChangeColor = color => {
        return color === "red" ? (this.setState({
            img: "./img/imgRedCar.jpg",
            alt: "red Car"
        }))
            :
            color === "silver" ? (this.setState({
                img: "./img/imgSilverCar.jpg",
                alt: "silver Car"
            }))
                : (this.setState({
                    img: "./img/imgBlackCar.jpg",
                    alt: "black Car"
                }))
    };

    render() {
        return (
            <div>
                <h3 className="title">Bài tập Car</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="img-fluid" src={this.state.img} alt={this.state.alt} />
                        </div>
                        <div className="col-sm-6">
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    this.ChangeColor("red")
                                }}>
                                Red
                            </button>
                            <button
                                className="btn btn-light mx-1"
                                onClick={() => {
                                    this.ChangeColor("silver")
                                }}
                            >Silver</button>
                            <button className="btn btn-dark mx-1"
                                onClick={() => {
                                    this.ChangeColor("black")
                                }}
                            >Black</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
