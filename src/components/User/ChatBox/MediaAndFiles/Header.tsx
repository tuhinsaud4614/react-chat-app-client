import * as React from "react";
import { BsArrowLeft } from "react-icons/bs";
import MediaAndFilesContext from "./context";

const className = {
  header: "flex items-center px-4 py-2.5 w-full",
  backButton:
    "text-secondary hover:bg-primary/20 flex items-center justify-center p-1 rounded-full",
  title: "font-semibold text-neutral-700 ml-2.5 leading-normal",
};

export default function Header() {
  const { onTab } = React.useContext(MediaAndFilesContext);
  return (
    <header className={className.header}>
      <button
        type="button"
        aria-label="Back to home"
        className={className.backButton}
        onClick={() => {
          onTab(null);
        }}
      >
        <BsArrowLeft size={24} />
      </button>
      <h1 className={className.title} aria-label="Images, videos & document">
        Images, videos & document
      </h1>
    </header>
  );
}

Header.displayName = "MediaAndFiles.Header";
