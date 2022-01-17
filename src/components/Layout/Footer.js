import React, { Component } from 'react'
import medifusionLOGO from '../../assets/img/medifusion-logo.png'
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          All rights reserved, 2021 by{' '}
          <span>
            <img className="footer-logo" src={medifusionLOGO} alt="Footer Logo" />
          </span>
        </div>
      </footer>
    )
  }
}
