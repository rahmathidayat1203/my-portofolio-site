import { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome";
import MainLayout from "./components/Layouts/Main.Layouts";
import NavbarLayout from "./components/Navs/Nav.Navs";
import Banner from "./components/Layouts/Banner.Layouts";
import {
  ContentsContents,
  ContentsResume,
  Footer,
} from "./components/Items/ItemCollections.Items";

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
        <ContentsContents
          title="Below are the projects that I have made and completed"
          projectsTitle="Projects Consume API with LARAVEL"
          buttonText="Go somewhere"
        />
        <ContentsResume />
        <Footer />
      </MainLayout>
    </Fragment>
  );
}

export default App;
