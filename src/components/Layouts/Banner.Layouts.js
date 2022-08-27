import { Fragment } from "react";
import { Jumbotron } from "../Items/ItemCollections.Items";
const Banner = () => {
  return (
    <Fragment>
      <Jumbotron
        firstTag="wellcome to"
        secondTag="my portofolio website !"
        greetingTag="Hey friends, I'm"
        skill={["Mobile Dev", "Web Dev"]}
        description="Building an application until success running is very fun for me
                     and, I am very interested in learning new things related to
                     technology and programming"
        buttonText={["Download Resume", "Get a free quote"]}
      />
    </Fragment>
  );
};

export default Banner;
