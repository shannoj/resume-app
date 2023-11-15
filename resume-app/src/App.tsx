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
import Resume from "./components/Resume";
import { useState } from "react";

export default function App() {
  const [EducationList, setEducationList] = useState<EducationFormData[]>([]);
  const [GeneralList, setGeneralList] = useState<GeneralFormData[]>([]);
  const [WorkList, setWorkList] = useState<WorkFormData[]>([]);

  const handleEducationFormSubmit = (EducationData: EducationFormData) => {
    setEducationList((prevList) => [...prevList, EducationData]);
  };

  const handleGeneralFormSubmit = (GeneralData: GeneralFormData) => {
    setGeneralList((prevList) => [...prevList, GeneralData]);
  };

  const handleWorkFormSubmit = (WorkData: WorkFormData) => {
    setWorkList((prevList) => [...prevList, WorkData]);
  };

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
          <Resume
            firstName={
              GeneralList.length > 0 ? GeneralList[0].inlinefirstname : ""
            }
            lastName={
              GeneralList.length > 0 ? GeneralList[0].inlinelastname : ""
            }
            email={GeneralList.length > 0 ? GeneralList[0].email : ""}
            phone={GeneralList.length > 0 ? GeneralList[0].phone : ""}
            city={GeneralList.length > 0 ? GeneralList[0].city : ""}
            state={GeneralList.length > 0 ? GeneralList[0].state : ""}
            zip={GeneralList.length > 0 ? GeneralList[0].zip : ""}
            educationList={EducationList}
            workList={WorkList}
          ></Resume>
        </div>
      </div>
    </>
  );
}
