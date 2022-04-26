import { ReactNode } from "react";
import Logo from "../Logo";

const className = {
  container: "bg-[#f0f2f5]",
  content: "mx-auto py-20 w-full md:max-w-[24.75rem] px-4 md:px-0",
};

interface Props {
  children?: ReactNode;
}

export default function AuthWrapper({ children }: Props) {
  return (
    <section className={className.container}>
      <main className={className.content}>
        <Logo classes={{ img: "h-16 md:h-20" }} />
        {children}
      </main>
      <footer className="bg-white h-52">hello</footer>
    </section>
  );
}
