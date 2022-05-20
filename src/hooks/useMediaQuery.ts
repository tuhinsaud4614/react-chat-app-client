import * as React from "react";

export default function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = React.useState<boolean>(getMatches(query));

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query);

    function handleChange() {
      setMatches(getMatches(query));
    }

    // Listen matchMedia
    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}
