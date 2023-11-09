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
        <Dropdown title="Background Information">
          {
            <FontAwesomeIcon
              className="flex flex-col justify-center align-center"
              icon={faUser}
            ></FontAwesomeIcon>
          }
        </Dropdown>
        <Dropdown title="Education">
          {<FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>}
        </Dropdown>
        <Dropdown title="Experience">
          {<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
        </Dropdown>
      </div>
      <div className="resume-container"></div>
    </>
  );
}
