import React from 'react'

const newStyle = () => {
  return {
    fontFamily: 'Times New Roman',
    height: '50px',
    width: '5%',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
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

    return <div style={this.state.style} onMouseOver={changeColor} ></div>


  }

}


export default Pixel 