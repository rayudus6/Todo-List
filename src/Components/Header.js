import React, { Component } from 'react';


export default class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
            title:props.title,
        }
    }
    render(){
        return(
        <h1>{this.state.title}</h1>
        )
    }
}