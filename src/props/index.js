import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps';

export default class Props extends Component {
    
    constructor (props){
        super(props);

        this.state= {
        name: "class props",
        names:"function props"
        };
    };
    
    render() {
        return (
            <div>
                <h3 className="titile">*Props</h3>
                <ClassProps name={this.state.name}/>
                <ClassProps name="ABCD"/>
                <ClassProps name="ABCD"/>
                <FunctionProps name = {this.state.names}/>
            </div>
        );
    };
};
