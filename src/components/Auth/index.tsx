import { ReactNode } from "react";
import Footer from "../Footer";
import Logo from "../Logo";

const className = {
  container: "bg-zinc-50",
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
      <Footer />
    </section>
  );
}
