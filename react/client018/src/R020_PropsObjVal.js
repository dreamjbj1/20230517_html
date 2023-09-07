import { Component } from "react";
import datatype from 'prop-types';

class R020_PropsObjVal extends Component{

    render(){
        let {
            ObjcetJson
        } = this.props
        return(
            <div style={{padding: "0px"}}>
                {JSON.stringify(ObjcetJson)}
            </div>
        )
    }
}


R020_PropsObjVal.prototype = {
    ObjectJson: datatype.shape({
        react: datatype.string,
        twohundred: datatype.number
    })
}

export default R020_PropsObjVal;
