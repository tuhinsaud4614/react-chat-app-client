import * as React from "react";
import { useRipple } from "../../hooks";
import ListTile from "../ListTile";
import SearchBox from "../SearchBox";

const className = {
  root: "px-4 pb-2.5",
  action: "hidden sm:block",
  input: "flex items-center bg-[#868e991a] w-full rounded-3xl h-9",
  result: "w-full h-[80vh] rounded-md bg-white",
  items: "list-none m-0 p-2.5",
};

function SearchAction() {
  const [state, setState] = React.useState<string>("");
  // console.log("Con", state);
  const { mouseEvent } = useRipple();
  return (
    <React.Fragment>
      <SearchBox.Input
        classes={{ root: className.input }}
        onChange={(e) => {
          setState(e.target.value);
        }}
        placeholder="Search"
        value={state}
        area-label="Search"
        autoComplete="off"
      />
      <SearchBox.Result classes={{ root: className.result }}>
        <ul className={className.items}>
          <li>
            <ListTile
              onClick={(e) => {
                mouseEvent(e);
              }}
              className="rounded bg-indigo-500"
            >
              <ListTile.Leading>{state}</ListTile.Leading>
            </ListTile>
          </li>
        </ul>
      </SearchBox.Result>
    </React.Fragment>
  );
}

export default function ConversationSearch() {
  return (
    <SearchBox classes={{ root: className.root, action: className.action }}>
      <SearchBox.Navigate className="sm:hidden" />
      <SearchAction />
    </SearchBox>
  );
}
