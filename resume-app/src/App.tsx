import "./App.css";
import Dropdown from "./components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Work, { WorkFormData } from "./components/WorkInfo";
import General, { GeneralFormData } from "./components/GeneralInfo";
import EducationInfo, { EducationFormData } from "./components/EducationInfo";
import Resume from "./components/resume";

const handleEducationFormSubmit = (EducationData: EducationFormData) => {
  // Use the form data in your app
  console.log(
    "Education Form data received in parent component:",
    EducationData
  );
  // Add your logic to use the form data as needed
};

const handleGeneralFormSubmit = (GeneralData: GeneralFormData) => {
  // Use the form data in your app
  console.log("General Form data received in parent component:", GeneralData);
  // Add your logic to use the form data as needed
};

const handleWorkFormSubmit = (WorkData: WorkFormData) => {
  // Use the form data in your app
  console.log("Work Form data received in parent component:", WorkData);
  // Add your logic to use the form data as needed
};

export default function App() {
  return (
    <>
      <div className="flex flex-row w-screen h-full justify-between items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <div className="flex flex-col h-[90%] w-1/3 items-center justify-start overflow-auto mx-5 rounded-md shadow-md bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
          <Dropdown
            title="Background Information"
            children2={
              <General onFormSubmit={handleGeneralFormSubmit}></General>
            }
            height={4 / 5}
          >
            {<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
          </Dropdown>
          <Dropdown
            title="Education"
            children2={
              <EducationInfo
                onFormSubmit={handleEducationFormSubmit}
              ></EducationInfo>
            }
            height={4 / 5}
          >
            {<FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>}
          </Dropdown>
          <Dropdown
            title="Experience"
            children2={<Work onFormSubmit={handleWorkFormSubmit}></Work>}
            height={4 / 5}
          >
            {<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
          </Dropdown>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-500 h-[95%] w-1/2 mr-5">
          <Resume></Resume>
        </div>
      </div>
    </>
  );
}
