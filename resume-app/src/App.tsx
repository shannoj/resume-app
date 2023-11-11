import "./App.css";
import Dropdown from "./components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Work from "./components/WorkInfo";
import General from "./components/GeneralInfo";
import Education from "./components/EducationInfo";

export default function App() {
  return (
    <>
      <div className="flex flex-row w-screen h-full justify-between items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <div className="flex flex-col h-[90%] w-1/3 items-center justify-start overflow-auto mx-5 rounded-md shadow-md bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
          <Dropdown
            title="Background Information"
            children2={<General></General>}
            height={4 / 5}
          >
            {<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
          </Dropdown>
          <Dropdown
            title="Education"
            children2={<Education></Education>}
            height={4 / 5}
          >
            {<FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>}
          </Dropdown>
          <Dropdown title="Experience" children2={<Work></Work>} height={4 / 5}>
            {<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
          </Dropdown>
        </div>
        <div className="flex bg-slate-500 h-[95%] w-1/2 mr-5"></div>
      </div>
    </>
  );
}
