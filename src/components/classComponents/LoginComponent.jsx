import React from "react";
import TestComponent from "../functionalComponents/testComponents";
import ReiteratorComp from "./testClassComp";
//import ReiteratorComp from "../classComponents/testClassComp";
class Login extends React.Component{
    render(){
        return (
            <div>
                <ReiteratorComp></ReiteratorComp>
                 <h1>and functional component</h1>
                 <TestComponent></TestComponent>
            </div>
               

                )
    }
}

export default Login 