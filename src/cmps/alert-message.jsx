import { React, Component } from 'react'
import ReactJsAlert from 'reactjs-alert'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: 'success',
      status: true,
      title: 'Thank You for your purchase.',
    }
  }

  render() {
    return (
      <div className='App'>
        <ReactJsAlert
          status={this.state.status} // true or false
          type={this.state.type} // success, warning, error, info
          title={this.state.title}
          Close={() => this.setState({ status: false })}
        />
      </div>
    )
  }
}
