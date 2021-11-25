import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@material-ui/core';

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
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <div id='linksToDisplay' style={{ position: 'absolute', top: '0px', right: '0px', padding: '3px', fontSize: '1.4em !important', backgroundColor: 'lightGrey', zIndex: 999, display: 'flex', justifyContent: 'space-around', flexFlow: 'wrap' }}> <button type='button' className='customDebug' style={{ fontSize: '1.1em', width: '40%' }} onClick={() => console.log(linksToDisplay)}>CL</button> <button type='button' className='customDebug' style={{ fontSize: '1.1em', width: '40%' }} onClick={() => alert(JSON.stringify(linksToDisplay, undefined, 4))}>Alert</button> <button type='button' style={{ fontSize: '1.1em' }} onClick={() => { return document.querySelectorAll('.customDebug')[0].style.getPropertyValue('display') === 'none' ? Object.values(document.querySelectorAll('.customDebug')).map(itemxyz => itemxyz.style.setProperty('display', '')) : Object.values(document.querySelectorAll('.customDebug')).map(itemxyz => itemxyz.style.setProperty('display', 'none')) }}>X</button> <pre className='customDebug'>{JSON.stringify(linksToDisplay, undefined, 4)}</pre> </div> {/* eslint-disable-line */}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {linksToDisplay.map(item =>
                    <MenuItem><Link onClick={handleClose} href={item.link}>{item.nav}</Link>
                    </MenuItem>
                )}
            </Menu>
        </div>
    );
}