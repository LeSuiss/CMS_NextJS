import React, { useContext } from "react";

import Link from "next/link";

import CustomMenu from "../customMUI/CustomMenu";

const Header = (props) => {
  return (
    <div>
      <CustomMenu linksToDisplay={props.navigationStructure} />
    </div>
  );
};

export default Header;
