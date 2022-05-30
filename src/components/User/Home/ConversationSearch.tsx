import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ExplorePageRoute } from "../../../pages/user/explore";
import { demoUsers } from "../../../utils/demo-data";
import SearchBox, { useSearchBox } from "../../SearchBox";
import ConversationSearchItem from "./ConversationSearchItem";

const className = {
  root: "px-4 pb-2.5",
  action: "hidden sm:block",
  input: "flex items-center bg-[#868e991a] w-full rounded-3xl h-9",
  result:
    "z-50 w-full min-h-[40vh] max-h-[70vh] overflow-y-auto rounded-md bg-white shadow-mine-2",
  items: "list-none h-full m-0 p-2.5",
};

function SearchAction() {
  const [state, setState] = React.useState<string>("");
  const { onHideVisible } = useSearchBox();

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
          {demoUsers.map((user) => (
            <ConversationSearchItem
              key={user.id}
              user={user}
              onClick={() => {
                onHideVisible && onHideVisible(false);
                setState("");
              }}
            />
          ))}
        </ul>
      </SearchBox.Result>
    </React.Fragment>
  );
}

export default function ConversationSearch() {
  const navigate = useNavigate();
  return (
    <SearchBox classes={{ root: className.root, action: className.action }}>
      <SearchBox.Navigate
        className="sm:hidden"
        onClick={() => {
          navigate(ExplorePageRoute);
        }}
      />
      <SearchAction />
    </SearchBox>
  );
}
