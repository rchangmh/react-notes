import React from 'react'
import { Link } from 'react-router-dom'

export default class Component extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  state = {
    KEY: 'value',
    BOOL: true,
    LIST: [],
    ...this.props,
  }

  eventFn = event => {
    // Using setState({}) will only change the specified key and keep everything else.
    this.setState({ KEY: 'new_value' })
  }

  callbackAfterSetState = newValue => {
    this.setState({ KEY: newValue }, () => {
      console.log(this.state.KEY)
    })
  }

  logFn = element => console.log(element)

  asyncFn = async () => {
    const result = await fetch('/api')
    result.then(console.log).catch(console.error)
  }

  render() {
    return (
      <div>
        // Events: https://www.w3schools.com/jsref/dom_obj_event.asp
        <input onChange={event => this.setState({ KEY: event.target.value })} />
        <input onChange={this.eventFn} />
        <button onClick={() => this.eventFn()}>button</button>
        // Boolean check.
        {this.state.BOOL && <div>True</div>}
        {this.state.BOOL ? <div>True</div> : <div>False</div>}
        // Mapping a list of items into display components.
        {this.state.LIST.map((element, index) => (
          <div key={element.id} index={index}>
            <button
              as={Link}
              to={'/link'}
              active={this.state.ACTIVE === '/link'}
              // onClick={(e, { to }) => this.setState({ ACTIVE: to })}>
              onClick={element => this.logFn(element)}>
              button
            </button>
          </div>
        ))}
      </div>
    )
  }
}
