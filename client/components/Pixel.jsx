import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const newStyle = () => {//notes 
  return {
    height: 40,
    width: 40,
    backgroundColor: randomHexColor(),
    }
}


class Pixel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      style: newStyle()
      }
    this.changeColor = () => this.setState({style: newStyle()})
    }
  

  render() {
    let style = this.state.style
    
    console.log(this.state)

    return (
      <div id = "app" onMouseOver = {this.changeColor} style = {style}>

      </div>
    )
  }
}

export default Pixel