import React from  'react'
const Sample5 = (props)=>{
    return(
    <div>
        <h1> hai {props.fname} from department {props.dept}</h1>
        {props.children}
    </div>
    )
}
export default Sample5