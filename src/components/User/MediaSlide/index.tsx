import * as React from "react";
import { demoImage } from "../../../utils/demo-data";
import Background from "./Background";
import Content from "./Content";
import Controls from "./Controls";
import Header from "./Header";
import Slides from "./Slides";

const className = {
  root: "relative h-screen w-screen",
  content: "relative w-full h-full bg-black flex flex-col items-center",
};

const images = Array.from({ length: 30 }, () => demoImage);

export default function MediaSlide() {
  const [current, setCurrent] = React.useState(0);

  const actionHandler = (mode: "back" | "forward") => {
    if (mode === "back") {
      setCurrent((prev) => --prev);
    } else {
      setCurrent((prev) => ++prev);
    }
  };

  return (
    <section className={className.root}>
      <div className={className.content}>
        <Header />
        <Controls
          onAction={actionHandler}
          hideArrow={
            current === 0
              ? "back"
              : current === images.length - 1
              ? "forward"
              : undefined
          }
        >
          <Content image={images.length ? images[current] : demoImage} />
        </Controls>
        <Slides
          current={current}
          onTab={(index) => {
            setCurrent(index);
          }}
          images={images}
        />
      </div>
      <Background image={demoImage} />
    </section>
  );
}
