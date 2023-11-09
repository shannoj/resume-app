import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  children: ReactNode;
}

function Dropdown({ title, children }: Props) {
  return (
    <>
      <div className="flex flex-row justify-between align-center w-4/5 h-12 bg-neutral-50 rounded-md mt-6 shadow-md hover:shadow-lg">
        <div className="box flex flex-row justify-start align-center w-3/5 h-full">
          <div className="flex flex-col justify-center align-center h-full ml-2">
            {children}
          </div>
          <p className="flex flex-col justify-center align-center font-serif h-full ml-2">
            {title}
          </p>
        </div>
        <div className="flex h-full flex-col justify-center align-center w-1/5">
          <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
