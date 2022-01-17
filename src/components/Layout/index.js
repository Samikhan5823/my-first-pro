import React, { Component } from 'react'
import { ImHome } from 'react-icons/im'
import { FcAbout } from 'react-icons/fc'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import Task1 from '../Taskno1/Task1'
import Task2 from '../Taskno1/Task1'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.menuItems = [
      {
        name: 'Task1',
        path:"/",
        img: <ImHome />,
      },
      {
        name: 'Task2',
         path:"/task2",
        img:<FcAbout/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
       
        subNav: [
          {
            name: 'Task1',
            path:"/",
            img: <ImHome />,
          },
       
        ],
      },
    ]
    this.state = {
      activeMenuItem:'Task1',
      showAbout: false,
      menuItems: this.menuItems,

    }

    const { match } = { ...this.props }
  }
  render() {
    const { showAbout, menuItems,subNav } = this.state
    const { show } = this.props
    const { match } = { ...this.props }

    return (
      <>
        <div className={show ? 'sidenav active' : 'sidenav'}>
          <h3 className="logo">Vertex</h3>
          {menuItems.map((item, index) => {
            console.log('index',index);
            return (
              <Link key={index}
              to={item.path}>
                <ul>
                  <li>
                    {item.name}
                    {item.img}
                   
                  </li>
                </ul>
              </Link>
            )
          })}

        















          {/* <ul>
            <li>
              <Link to="/about">
                <FcAbout />
                Task2{' '}
                <IoIosArrowDropdownCircle
                  onClick={() => setshowAbout(!showAbout)}
                />
              </Link>
              <li class="sub-menu">
                {showAbout ? (
                  <ul>
                    <li>
                      <a href="#settings">Account</a>
                    </li>
                    <li>
                      <a href="#settings">Profile</a>
                    </li>
                    <li>
                      <a href="#settings">Password</a>
                    </li>
                  </ul>
                ) : (
                  ''
                )}
              </li>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">
                <ImHome />
                Task3
              </Link>
            </li>
          </ul> */}
        </div>
      </>
    )
  }
}
export default MainPage
