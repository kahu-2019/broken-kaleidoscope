import React from 'react'
const randomColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const newStyle = (color) => {
  return {
    fontFamily: 'Times New Roman',
    height: "50px",
    width: "50px",
    backgroundColor: color || randomColor()
  }
}


class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: newStyle(props.color),
      show: true,
    }
    this.changeColor = () => { this.setState({ style: newStyle() }) }
    //setInterval(this.changeColor, 1000)
  }

  render() {
    const changeColorGreen = () => this.setState({ style: newStyle('green') })
    const changeColorBlack = (evt) => this.setState({ style: newStyle('black') }, evt.preventDefault())
    const changeColorWhite = () => this.setState({ style: newStyle('white') })
    const changeColorYellow = () => this.setState({ style: newStyle('yellow') })

    return <div style={this.state.style} onClick={this.changeColor} onMouseEnter={changeColorGreen} onContextMenu={changeColorBlack} onDoubleClick={changeColorWhite}
      onDragEnter={changeColorYellow} ></ div>


  }

}


export default Pixel 