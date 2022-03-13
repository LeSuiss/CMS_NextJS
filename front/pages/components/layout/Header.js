import React, { useContext } from "react";

import Link from "next/link";

import navigationStructure from "../../../constants";
import CustomMenu from "../customMUI/CustomMenu";

const Header = (props) => {
  return (
    <div>
      <CustomMenu linksToDisplay={navigationStructure} />
    </div>
  );
};

export default Header;
