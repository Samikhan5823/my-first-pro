import React, { Component } from 'react'

export default class Tabn2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // questn1:this.props.allQuestions[0].question1,
      // questn2:this.props.allQuestions[0].question2
    }
  }

//       values=(e)=>{
//   this.setState({
//       questn1:e.target.value,
//       questn2:e.target.value,
//   })
//       }

  render() {
    console.log('d', this.props)
    return (
      <div className="col-12 mb-3">
        <label>question:1</label>
        <input type="text" onChange={(e) => this.props.values(e)} />
        <label>question:2</label>
        <input type="text" onChange={(e) => this.props.values(e)} />
      </div>
    )
  }
}
