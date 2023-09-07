import { Component } from "react";

class R004_LifecycleEx extends Component{
    static getDeriver(){
        console.log("2. getgetDeriver")
        return {};
    }

    render(){
        console.log('3. render Call');
        return(
            <h2>[This is RENDER FUNCTION ]</h2>
        )
    }
}
export default R004_LifecycleEx;
