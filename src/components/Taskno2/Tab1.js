import React, { Component } from 'react'
import Format from '../../utilties/formatDate'

class Tab1 extends Component {
  constructor(props) {
    super(props)

    this.date = new Date(Date.now())

    this.data = [
      {
        name: 'ali',
        city: 'alahore',
        visitDate: '2021-12-01',
      },
      {
        name: 'ahmed',
        city: 'brawalpindi',
        visitDate: '2021-12-03',
      },
      {
        name: 'qasim',
        city: 'dlahore',
        visitDate: '2021-12-04',
      },
      {
        name: 'arslan',
        city: 'cislamabad',
        visitDate: '2021-12-06',
      },
    ]

    this.state = {
      fromDate: Format(new Date(), 'yyyy-mm-dd'),
      toDate: Format(new Date(), 'yyyy-mm-dd'),
      data: this.data,
      orginalData: this.data,
      sorted: null,
      prevSortBy:null
    }
  }
  onSort = (sortBy) => {
   
    console.log(this.state.nameSort == null)
    
    if ( this.state.sorted == 'descending' || this.state.prevSortBy != sortBy) {
      let update = this.state.data
      update.sort((a, b) => {
        var name1 = a[sortBy].toLowerCase()
        var name2 = b[sortBy].toLowerCase()
        if (name1 < name2) {
          return -1
        }
        if (name1 > name2) {
          return 1
        }
        return 0
      })
      this.setState({ data: update, sorted: 'ascending',prevSortBy:sortBy })
    } else if (this.state.sorted === 'ascending') {
      let updated = this.state.data
      updated
        .sort((a, b) => {
          var name1 = a[sortBy].toLowerCase()
          var name2 = b[sortBy].toLowerCase()
          if (name1 < name2) {
            return -1
          }
          if (name1 > name2) {
            return 1
          }
          return 0
        })
        .reverse()
      this.setState({ data: updated, sorted: 'descending',prevSortBy:sortBy })
    }
  }

  onSearchdata = () => {
    var fromdate = this.state.fromDate
    var todate = this.state.toDate
    var fromdatestamp = new Date(fromdate).getTime()
    var todatestamp = new Date(todate).getTime()
    console.log('aaaaa', todate)
    var result = this.state.data.filter((obj) => {
      return (
        new Date(obj.visitDate).getTime() <= todatestamp &&
        new Date(obj.visitDate).getTime() >= fromdatestamp
      )
    })
    this.setState({
      data: result,
    })
    
  }

  Clear = () => {
    this.setState({
      data: this.state.orginalData,
    })
  }

  render() {
    const { fromDate, toDate, data } = this.state
    return (
      <>
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-2 col-md-12 ">
            <label>From Date:</label>
            <input
              type="date"
              name="fromDate"
              id="fromDate"
              min="1900-01-01"
              max={Format(new Date(), 'yyyy-mm-dd')}
              value={fromDate}
              onChange={(event) =>
                this.setState({
                  fromDate: event.target.value,
                })
              }
            />
          </div>
          <div className="col-lg-2 col-md-12 ">
            <label>To Date:</label>
            <input
              id="toDate"
              type="date"
              name="toDate"
              min="1900-01-01"
              max={Format(new Date(), 'yyyy-mm-dd')}
              value={toDate}
              onChange={(event) =>
                this.setState({ toDate: event.target.value })
              }
            />
          </div>
          <div className="col-lg-2 col-md-12 d-flex">
          {/* <div className="d-flex justify-content-center  mt-4"> */}
            <button
              type="submit"
              onClick={this.onSearchdata}
              className="btn btn-primary"
            >
              Search
            </button>
            <button
              type="submit"
              onClick={this.Clear}
              className="btn btn-primary"
            >
              Clear
            </button>
          {/* </div> */}
        </div>
        </div>
        
        <div className="table-responsive ml-5">
          <table className="table table-hover">
            <thead>
              <tr>
                <th onClick={() => this.onSort('visitDate')}>Visit Date</th>
                <th onClick={() => this.onSort('name')}>Name</th>
                <th onClick={() => this.onSort('city')}>City</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.visitDate}</td>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        </div>
      </>
    )
  }
}
export default Tab1
