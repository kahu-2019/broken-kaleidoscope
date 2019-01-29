import React from 'react'
const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
const makeStyle = () => ({
height:"10px",
backgroundColor:randomHexColor(),
width:"10px"})



export default class Pixel extends React.Component{
  constructor (props) {

  super(props)
  this.state = {
    style: makeStyle()
    }
  }
  
  render(){

     const clickHandler = evt => {
      this.setState({
        style: makeStyle()
      })
    }
    const MouseOver = evt => {
      this.setState({
        style: {
        height:"10px",
        backgroundColor:"green",
        width:"10px"
      }
      })
    }
    
    return (

      <div onClick={clickHandler} onMouseEnter={MouseOver} style={this.state.style}></div>
    )

  }
}

