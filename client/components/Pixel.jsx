import React from 'react'

class Pixel extends React.Component {

  constructor(props) {
    super(props)

    this.randomHexColor = () =>
      `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    this.state = {
      style: {
        height: '20px',
        width: '20px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  clickHandler(evt) {
    if (evt.buttons == 1) {
      this.setState({
        style: { height: '20px', width: '20px', backgroundColor: 'yellow' }
      })
    } else {
      this.setState({
        style: { height: '20px', width: '20px', backgroundColor: this.randomHexColor() }
      })
    }
    evt.preventDefault()
    evt.stopPropagation()
  }

  render() {
    return (
      <div style={this.state.style} onMouseOver={this.clickHandler.bind(this)} />
    )
  }
}

export default Pixel