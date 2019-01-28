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
            height: '20px',
            width: '20px',
            backgroundColor: 'aqua'
        }
    }
    render() {
        const pixelStyle = {
            height: this.state.height,
            width: this.state.width,
            backgroundColor: this.state.backgroundColor,
        }
        return (
            <div style={pixelStyle}></div>
        )
    }
}


// const Pixel = () => {
//     return (
//         <div style={pixelStyle}></div>
//     )
// }


export default Pixel