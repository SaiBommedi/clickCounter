import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  Onincrease = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The button has been clicked <span className="countval">{count}</span>{' '}
          times
        </h1>
        <p>Click the button to increase the count</p>
        <button type="button" className="button" onClick={this.Onincrease}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
