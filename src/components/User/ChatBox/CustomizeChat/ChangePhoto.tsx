import * as React from "react";
import { BsCardImage } from "react-icons/bs";
import OptionsItem from "../OptionsItem";

export default function ChangePhoto() {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const clickHandler = () => {
    inputRef.current?.click();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files.length === 1) {
      const file = event.currentTarget.files[0];
      const type = file.type.replace("image/", "");
      if (
        !["jpg", "png", "jpeg", "gif"].includes(type) ||
        file.size > 5 * 1000000
      ) {
        return;
      }
    }
  };

  return (
    <OptionsItem
      icon={BsCardImage}
      ariaLabel="Change photo"
      onClick={clickHandler}
    >
      Change photo
      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.png,.jpeg,.gif"
        className="hidden"
        onChange={changeHandler}
      />
    </OptionsItem>
  );
}
