import React from 'react';

// const pixelStyle = {
//     height: '20px',
//     width: '20px',
//     backgroundColor: 'aqua',
// }



class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: '10px',
            width: '10px',
            backgroundColor: 'aqua'
        }
    }
    render() {
        const randomHexColor = () =>
            `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
        const pixelStyle = {
            height: this.state.height,
            width: this.state.width,
            backgroundColor: randomHexColor(),
        }
        return (
            <div onMouseOver={() => this.setState({ backgroundColor: 'green' })} style={pixelStyle}></div>
        )
    }
}


// const Pixel = () => {
//     return (
//         <div style={pixelStyle}></div>
//     )
// }


export default Pixel