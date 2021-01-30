// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.

  /* Extra Credit 1 */
  // const inputRef = React.useRef(null)

  /* Extra Credit 2 */
  // const [errorMessage, setErrorMessage] = useState()

  /* Extra Credit 3 - control the input value */
  const [username, setUsername] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    /* Exercise */
    alert(`You entered: ${event.target.elements.usernameInput.value}`)

    /* Extra Credit 1 */
    // alert(`You entered: ${inputRef.current}`)
  }

  /* Extra Credit 2 */
  // const handleChange = event => {
  //   const isValid = event.target.value === event.target.value.toLowerCase()

  //   setErrorMessage(isValid ? undefined : 'Username must be lower case')
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        {/* Exercise */}
        {/* <input id="usernameInput" type="text" /> */}
        {/* Extra Credit 1 - using refs */}
        {/* <input ref={inputRef} type="text" /> */}
        {/* Extra Credit 2 - validate lowercase */}
        {/* <input id="usernameInput" type="text" onChange={handleChange} /> */}
        {/* <span style={{color: 'red'}}>{errorMessage}</span> */}
        {/* Extra Credit 3 - control the input value */}
        <input
          value={username}
          type="text"
          onChange={e => setUsername(e.target.value.toLowerCase())}
        />
      </div>
      <button type="submit">Submit</button>
      {/* Extra Credit 2 - validate lowercase */}
      {/* <button type="submit" disabled={!!errorMessage}>
        Submit
      </button> */}
    </form>
  )
}

function App() {
  return <UsernameForm />
}

export default App
