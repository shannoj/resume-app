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
      <div className="flex absolute overflow-auto information-container mx-5 mt-10 mb-10 rounded-md shadow-md flex-nowrap">
        <Dropdown
          title="Background Information"
          children2={<General></General>}
        >
          {<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
        </Dropdown>
        <Dropdown title="Education" children2={<General></General>}>
          {<FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>}
        </Dropdown>
        <Dropdown title="Experience" children2={<General></General>}>
          {<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
        </Dropdown>
      </div>
      <div className="resume-container"></div>
    </>
  );
}
