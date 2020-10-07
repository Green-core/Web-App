import React from 'react';
import ReactLoading from 'react-loading';
 
export default function Loading(){
// const Example = ({ type, color }) => (
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <ReactLoading type={"bars"} color={"white"} />
        </div>
    // <ReactLoading type={type} color={color} height={667} width={375} />
    )
// );
}
