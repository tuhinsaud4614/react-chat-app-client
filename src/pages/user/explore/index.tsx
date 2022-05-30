import * as React from "react";
import { Navigate } from "react-router-dom";
import {
  ExploreHeader,
  ExploreRecentSearch,
  ExploreResult,
  ExploreSuggestion,
} from "../../../components/Explore";
import { useMediaquery } from "../../../hooks";
import { HomePageRoute } from "../home";

// Static path for this page
export const ExplorePageRoute = "/explore";

const className = {
  root: "flex flex-col h-screen",
  container: "basis-full overflow-y-auto",
};

export default function Explore() {
  const matches = useMediaquery("(min-width: 640px)");
  const [state, setState] = React.useState<string>("");

  if (matches) {
    return <Navigate to={HomePageRoute} replace />;
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
        {state ? (
          <ExploreResult />
        ) : (
          <React.Fragment>
            <ExploreRecentSearch />
            <ExploreSuggestion />
          </React.Fragment>
        )}
      </main>
    </section>
  );
}

Explore.displayName = "Explore.Page";
