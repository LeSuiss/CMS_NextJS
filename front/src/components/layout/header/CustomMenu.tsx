import * as React from 'react';

import { Box, Divider } from '@mui/material';
import { MessageDescriptor, i18n } from '@lingui/core';

import Button from '@mui/material/Button';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavigationProps } from '../../../config';
import Switcher from './Switcher';

interface CustomMenuProps {
  linksToDisplay: any[];
}

export default function CustomMenu({ linksToDisplay }: CustomMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="desktopMenu">
      <Button onClick={handleClick} aria-label="Menu">
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
        sx={extendsMenuToFullWidth}
      >
        <Switcher />
        {linksToDisplay.map((item, index) => (
          <div key={`${item.nav}${index}`} style={{ width: '100vw' }}>
            <Link
              key={item.nav}
              onClick={handleClose}
              href={item.link}
              style={{ textDecoration: 'none' }}
              aria-label={item.nav}
            >
              <MenuItem>{item.nav}</MenuItem>
            </Link>
            {index + 1 < linksToDisplay.length && (
              <Divider sx={{ margin: 0 }} />
            )}
          </div>
        ))}
      </Menu>
    </Box>
  );
}

const extendsMenuToFullWidth = {
  maxWidth: '100vw',
  '& *': { maxWidth: '100vw !important', left: '0 !important' },
};
