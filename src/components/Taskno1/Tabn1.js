import React, { Component } from 'react'
import Tabn2 from './Tabn2'
export default class Tabn1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drop1: '',
      drop2: '',
      d2FullList: {
        car: ['c1', 'c2'],
        bike: ['b1', 'b2'],
      },
      d2List: [],
      allQuestions: [],
    }
  }

  handleSelect = (e) => {
    this.setState({
      drop1: e.target.value,
      d2List: this.state.d2FullList[e.target.value],
    })
  }
  handleOption = (e) => {
    this.setState({
      drop2: e.target.value,
    })
  }
  createtQuestion = () => {
    this.setState({
      allQuestions: [
        ...this.state.allQuestions,
        {id:this.state.allQuestions.length, question1: '', question2: '' },
      ],
    })
  }
  handleChange = (e) => {
    console.log('e', e)
    this.setState({
      allQuestions: [
        ...this.state.allQuestions,
        { question1: e.target.value, question2: e.target.value },
      ],
    })
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {/* <div className="col-3"> */}

            <select
              name="select01"
              id="select01"
              onChange={(e) => this.handleSelect(e)}
            >
              <option value="">choose</option>
              <option value="car">car</option>
              <option value="bus">bus</option>
              <option value="bike">bike</option>
            </select>

            <select
              name="select02"
              id="select02"
              disabled={this.state.drop1 ? false : true}
              onChange={(e) => this.handleOption(e)}
            >
              <option value="">Please Select</option>
              {this.state.d2List &&
                this.state.d2List.map((el) => {
                  return (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  )
                })}
            </select>
            <br />
            <button
              onClick={() => {
                this.createtQuestion()
              }}
              disabled={
                this.state.drop1 === '' || this.state.drop2 === ''
                  ? true
                  : false
              }
            >
              open
            </button>
          </div>
          <div className="row">
            {this.state.allQuestions.map((el) => {
              return <Tabn2 values={this.handleChange} el={el} />
              console.log('el', el)
            })}
          </div>
        </div>
        {/* </div> */}
      </>
    )
  }
}
