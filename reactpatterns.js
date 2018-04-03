//stateless functions

const Greeting = (props, context) => {
  const styles = {
    fontWeight: 'bold',
    color: context.color
  }
  return <div>Hi {props.name}!</div>
}

// conditional rendering, because you can't use if/else

// if
{
  condition && <div>Renders when true</div>
}

// unless
{
  condition || <div>Renders when false</div>
}

// if-else
{
  condition ? <div>Renders when true.</div> : <div>Renders when false.</div>
}

// strip out other object properties with rest operator (...)

{
  array.map(({ id, ...rest }) => <Message key={id} {...message} />)
}
