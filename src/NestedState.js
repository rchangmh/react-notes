import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export default class Student extends Component {
  state = {
    obj1: {
      obj1A: {
        prop1: 'abc',
        prop2: '123',
      },
      obj1B: {
        prop1: 'abc',
        prop2: '123',
      },
    },
  }

  // handleClick = (key, e) => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     colleges: {
  //       ...prevState.colleges,
  //       [key]: {
  //         ...prevState.colleges.[key],
  //         status: 'Pending'
  //       }
  //     }
  //   }))
  // }

  render() {
    return (
      <div>
        {Object.entries(this.state.colleges).map(([key, college]) => (
          <Card>
            <Card.Content>
              <Image floated="right" size="mini" src={college.image} />
              <Card.Header>{college.name}</Card.Header>
              <Card.Meta>{college.name}</Card.Meta>
              {college.status === 'Submitted' && (
                <Card.Description>
                  <p>Your application has been submitted.</p>
                  <strong>Status: {college.status}</strong>
                </Card.Description>
              )}
            </Card.Content>
            <Card.Content extra>
              <div>
                {college.status === 'Not Submitted' && (
                  <Button
                    ref="key"
                    key={key}
                    color="gray"
                    onClick={e => this.handleApplyClick(key, e)}>
                    Apply
                  </Button>
                )}
                {college.status === 'Pending' && (
                  <Button disabled color="yellow">
                    Pending
                  </Button>
                )}
                {college.status === 'Accepted' && (
                  <Button color="green">Accepted</Button>
                )}
                {college.status === 'Declined' && (
                  <Button disabled color="red">
                    Declined
                  </Button>
                )}
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    )
  }
}
