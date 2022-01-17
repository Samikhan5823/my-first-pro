// import React, { Component } from 'react'

// export default class Tab5 extends Component {
//   constructor(props) {
//     super(props)

//     this.menuTree = [
//       {
//         id: 1,
//         name: 'arslan',
//         checked: false,
//         subTree: [
//           { id: 2, name: 'hassan', checked: false },
//           { id: 3, name: 'moiz', checked: false },

//           {
//             id: 5,
//             name: 'hamza',
//             checked: false,
//           },
//         ],
//       },
//     ]

//     this.state = {
//       menuTree: this.menuTree,
//       openSubTab: false,
//       setUser: [],
//       isChecked: false,
//     }
//   }
//   openTab = () => {
//     this.setState({
//       openSubTab: !this.state.openSubTab,
//     })
//   }
//   handleCheck = ( e) => {
//     console.log(e);
//     // let g = this.state.menuTree.map((element) => {
//     //   if (element.id === item.id) {
//     //     if (item.subTree) {
//     //       return {
//     //         ...item,
//     //         checked: !item.checked,
//     //         subTree: item.subTree.map((child) => {
//     //           return { ...child, checked: !child.checked }
//     //         }),
//     //       }
//     //     } else {
//     //       return { ...item, checked: !item.checked }
//     //     }
//     //   }
//     // })
//     // this.setState({ menuTree: g })
//     // if (e.target.name === 'allSelect') {
//     //   let dd = this.menuTree
//     //   dd.map((item) => {
//     //     console.log('item', item)
//     //     return { ...item, isChecked: checked }
//     //   })
//     //   this.setState({
//     //     setUser: dd,
//     //   })
//     // } else {
//     //   let ff = this.menuTree.map((user) => {
//     //     user.subTree.map((items) => {
//     //       return { ...items, isChecked: checked }
//     //     })
//     //   })
//     //   console.log('ff', user)
//     // }
//   }
//   renderMainTree = () => {

//     return (
//       <div className="container">
//         <div className="form">
//           <h4>Select Items</h4>

//           {this.menuTree.map((item, index) => (
//             <div key={index}>
//               <div className="form-check">
//                 <input
//                   key={index}
//                   type="checkbox"
//                   name="allSelect"
//                   //  checked={this.state.isChecked}
//                   className="form-check-input"
//                   checked={item.checked}
//                   onChange={(e) => this.handleCheck( e)}
//                 />
//                 <svg
//                   onClick={this.openTab}
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   fill="currentColor"
//                   className="bi bi-folder2"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
//                 </svg>
//                 <p>{item.name}</p>
//                 {item.subTree
//                   ? item.subTree.map((row, i) => (
//                       <>
//                         <div>
//                           <input
//                             key={index}
//                             type="checkbox"
//                             name={row.name}
//                             // checked={this.state.isChecked}
//                             className="form-check-input"
//                             checked={row.checked}
//                             onChange={(e) => this.handleCheck(row)}
//                           />
//                           <svg
//                             onClick={this.openTab}
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="16"
//                             fill="currentColor"
//                             class="bi bi-folder2"
//                             viewBox="0 0 16 16"
//                           >
//                             <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
//                           </svg>

//                           <p>{row.name}</p>
//                         </div>
//                       </>
//                     ))
//                   : ''}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }
//   render() {
//     return <div>{this.renderMainTree()}</div>
//   }
// }

import React, { Component } from 'react'

export default class Tab5 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, name: 'abbas', checked: false },
        { id: 2, name: 'sam', checked: false },
        { id: 3, name: 'moiz', checked: false },
      ],
      allChecked: false,

      userData: [],
    }
  }
  handleChange = (e) => {
    console.log('e', e)
    const { name, value } = e.target
    // this.setState({
    //   isChecked: !this.state.isChecked,
    // });
    if (name === 'allSelect') {
      let x = this.state.data
      x = x.map((el) => {
        console.log('el', el)
        if (el.checked === false) {
          console.log('aa', el.checked)
          return { ...el, checked: !el.checked }
        }
        // el.checked = !el.checked;
      })
      this.setState({
        data: x,
        allChecked: !this.state.allChecked,
      })
    } else {
    }
  }
  render() {
    return (
      // <div className="container">
      //   <input
      //     type="checkbox"
      //     name="allSelect"
      //     value={this.state.allChecked}
      //     checked={this.state.allChecked}
      //     onChange={(e) => this.handleChange(e)}
      //   />
      //   <label>SelectAll</label>
      //   <div>
      //     {this.state.data.map((item, i) => {
      //       return (
      //         <>
      //           <input
      //             key={i}
      //             type="checkbox"
      //             name={item.name}
      //             // checked={this.state.isChecked}
      //             checked={item.checked}
      //             onChange={(e) => this.handleChange(e)}
      //           />

      //           <label>{item.name}</label>
      //         </>
      //       )
      //     })}
      //   </div>
      // </div>
      <div class="container">
      <div class="row align-items-start">
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
      </div>
      <div class="row align-items-end">
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
      </div>
    </div>
    )
  }
}
