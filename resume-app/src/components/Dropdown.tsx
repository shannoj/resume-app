import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {
  title: string;
  children: ReactNode;
  children2: ReactNode;
}

function Dropdown({ title, children, children2 }: Props) {
  const [IsOpen, SetIsOpen] = useState(false);

  const ToggleDropdown = () => {
    SetIsOpen(!IsOpen);
    console.log("click");
  };

  return (
    <>
      <div className="flex flex-row justify-between align-center w-4/5 h-12 bg-neutral-50 rounded-md mt-6 shadow-sm hover:shadow-lg">
        <div className="box flex flex-row justify-start align-center w-4/5 h-full">
          <div className="flex flex-col justify-center align-center h-full ml-2">
            {children}
          </div>
          <p className="flex flex-col justify-center align-center font-serif h-full ml-2 font-bold w-4/5">
            {title}
          </p>
        </div>
        <div className="flex h-full flex-col justify-center align-center w-1/5">
          {!IsOpen ? (
            <FontAwesomeIcon
              icon={faAngleDown}
              className="cursor-pointer"
              onClick={ToggleDropdown}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faAngleUp}
              className="cursor-pointer"
              onClick={ToggleDropdown}
            ></FontAwesomeIcon>
          )}
        </div>
        {IsOpen && <div>{children2}</div>}
      </div>
    </>
  );
}

export default Dropdown;
