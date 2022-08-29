import { Fragment } from "react";
import { Navbars } from "../Items/ItemCollections.Items";

const NavbarLayout = () => {
  return (
    <Fragment>
      <Navbars
        title="Rahmat Hidayat"
        menus={["About", "Projects", "Contact", "Resume"]}
      />
    </Fragment>
  );
};
export default NavbarLayout;
