import * as React from 'react'

import { Box, Divider } from '@mui/material'

import Button from '@mui/material/Button'
import { HEADER_HEIGHT } from '../../../config'
import Link from 'next/link'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import Switcher from './Switcher'

export default function BasicMenu({ linksToDisplay, isMobile }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box className="desktopMenu" height="100%">
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : 'false'}
        onClick={handleClick}
        height="100%"
      >
        {open ? (
          <MenuOpenIcon className="mobileMenuIcon" fontSize="large" />
        ) : (
          <MenuIcon className="mobileMenuIcon" fontSize="large" />
        )}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}

        sx={{
          maxWidth: '100vw',
          '& *': { maxWidth: '100vw', left: '0 !important' }
        }}
      >
        <Switcher />
        {linksToDisplay.map((item, index) => (
          <div key={item.nav.id ?? item.nav + index} style={{ width: '100vw', }}>
            <Link
              key={item.nav.id ?? item.nav}
              onClick={handleClose}
              href={item.link}
            >
              <MenuItem>
                {item.nav.id ?? item.nav}
              </MenuItem>
            </Link>
            {index + 1 < linksToDisplay.length && (
              <Divider style={{ margin: 0 }} />
            )}
          </div>
        ))}
      </Menu>
    </Box >
  )
}
