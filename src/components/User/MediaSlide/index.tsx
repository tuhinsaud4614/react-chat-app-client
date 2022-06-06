import { demoImage } from "../../../utils/demo-data";
import Background from "./Background";
import Header from "./Header";

const className = {
  root: "relative h-screen w-screen",
  content: "relative w-full h-full bg-black",
};

export default function MediaSlide() {
  return (
    <section className={className.root}>
      <div className={className.content}>
        <Header />
      </div>
      <Background image={demoImage} />
    </section>
  );
}
