/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-key */
import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Divider } from '@mui/material';

export default function BasicMenu({ linksToDisplay }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="desktopMenu">
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {
          open
            ? <MenuOpenIcon className="mobileMenuIcon" fontSize="large" />
            : <MenuIcon className="mobileMenuIcon" fontSize="large" />
        }
      </Button>
      <Menu
        id="menu_DropDown"
        PaperProps={{
          style: {
            width: '100%',
            maxWidth: '100%',
            translateY: 220,
            top: 2,
            marginTop: '1px',
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {linksToDisplay.map((item, index) => (
          <>
            <MenuItem>
              <Link key={item.nav.id ?? item.nav} onClick={handleClose} href={item.link}>
                {item.nav.id ?? item.nav}
              </Link>
            </MenuItem>
            {index + 1 < linksToDisplay.length && <Divider style={{ margin: 0 }} />}
          </>
        ))}
      </Menu>
    </div>
  );
}
