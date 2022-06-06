import { demoImage } from "../../../utils/demo-data";
import Background from "./Background";

const className = {
  root: "relative h-screen w-screen",
};

export default function MediaSlide() {
  return (
    <section className={className.root}>
      <Background image={demoImage} />
    </section>
  );
}
