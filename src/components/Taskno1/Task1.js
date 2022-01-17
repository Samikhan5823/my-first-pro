
import React, { Component } from 'react'
import AutoComplete from '../Autocomplete/AutoComplete'

import Tabn1 from './Tabn1'

class Task1 extends Component {
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
          <div className="col-lg-4 col-md-12  ">
            <button onClick={() => this.setState({ activeTab: 1 })}>
            AutoComplete 
            </button>
          </div>

          <div className="col-lg-2 col-md-12">
            <button onClick={() => this.setState({ activeTab: 2 })}>
              Tab 2
            </button>
          </div>
        
        </div>
        </div>

        <div>
          {activeTab === 1 ? <AutoComplete /> : ''}
          {activeTab === 2 ? <Tabn1 /> : ''}

         

        </div>
      </>
    )
  }
}
export default Task1
