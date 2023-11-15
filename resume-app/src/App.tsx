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

// Define the interfaces
interface Education {
  school: string;
  major: string;
  yearstarted: string;
  yearended: string;
}

interface WorkExperience {
  company: string;
  position: string;
  details: string;
  yearstart: string;
  yearend: string;
}

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  educationList: Education[];
  workList: WorkExperience[];
}

export default function App({
  firstName,
  lastName,
  email,
  phone,
  city,
  state,
  zip,
  educationList,
  workList,
}: Props) {
  const [EducationList, setEducationList] = useState<EducationFormData[]>([]);
  const [WorkList, setWorkList] = useState<WorkFormData[]>([]);
  const [resumeData, setResumeData] = useState<Props>({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    city: "New York",
    state: "NY",
    zip: "10001",
    educationList,
    workList,
  });

  const handleEducationFormSubmit = (formData: EducationFormData) => {
    setEducationList((prevList) => [...prevList, formData]);
    updateResumeData();
  };

  const handleWorkFormSubmit = (WorkData: WorkFormData) => {
    setWorkList((prevList) => [...prevList, WorkData]);
  };

  const updateResumeData = () => {
    setResumeData((prevData) => ({
      ...prevData,
      EducationList,
      WorkList,
    }));
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
          <Resume {...resumeData}></Resume>
        </div>
      </div>
    </>
  );
}
