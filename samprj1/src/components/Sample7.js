import React,{Component} from 'react';
class Sample7 extends Component{
    constructor(){
        super()
        this.state={
            msg:"hai am sathya"
        }
    }
    render(){
        return <h1>{this.state.msg}</h1>
    }
}
export default Sample7