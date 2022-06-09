import * as React from "react";
import { instanceOf } from "../../../utils";
import { demoImage, demoVideo } from "../../../utils/demo-data";
import { IVideo } from "../../../utils/interfaces";
import Background from "./Background";
import Content from "./Content";
import Controls from "./Controls";
import Header from "./Header";
import Slides from "./Slides";

const className = {
  root: "relative h-screen w-screen",
  content: "relative w-full h-full bg-black flex flex-col items-center",
};

const resources = Array.from({ length: 31 }, (_, i) =>
  i % 2 === 0 ? demoImage : demoVideo
);

export default function MediaSlide() {
  const [current, setCurrent] = React.useState(0);

  const images = React.useMemo(
    () =>
      resources.map((resource) =>
        instanceOf<IVideo>(resource, "thumbnail")
          ? resource.thumbnail
          : resource
      ),
    []
  );

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
              : current === resources.length - 1
              ? "forward"
              : undefined
          }
        >
          <Content
            resource={resources.length ? resources[current] : demoImage}
          />
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
