import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div>
    <h1>Hello world!</h1>
    <button>button</button>
  </div>
)

render(<App />, document.getElementById('root'))
