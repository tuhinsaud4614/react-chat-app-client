import { Conversation } from "../../../components/User";

const className = {
  root: "flex flex-wrap",
  left: "w-full md:max-w-xs",
  main: "max-w-full",
};

export default function Home() {
  return (
    <section className={className.root}>
      <div className={className.left}>
        <Conversation />
      </div>
      <div className={className.main}></div>
    </section>
  );
}
