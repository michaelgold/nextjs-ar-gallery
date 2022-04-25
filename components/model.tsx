import { Button, Box, useMediaQuery } from "@chakra-ui/react";
// import type { ComponentStyleConfig } from "@chakra-ui/theme";

import { useState, useEffect } from "react";

import "@google/model-viewer/lib/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src: string;
  poster?: string;
  iosSrc?: string;
  seamlessPoster?: boolean;
  autoplay?: boolean;
  environmentImage?: string;
  exposure?: string;
  interactionPromptThreshold?: string;
  shadowIntensity?: string;
  ar?: boolean;
  arModes?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  cameraOrbit?: string;
  alt?: string;
  sx?: any;
}

const Model = (props: any) => {
  const [sm, md, lg, xl] = useMediaQuery([
    "(min-width: 30em)",
    "(min-width: 48em)",
    "(min-width: 62em)",
    "(min-width: 80em)"
  ]);

  const [width, setWidth] = useState("20em");
  const [height, setHeight] = useState("20em");
  useEffect(() => {
    let w = "20em";
    let h = "20em";

    if (sm) {
      w = "24em";
      h = "24em";
    }
    if (md) {
      w = "18em";
      h = "18em";
    }
    if (lg) {
      w = "18em";
      h = "18em";
    }
    if (xl) {
      w = "18em";
      h = "18em";
    }
    setWidth(w);
    setHeight(h);
  }, [sm, md, lg, xl]);
  console.log(width);
  const iosSrc = props.usdzFile ? props.usdzFile : "";

  return (
    <Box id="card" w={width} h={height}>
      <model-viewer
        id="first"
        src={props.glbFile}
        ios-src={iosSrc}
        seamless-poster
        environment-image="neutral"
        exposure="1.0"
        interaction-prompt-threshold="0"
        shadow-intensity="0"
        ar
        autoplay
        ar-modes="webxr scene-viewer quick-look"
        auto-rotate
        camera-controls
        camera-orbit="0deg 90deg 0deg 8.37364m"
        alt="3D model"
        style={{
          display: "block",
          width: width,
          height: height
        }}
      >
        <Box
          className="poster"
          slot="poster"
          // style={{ backgroundImage: "url(/artie.1.webp)" }}
        >
          <img className="pre-prompt" src="/assets/prompt.svg" />
        </Box>

        {/* <div className="progress-bar" slot="progress-bar">
            <div className="update-bar"></div>
          </div> */}

        <Button mt={"19em"} slot="ar-button" className="ar-button">
          View in your space
        </Button>

        <div className="ar-prompt">
          <img src="/assets/hand.png" />
        </div>
      </model-viewer>
    </Box>
  );
};

export default Model;
