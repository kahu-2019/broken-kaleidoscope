import React from 'react'

class Pixel extends React.Component {
  constructor() {
    super()
    this.state = {
      style: {
        fontFamily: 'Times New Roman',
        height: '50px',
        width: '5%',
        backgroundColor: 'blue'
      },
      show: true
    }

  }

  render() {
    return <div style={this.state.style}></div>
  }

}


export default Pixel 