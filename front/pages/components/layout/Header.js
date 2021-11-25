import React, { useContext } from 'react';
import Link from 'next/link'

import CustomMenu from '../customMUI/CustomMenu'
import navigationStructure from '../../../constants';

const Header = (props) => {

    return (
        <div >
            <CustomMenu linksToDisplay={navigationStructure} />

        </div >



    );
}

export default Header;