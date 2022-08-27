import { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome";
import MainLayout from "./components/Layouts/Main.Layouts";
import NavbarLayout from "./components/Navs/Nav.Navs";
import Banner from "./components/Layouts/Banner.Layouts";
import { Carousels } from "./components/Items/ItemCollections.Items";

function App() {
  useEffect(() => {
    document.title = "Rahmat Hidayat";
    document.body.classList.add("body-element");
  }, []);
  return (
    <Fragment>
      <MainLayout>
        <NavbarLayout />
        <Banner />
        <Carousels />
      </MainLayout>
    </Fragment>
  );
}

export default App;
