// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = (
  <div
    className="box box--small"
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

{
  /* Extra Credit 1 */
}
// function Box({className, style, children}) {
//   console.log({className, style, children})
//   return (
//     <div className={`box ${className}`} style={{...style, fontStyle: 'italic'}}>
//       {children}
//     </div>
//   )
// }

{
  /* Extra Credit 2 */
}
// function Box({className, style, children}) {
//   console.log({className, style, children})
//   return (
//     <div className={`box ${className}`} style={{...style, fontStyle: 'italic'}}>
//       {children}
//     </div>
//   )
// }

{
  /* Extra Credit 3 */
}
function Box({size, style, children}) {
  return (
    <div className={`box box--${size}`} style={{...style, fontStyle: 'italic'}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      {/* Exercise */}
      {/* {smallBox}
      {mediumBox}
      {largeBox} */}
      {/* Extra Credit 1 */}
      {/* <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box> */}
      {/* Extra Credit 2 */}
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
