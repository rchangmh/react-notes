import React from 'react'

class Component extends React.Component {
  render() {
    return <div>{this.props.children('string')}</div>
  }
}

const fn = () => (
  <Component>
    <div>{name => <h1>{name}</h1>}</div>
  </Component>
)