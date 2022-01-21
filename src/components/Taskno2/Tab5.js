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
import Pic1 from '../../assets/imges/1.jpg'
import Pic2 from '../../assets/imges/2.jpg'
import Pic3 from '../../assets/imges/3.jpg'

export default class Tab5 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImg: 1,
      imgData: [
        { id: 1, name: Pic1 },
        { id: 2, name: Pic2 },
        { id: 3, name: Pic3 },
      ],
    }
  }
  addImg = (e) => {
    console.log('e', e)
    if (this.state.imgData.length >= this.state.currentImg +1) {
      this.setState({
        currentImg: this.state.currentImg + 1,
      })
    }
  }
  lessImg = (e) => {
    console.log('e', e)

    if (this.state.imgData[0].id <= this.state.currentImg-1) {
      this.setState({
        currentImg: this.state.currentImg - 1,
      })
    }
  }

  render() {
    return (
      <>
        <div className="container">
          {/* <iframe src={Pic1}></iframe>
          <div>
            <img src={this.state.currentImg}></img>

            <button onClick={(e) => this.addImg(e)}>+</button>
            <button onClick={this.lessImg}>-</button>
          </div> */}

          <a
            className="left"
            style={{
              position: 'relative',
              left: '500px',
              cursor: 'pointer',
              top: '100px',
            }}
            onClick={this.lessImg}
          >
            ❮
          </a>
          {this.state.imgData.map((el, i) => {
            if (el.id === this.state.currentImg) {
              console.log('img', el.id)

              return <img src={el.name}></img>
            }
          })}

          <a
            className="right"
            style={{
              position: 'relative',
              left: '770px',
              cursor: 'pointer',
              top: '100px',
            }}
            onClick={this.addImg}
          >
            ❯
          </a>
        </div>
      </>
    )
  }
}
