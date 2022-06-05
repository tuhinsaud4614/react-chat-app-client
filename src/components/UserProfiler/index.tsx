import * as React from "react";
import { BiBlock, BiUser } from "react-icons/bi";
import { CgUnblock } from "react-icons/cg";
import { FaBell, FaBellSlash } from "react-icons/fa";
import { useRipple, useTooltip } from "../../hooks";
import { getUserName } from "../../utils";
import { IUser } from "../../utils/interfaces";
import Modal from "../Modal";
import Picture from "../Picture";

const className = {
  title: "text-neutral-700 font-semibold flex-grow text-center",
  container:
    "flex flex-col justify-center sm:flex-row sm:items-center sm:justify-start",
  image:
    "sm:w-1/2 sm:max-w-xs border-8 rounded-2xl overflow-hidden flex items-center justify-center",
  content:
    "flex flex-col items-center sm:items-start sm:flex-grow pt-4 sm:pl-4 sm:pt-0",
  name: "text-lg text-secondary font-semibold flex items-center",
  status:
    "inline-block ml-2 px-1.5 py-1 bg-green-200 text-xs rounded-md text-neutral-700",
  email:
    "text-sm text-secondary inline-block mt-1.5 -ml-1.5 px-1.5 py-1 hover:bg-primary/10 active:bg-primary/10 rounded-md",
  actions: "mt-1.5 flex items-center",
  actionBtn:
    "inline-block text-secondary hover:bg-primary/20 p-1 rounded-full last:ml-2 relative border",
};

interface Props {
  open: boolean;
  onClose(): void;
  user: IUser;
}

export default function UserProfiler({ open, onClose, user }: Props) {
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });
  const { onHoverEnd, onHoverStart } = useTooltip();

  return (
    <Modal
      onHide={onClose}
      open={open}
      classes={{ container: "!max-w-sm sm:!max-w-[520px]" }}
    >
      <Modal.Head closeIcon>
        <h3 className={className.title}>Profile</h3>
      </Modal.Head>
      <Modal.Body className="p-4">
        <section className={className.container}>
          <div className={className.image}>
            {user.avatar ? (
              <Picture image={user.avatar} />
            ) : (
              <BiUser size={150} className="text-gray-500" />
            )}
          </div>
          <div className={className.content}>
            <h3 className={className.name}>
              {getUserName(user)}
              <span className={className.status}>
                {false ? "Active" : "8 m"}
              </span>
            </h3>
            <a
              href={`mailto:${user.email}`}
              aria-label="Email address"
              className={className.email}
            >
              {user.email}
            </a>
            <section className={className.actions}>
              <button
                className={className.actionBtn}
                aria-label="Block/Unblock"
                onClick={(e) => {
                  mouseEvent(e);
                }}
                onMouseEnter={(e) => {
                  onHoverStart(e, {
                    text: "block",
                    className: "capitalize",
                  });
                }}
                onMouseLeave={(e) => {
                  onHoverEnd();
                }}
              >
                {true ? <BiBlock size={24} /> : <CgUnblock size={24} />}
              </button>
              <button
                className={className.actionBtn}
                aria-label="Mute/Alert"
                onClick={(e) => {
                  mouseEvent(e);
                }}
                onMouseEnter={(e) => {
                  onHoverStart(e, {
                    text: "mute",
                    className: "capitalize",
                  });
                }}
                onMouseLeave={(e) => {
                  onHoverEnd();
                }}
              >
                {true ? <FaBell size={24} /> : <FaBellSlash size={24} />}
              </button>
            </section>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}
