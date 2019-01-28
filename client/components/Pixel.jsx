import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      style: {
        height: 40,
        width: 40,
        backgroundColor: randomHexColor()
        }
    }
  }

  render() {
    let style = this.state.style
    console.log(style)

    return (
      <div id = "app" style = {style}>

      </div>
    )
  }
}

export default Pixel