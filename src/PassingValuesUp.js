import React from 'react'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  justifyContent: 'center',
  alignItems: 'center',
}

const buttonDiv = color => {
  return {
    display: 'flex',
    backgroundColor: color,
    width: '100px',
    height: '100px',
    margin: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

class App extends React.Component {
  state = {
    colors: ['purple', 'blue', 'green'],
  }

  handleClick = (id, color) => {
    console.log(id)
    console.log(color)
    const newArray = this.state.colors.slice()
    newArray[id] = color
    this.setState({ colors: newArray })
    console.log(this.state)
  }

  render() {
    return (
      <div style={styles}>
        <Hello name="CodeSandbox" />

        {this.state.colors.map((color, id) => (
          <div key={id} style={buttonDiv(color)}>
            <button onClick={() => this.handleClick(id, 'red')}>{color}</button>
          </div>
        ))}
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
