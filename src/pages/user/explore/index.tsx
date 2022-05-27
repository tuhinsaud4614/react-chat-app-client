import * as React from "react";
import { Navigate } from "react-router-dom";
import {
  ExploreHeader,
  ExploreRecentSearch,
} from "../../../components/Explore";
import { useMediaquery } from "../../../hooks";
import USER_PATHS from "../routes";

const className = {
  root: "flex flex-col h-screen",
  container: "basis-full overflow-y-auto",
};

export default function Explorer() {
  const matches = useMediaquery("(min-width: 640px)");
  const [state, setState] = React.useState<string>("");

  if (matches) {
    return <Navigate to={USER_PATHS.home} replace />;
  }

  return (
    <section className={className.root}>
      <ExploreHeader
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <main className={className.container}>
        <ExploreRecentSearch />
      </main>
    </section>
  );
}
