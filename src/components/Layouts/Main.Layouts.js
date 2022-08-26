import { Fragment } from "react";
import "../../assets/style.css";

const MainLayout = ({ children }) => {
  console.log(children);

  return (
    <>
      <Fragment>{children}</Fragment>
    </>
  );
};
export default MainLayout;
