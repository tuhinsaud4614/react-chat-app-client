import * as React from "react";
import { BiLike } from "react-icons/bi";
import EmojiBox from "../../../EmojiBox";
import Modal from "../../../Modal";
import OptionsItem from "../OptionsItem";

const className = {
  title: "text-neutral-700 font-semibold flex-grow text-center",
  content: "max-h-[372px]",
};

export default function ChangeEmoji() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const changeHandler = React.useCallback((value: string) => {
    setValue(value);
  }, []);
  console.log(value);

  return (
    <React.Fragment>
      <Modal
        classes={{ container: "!max-w-[392px] !max-h-[424px]" }}
        onHide={() => setOpen(false)}
        open={open}
      >
        <Modal.Head closeIcon>
          <h3 className={className.title}>Emoji</h3>
        </Modal.Head>
        <Modal.Body>
          <EmojiBox
            onChange={changeHandler}
            classes={{ root: "max-h-[371px]" }}
          />
        </Modal.Body>
      </Modal>
      <OptionsItem icon={BiLike} onClick={() => setOpen(true)}>
        Change emoji
      </OptionsItem>
    </React.Fragment>
  );
}
