import React from "react";
import "../Style/Event.css";

export default class Floaters extends React.Component {

    render(){
    return (
        <div>
            <div className="dummyDiv" />
            <div className="fixed-top card headerEvents  mt=0 pt-3 pb-3">
                {this.props.children}
            </div>
        </div>
    );}
};

