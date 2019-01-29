import React from 'react'
import Pixel from './Pixel'

const randomColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pixels: this.createPixels()
    }
    setInterval(() => this.setState({ pixels: this.createPixels() }), 1000)
  }
  createPixels() {
    var pixels = []
    for (var i = 0; i < 10; i++) {
      pixels.push(<Pixel key={i} color={randomColor()} />)
    }
    return pixels
  }

  render() {
    console.log(this.state)

    return (
      <div style={{
        width: "100%"

      }}>

        {this.state.pixels}

      </div >
    )
  }

}

export default App
