import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  children: ReactNode;
  children2: ReactNode;
  children3: ReactNode;
  height: number;
  IsOpen: boolean;
  Id: string;
  ToggleDropdown: (e: React.MouseEvent<SVGSVGElement>) => void;
}

function Dropdown({
  title,
  children,
  children2,
  children3,
  height,
  IsOpen,
  Id,
  ToggleDropdown,
}: Props) {
  return (
    <>
      <div className="flex flex-row justify-between align-center w-4/5 min-h-[50px] max-h-[50px] bg-gradient-to-r from-gray-100 to-gray-300 rounded-md mt-6 mb-2 shadow-sm hover:shadow-lg">
        <div className="box flex flex-row justify-start align-center w-4/5 h-full">
          <div className="flex flex-col justify-center align-center h-full ml-2">
            {children}
          </div>
          <p className="flex flex-col justify-center align-center uppercase tracking-wide text-gray-700 h-full ml-2 font-bold w-4/5">
            {title}
          </p>
        </div>
        <div className="flex h-full flex-col justify-center align-center w-1/5">
          {!IsOpen ? (
            <FontAwesomeIcon
              icon={faAngleDown}
              className="cursor-pointer"
              onClick={ToggleDropdown}
              id={Id}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faAngleUp}
              className="cursor-pointer"
              onClick={ToggleDropdown}
              id={Id}
            ></FontAwesomeIcon>
          )}
        </div>
      </div>
      {IsOpen && (
        <>
          {children2}
          <div
            className={`flex flex-row justify-center min-h-${
              height / 5
            } max-h-${
              height / 5
            } align-center w-4/5 bg-gradient-to-r from-gray-100 to-gray-300 rounded-md mt-1 mb-2 shadow-sm hover:shadow-lg`}
          >
            {children3}
          </div>
        </>
      )}
    </>
  );
}

export default Dropdown;
