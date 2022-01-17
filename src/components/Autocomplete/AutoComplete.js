import React, { Component } from 'react'
import './autocomplete.css'
class AutoComplete extends Component {
  constructor(props) {
    super(props)

    this.items = [
      'sami',
      'arslan',
      'ahmed',
      'ammar',
      'ali',
      'suleman',
      'hammad',
      'moiz',
      'hadi',
    ]
    this.state = {
      items: this.items,
      suggestions: [],
      text: '',
      selected: false,
      selectrowNum: 0,
      closeOutside: true,
    }
  }
  myRef = React.createRef()

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }
  handleClickOutside = (event) => {
    if (!this.myRef.current.contains(event.target)) {
      this.setState({
        suggestions: [],
      })
    }
  }

  handleChange = (e) => {
    const value = e.target.value
    let suggestions = []

    if (value.length === 0) {
      this.setState({
        selected: true,
      })
    }
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i')
      suggestions = this.state.items.sort().filter((v, index) => regex.test(v))
    }
    this.setState(() => ({ suggestions, text: value }))
  }

  suggSelected = (value) => {
    this.setState({
      text: value,
      suggestions: [],
    })
  }
  handleEnter = (e) => {
    if (e.key === 'Enter') {
      let index = this.state.selectrowNum

      this.setState({
        text: this.state.suggestions[index],
        suggestions: [],
      })
    }
  }

  onKeyDownPressed = (e) => {
    const { selectrowNum, suggestions } = this.state
    if (e.keyCode == '38') {
      if (selectrowNum > 0) {
        let row = selectrowNum - 1
        // elem.scrollIntoView(false)
        this.setState({
          selectrowNum: selectrowNum - 1,
        })
      }
    } else if (e.keyCode == '40') {
      const { selectrowNum, suggestions } = this.state

      if (selectrowNum < suggestions.length - 1) {
        this.setState({
          selectrowNum: selectrowNum + 1,
        })
      }
    }
  }
  render() {
    return (
      <>
        <div ref={this.myRef} className="container">
          <div className="row">
            <div className=" mx-auto mt-5">
              <h2>Autocomplete</h2>
              <input
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
                onKeyDown={(e) => this.onKeyDownPressed(e)}
                onKeyPress={this.handleEnter}
              ></input>
           

            {this.state.suggestions.length > 0 ? (
              <ul className="bg-info">
                {this.state.suggestions.map((item, i) => {
                  let selectrow = false
                  if (i === this.state.selectrowNum) {
                    selectrow = true
                  }
                  return (
                    <li
                      style={{ background: selectrow ? 'grey' : '' }}
                      onClick={() => this.suggSelected(item)}
                    >
                      {item}
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </div>
        </div>
        </div>
      </>
    )
  }
}
export default AutoComplete
