import React from 'react'

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

const Pixel = (props) => {
  return (
    <div id = "app" style = {{
      height: 20,
      width: 20,
      backgroundColor: bgColors.Blue
    }}>

    </div>
  )
}
export default Pixel