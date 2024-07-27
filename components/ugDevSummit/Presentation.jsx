import React, { useRef } from "react";
import { useEffect } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css"; // You can choose a different theme
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import "reveal.js/plugin/highlight/monokai.css";
import { SlidesContent } from "./SlidesContent";

const UgDevSummitSlides = () => {
  return (
    <div className='h-screen w-screen'>
      <Presentation />
    </div>
  );
};

const Presentation = () => {
  const deckDivRef = useRef(null); // reference to deck container div
  const deckRef = useRef(null); //

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide",
      // other config options
    });

    deckRef.current
      .initialize({
        plugins: [RevealHighlight],
        autoSlide: 2000,
        loop: true,
        controls: true,
        progress: false,
      })
      .then(() => {
        // good place for event handlers and plugin setups
      });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <div className='reveal' ref={deckDivRef}>
      <div className='slides'>
        <SlidesContent />
      </div>
    </div>
  );
};

export default UgDevSummitSlides;
