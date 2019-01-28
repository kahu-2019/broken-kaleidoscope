import React from 'react'
const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`



export default class Pixel extends React.Component{
  // constructor (props){
  //   super(props)
  // }
  
  render(){
    
    return (
      <div style={{
        fontFamily: 'Arial',
        height:"40px",
        backgroundColor:randomHexColor(),
        width:"40px"}}>

      
    




      </div>
    )

  }
}

