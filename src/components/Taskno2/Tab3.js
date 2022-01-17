import React, { Component } from 'react'
import { incremnet, decrement, reset } from '../ActionCount'
import { connect } from 'react-redux'
class Tab3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  render() {
    console.log(this.props)
    return (
      <div className="container mt-3">
        {`increment numbers ${this.props.count}`}
        <button onClick={() => this.props.increment()}>
          Increment
        </button>
        <button onClick={() => this.props.decrement()}>
          Decrement
        </button>
        <button onClick={() => this.props.reset()}>
          Reset
        </button>
      </div>
    )
  }
}
function mapDispatchToProps (dispatch)  {
  return {
    increment: () => dispatch(incremnet),
    decrement: () => dispatch(decrement),
    reset: () => dispatch(reset),
  }
}
function mapStateToProps (state)  {

  return {
    count:state.count,
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Tab3)
