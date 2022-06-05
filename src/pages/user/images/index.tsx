import * as React from "react";

// Static path for this page
export const ImagesPageRoute = "/images";

const className = {
  root: "",
  container: "",
};

export default function Images() {
  return (
    <section className={className.root}>
      <main className={className.container}>Images</main>
    </section>
  );
}

Images.displayName = "Images.Page";
