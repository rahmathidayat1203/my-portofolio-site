import { Fragment } from "react";
import { Navbars } from "../Items/ItemCollections.Items";

const NavbarLayout = () => {
  return (
    <Fragment>
      <Navbars
        title="Rahmat Hidayat"
        menus={["About", "Portofolio", "Contact"]}
      />
    </Fragment>
  );
};
export default NavbarLayout;
