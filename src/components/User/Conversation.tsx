import { useState } from "react";
import SearchBox from "../SearchBox";
import ConversationHeader from "./ConversationHeader";

const className = {
  root: "w-full flex flex-col h-screen",
  searchBox: "px-4 pb-2.5",
  searchInputRoot: "flex items-center bg-[#868e991a] w-full rounded-3xl h-9",
  searchResult: "w-full h-[80vh]",
};

export default function Conversation() {
  const [state, setState] = useState("");
  console.log("Con", state);

  return (
    <div className={className.root}>
      <ConversationHeader />
      <SearchBox classes={{ root: className.searchBox }}>
        <SearchBox.Input
          classes={{ root: className.searchInputRoot }}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <SearchBox.Result classes={{ root: className.searchResult }}>
          <ul>
            <li>{state}</li>
          </ul>
        </SearchBox.Result>
      </SearchBox>
      <div className="bg-red-200 basis-full overflow-x-hidden overflow-x-auto">
        <div className="h-[200vh]">g</div>
      </div>
    </div>
  );
}
