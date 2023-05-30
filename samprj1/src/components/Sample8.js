import React,{Component} from "react";

class Sample8 extends Component{
    constructor(){
        super();
        this.state={
            msg:"1st project"
        };
    }
    changeMsg=()=>{
        this.setState({
            msg:"welcome "
        });

    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button type="button" onClick={this.changeMsg}>click</button>
            </div>
        );
    }
}
export default Sample8;