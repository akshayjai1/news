import React from "react";
import radium, { StyleRoot } from "radium";
import { text, array } from "@storybook/addon-knobs";
import CreatedArticles from "../CreatedArticles/CreatedArticles";

const CreatorSentItems = props => {
  return (
    <StyleRoot>
      <CreatedArticles
        heading={text("heading", "Recommended articles")}
        calloutLabel={text("Callout label", "More recommendations")}
        calloutHref={text("Callout URL", "/category/recommended")}
        articles={array("Articles", [
          {
            title:
              "New York’s most iconic buildings reimagined on deserted streets",
            paragraph: `A new exhibition in New York of the city’s most iconic
              buildings shows them in a new light, with the bustle of modern life
              stripped out. Photographer`,
            image: "http://placehold.it/410x230",
            href: "/",
            category: "Art and culture",
            categoryHref: "/"
          },
          {
            title: "Pull up a seat for David Attenborough’s Planet Earth II",
            paragraph: `Ten years after the BBC series, Planet Earth, captivated a
              global audience of over half a billion people, Planet Earth II is
              coming to our TV screens, narrated once`,
            image: "http://placehold.it/410x230",
            href: "/",
            category: "Wildlife and nature",
            categoryHref: "/"
          }
        ])}
      />
    </StyleRoot>
  );
};

export default radium(CreatorSentItems);
