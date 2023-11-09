import "./App.css";
import Dropdown from "./components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <>
      <div className="information-container mx-5 mt-10 mb-10 rounded-md shadow-md">
        <Dropdown title="Background Information" children2={}>
          {<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
        </Dropdown>
        <Dropdown title="Education" children2={}>
          {<FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>}
        </Dropdown>
        <Dropdown title="Experience" children2={}>
          {<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
        </Dropdown>
      </div>
      <div className="resume-container"></div>
    </>
  );
}
