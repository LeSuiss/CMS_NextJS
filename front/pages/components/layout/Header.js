import React, { useContext } from 'react';
import Link from 'next/link'

import { Menu } from 'semantic-ui-react'
import navigationStructure from '../../../constants';
import attributeKey from '../../../tools/attributeKey';

const Header = (props) => {

  return (

    <div >

      <Menu >
        {navigationStructure
          .map(nav => {

            console.log(attributeKey())
            // return <Link key={attributeKey()} className="item" href={nav.link} > {nav.nav}</Link>
          }
          )}
      </Menu>
    </div >



  );
}

export default Header;