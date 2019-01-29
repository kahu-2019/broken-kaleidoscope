import React from 'react'

const newStyle = (color) => {
  return {
    fontFamily: 'Times New Roman',
    height: '50px',
    width: '5%',
    backgroundColor: color || `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }
}

class Pixel extends React.Component {
  constructor() {
    super()
    this.state = {
      style: newStyle(),
      show: true,
    }

  }

  render() {
    const changeColor = () => this.setState({ style: newStyle() })
    console.log(changeColor)

    const changeColorGreen = () => this.setState({ style: newStyle('green') })
    const changeColorBlack = (evt) => this.setState({ style: newStyle('black') }, evt.preventDefault())
    const changeColorWhite = () => this.setState({ style: newStyle('white') })
    const changeColorYellow = () => this.setState({ style: newStyle('yellow') })

    return <div style={this.state.style} onClick={changeColor} onMouseEnter={changeColorGreen} onContextMenu={changeColorBlack} onDoubleClick={changeColorWhite}
      onDragEnter={changeColorYellow}></ div>


  }

}


export default Pixel 