import Conversation from "../../../components/User/Conversation";

const className = {
  root: "flex flex-wrap",
  left: "w-full sm:max-w-xs",
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
