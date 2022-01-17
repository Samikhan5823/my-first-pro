import React, { Component } from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Tab4 from './Tab4'
import Tab5 from './Tab5'

class Task2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 1,
    }
  }

  render() {
    const { activeTab } = this.state
    return (
      <>
      <div className='container'>
        <div className="row justify-content-center ml-5  ">
          <div className="col-lg-2 col-md-12  ">
            <button onClick={() => this.setState({ activeTab: 1 })}>
              Tab 1
            </button>
          </div>

          <div className="col-lg-2 col-md-12">
            <button onClick={() => this.setState({ activeTab: 2 })}>
              Tab 2
            </button>
          </div>
          <div className="col-lg-2 col-md-12 ">
            <button onClick={() => this.setState({ activeTab: 3 })}>
              Tab 3
            </button>
          </div>
          <div className="col-lg-2 col-md-12 ">
            <button onClick={() => this.setState({ activeTab: 4 })}>
              Tab 4
            </button>
          </div>
          <div className="col-lg-2 col-md-12 ">
            <button onClick={() => this.setState({ activeTab: 5 })}>
              Tab 5
            </button>
          </div>
        </div>
        </div>

        <div>
          {activeTab === 1 ? <Tab1 /> : ''}
          {activeTab === 2 ? <Tab2 /> : ''}

          {activeTab === 3 ? <Tab3 /> : ''}
          {activeTab === 4 ? <Tab4 /> : ''}
          {activeTab === 5? <Tab5 /> : ''}

        </div>
      </>
    )
  }
}
export default Task2
