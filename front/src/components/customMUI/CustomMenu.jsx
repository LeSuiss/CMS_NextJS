/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-key */
import * as React from 'react';

import { Link } from '@material-ui/core';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu({ linksToDisplay, className }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(linksToDisplay);

  return (
    <div className={className}>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {linksToDisplay.map((item) => (
          <MenuItem>
            <Link key={item.nav.id ?? item.nav} onClick={handleClose} href={item.link}>
              {item.nav.id ?? item.nav}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
