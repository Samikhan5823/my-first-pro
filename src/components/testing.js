import React, { Component } from 'react'

class Testing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputvalue: '',
      data: [],
      allChecked: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      inputvalue: e.target.value,
    })
  }
  addData = (e) => {
    const value = this.state.inputvalue
    const dobj = Object.assign({ value, checked: false })
    this.setState({
      data: [...this.state.data, dobj],
      inputvalue: '',
    })
  }

  handleSingleChange = (e) => {
    let dd = this.state.data
    dd.forEach((element) => {
      if (element.value === e.target.value) {
        element.checked = !element.checked
      }
    })
    this.setState({
      data: dd,
    })
  }

  handleallCheckbox = (e) => {
    let dd = this.state.data
    dd.forEach((element) => {
      element.checked = !element.checked
    })
    this.setState({
      data: dd,
      allChecked: !this.state.allChecked,
    })
  }

  editCase = (row) => {
    this.setState({
      inputvalue: row.value,
    })
  }

  saveCase = (row) => {
    console.log('row', row)

    const updatedvalue = this.state.inputvalue
    let dd = this.state.data
    dd.forEach((element) => {
      console.log('element', element)
      if (element.value === row.value) {
        element.value = updatedvalue
      }
    })
    this.setState({
      data: dd,
    })
  }
  deleteCase = (index) => {
    let arr = [...this.state.data]
    arr.splice(index, 1)
    this.setState({
    
      data: arr,
    })
  }

  render() {
    const { fname, item, data, modal } = this.state
    return (

      <>
        <div className="container">
          <div>
            <label>Enter Name</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={this.state.inputvalue}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.addData}>Add</button>
        </div>
        <input
          type="checkbox"
          name="isChecked"
          value={this.state.allChecked}
          onChange={this.handleallCheckbox}
        />
        <label> All</label>
        {data &&
          data.map((row, index) => (
            <>
            <div></div>
            <div key={row.value}>
              <input
                type="checkbox"
                value={row.value}
                onChange={this.handleSingleChange}
                checked={row.checked}
              />
              <label> </label>
              {row.value}

              <button onClick={() => this.editCase(row)}>edit</button>

              <button onClick={() => this.deleteCase(index)}>delete</button>

              <button onClick={() => this.saveCase(row)}>save</button>
            </div>
          
            </>
          ))}
            
      </>
    )
  }
}
export default Testing



