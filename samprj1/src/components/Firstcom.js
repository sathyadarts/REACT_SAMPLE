import React,{Component} from "react";
import Secondcom from './Secondcom'

class Firstcom extends Component{
    constructor(){
        super()
        this.state ={
            msg:"GOOD MORNING"
        }
    }
    dispMsg()
    {
        alert('Welcome'+this.state.msg)
    }
    render(){
        return<Secondcom msgHandler = {()=>this.dispMsg()}/>
    }
}
export default Firstcom;