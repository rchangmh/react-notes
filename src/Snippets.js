state = {
  value: '',
  ...this.props  // prevents overriding provided props
}


onInputChange(e) {
  this.setState({ input: e.target.value }, () => {
    console.log(`state: ${this.state}, value: ${e.target.value}`);
  })
}


state = {
  object_a: {
    field_a: ''
  }
}

[...].map(element => (
  onChange = {
    event =>
      this.setState({
        object_a: {
          ...this.state.object_a,
          [element]: event.target.value // will replace [element] with field_a
        }
      })
  }
)