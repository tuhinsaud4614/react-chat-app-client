import * as React from "react";
import { IoText } from "react-icons/io5";
import { demoUsers } from "../../../../utils/demo-data";
import Modal from "../../../Modal";
import OptionsItem from "../OptionsItem";
import EditNickNamesItem from "./EditNicknamesItem";

const className = {
  title: "text-neutral-700 font-semibold flex-grow text-center",
  items: "list-none m-0",
};

export default function EditNickNames() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Modal onHide={() => setOpen(false)} open={open}>
        <Modal.Head closeIcon>
          <h3 className={className.title}>Nicknames</h3>
        </Modal.Head>
        <Modal.Body className="p-4 flex-grow overflow-y-auto">
          <ul className={className.items}>
            {demoUsers.map((user) => (
              <EditNickNamesItem key={user.id} user={user} />
            ))}
          </ul>
        </Modal.Body>
      </Modal>
      <OptionsItem icon={IoText} onClick={() => setOpen(true)}>
        Edit nicknames
      </OptionsItem>
    </React.Fragment>
  );
}
