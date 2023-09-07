import { Component } from "react";
import datatype from 'prop-types';

class R018_PropsDatatype extends Component{

    render(){
        let {
            String, Number, Boolean, Array, ObjectJson, Function} = this.props
        return(
            <div style={{padding: "0px"}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString(ObjectJson)}</p>
                <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps: {Function}</p>
            </div>
        )
    }
}

R018_PropsDatatype.prototype = {
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson : datatype.Object,
    Function: datatype.func,
}
export default R018_PropsDatatype;
