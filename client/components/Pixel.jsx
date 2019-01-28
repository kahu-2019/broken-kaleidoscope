import React from 'react'

const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
const makeStyle = () => ({
  height: '50px',
  width: '50px',
  backgroundColor: randomHexColor()
})

class Pixel extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      style: makeStyle()
    }
  }
  render() {
    const clickHandler = evt => {
      this.setState({
        style: makeStyle()
      })
    }
    const mouseOver = evt => {
      this.setState({
        style: {
          height: '50px',
          width: '50px',
          backgroundColor: 'white'
        }
      })
    }
    const doubleClick = evt => {
      this.setState({
        style: {
          height: '50px',
          width: '50px',
          backgroundColor: 'black'
        }
      })
    }

    return (

      <div onClick={clickHandler} onMouseEnter={mouseOver} onDoubleClick={doubleClick} style={this.state.style}></div>
    )
  }
}

export default Pixel