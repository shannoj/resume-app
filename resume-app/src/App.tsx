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
import { useState, ChangeEvent, FormEvent } from "react";
import EducationResumeBlock from "./components/EducationResumeBlock";
import WorkResumeBlock from "./components/WorkResumeBlock";

export default function App() {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    console.log(e.target);
    setWorkFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const [editMode, setEditMode] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditMode(true);
  };

  const handleSaveChangesClick = () => {
    setEditMode(false);
  };

  const [generalFormData, setGeneralFormData] = useState<GeneralFormData>({
    inlinefirstname: "",
    inlinelastname: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const [educationFormData, setEducationFormData] = useState<EducationFormData>(
    {
      school: "",
      major: "",
      yearended: "",
      yearstarted: "",
    }
  );

  const [workFormData, setWorkFormData] = useState<WorkFormData>({
    company: "",
    position: "",
    details: "",
    yearstart: "",
    yearend: "",
  });

  const handleGeneralFormSubmit = (data: GeneralFormData) => {
    setGeneralFormData(data);
  };

  const handleEducationFormSubmit = (EducationData: EducationFormData) => {
    setEducationFormData(EducationData);
  };

  const handleWorkFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
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
            children2={
              <Work
                onFormSubmit={handleWorkFormSubmit}
                handleInputChange={handleInputChange}
                formData={workFormData}
                editMode={editMode}
                formSubmitted={formSubmitted}
                handleEditClick={handleEditClick}
                handleSaveChangesClick={handleSaveChangesClick}
              ></Work>
            }
            height={4 / 5}
          >
            {<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
          </Dropdown>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-500 h-[95%] w-1/2 mr-5">
          <Resume
            firstName={generalFormData.inlinefirstname}
            lastName={generalFormData.inlinelastname}
            email={generalFormData.email}
            phone={generalFormData.phone}
            city={generalFormData.city}
            state={generalFormData.state}
            zip={generalFormData.zip}
          >
            <EducationResumeBlock
              school={educationFormData.school}
              major={educationFormData.major}
              yearstarted={educationFormData.yearstarted}
              yearended={educationFormData.yearended}
            ></EducationResumeBlock>
            <WorkResumeBlock
              company={workFormData.company}
              position={workFormData.position}
              details={workFormData.details}
              yearstart={workFormData.yearstart}
              yearend={workFormData.yearend}
            ></WorkResumeBlock>
          </Resume>
        </div>
      </div>
    </>
  );
}
