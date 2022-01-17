import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiPictureInPictureExitFill } from 'react-icons/ri'

function TopBar({ mainmenu, closeMenu, show }) {
  return (
    <>
      <header>
        {show ? (
          <RiPictureInPictureExitFill onClick={() => closeMenu()} />
        ) : (
          <GiHamburgerMenu onClick={() => mainmenu()} />
        )}
      </header>
    </>
  )
}
export default TopBar
