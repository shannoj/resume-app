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
    if (e.target.className.includes("work")) {
      setWorkFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    } else if (e.target.className.includes("education")) {
      setEducationFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    } else if (e.target.className.includes("general")) {
      setGeneralFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const [editMode, setEditMode] = useState(false);

  const [formsSubmitted, setFormSubmitted] = useState<any[]>([]);

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

  const [IsOpen, SetIsOpen] = useState<any[]>([]);

  const ToggleDropdown = (e: React.MouseEvent<SVGSVGElement>) => {
    const formElement = e.target as HTMLFormElement;
    console.log(formElement.id);
    if (formElement.id == "general-form") {
      if (IsOpen.includes("general")) {
        SetIsOpen(IsOpen.filter((id) => id !== "general"));
      } else {
        SetIsOpen([...IsOpen, "general"]);
      }
    } else if (formElement.id == "education-form") {
      if (IsOpen.includes("education")) {
        SetIsOpen(IsOpen.filter((id) => id !== "education"));
      } else {
        SetIsOpen([...IsOpen, "education"]);
      }
    } else if (formElement.id == "work-form") {
      if (IsOpen.includes("work")) {
        SetIsOpen(IsOpen.filter((id) => id !== "work"));
      } else {
        SetIsOpen([...IsOpen, "work"]);
      }
    }
  };

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditMode(true);
  };

  const handleSaveChangesClick = () => {
    setEditMode(false);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;

    if (formElement.id == "general-form") {
      setFormSubmitted([...formsSubmitted, "general"]);
    } else if (formElement.id == "education-form") {
      setFormSubmitted([...formsSubmitted, "education"]);
    } else if (formElement.id == "work-form") {
      setFormSubmitted([...formsSubmitted, "work"]);
    }
  };

  const checkSubmitted = (name: string) => {
    return formsSubmitted.includes(name);
  };

  const checkIsOpen = (name: string) => {
    return IsOpen.includes(name);
  };

  return (
    <>
      <div className="flex flex-row w-screen h-full justify-between items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <div className="flex flex-col h-[90%] w-1/3 items-center justify-start overflow-auto mx-5 rounded-md shadow-md bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
          <Dropdown
            title="Background Information"
            Id="general-form"
            children2={
              <General
                onFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                formData={generalFormData}
                editMode={editMode}
                formSubmitted={checkSubmitted("general")}
                handleEditClick={handleEditClick}
                handleSaveChangesClick={handleSaveChangesClick}
              ></General>
            }
            height={4 / 5}
            ToggleDropdown={ToggleDropdown}
            IsOpen={checkIsOpen("general")}
          >
            {<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
          </Dropdown>
          <Dropdown
            title="Education"
            Id="education-form"
            children2={
              <EducationInfo
                onFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                formData={educationFormData}
                editMode={editMode}
                formSubmitted={checkSubmitted("education")}
                handleEditClick={handleEditClick}
                handleSaveChangesClick={handleSaveChangesClick}
              ></EducationInfo>
            }
            height={4 / 5}
            ToggleDropdown={ToggleDropdown}
            IsOpen={checkIsOpen("education")}
          >
            {<FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>}
          </Dropdown>
          <Dropdown
            title="Experience"
            Id="work-form"
            children2={
              <Work
                onFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                formData={workFormData}
                editMode={editMode}
                formSubmitted={checkSubmitted("work")}
                handleEditClick={handleEditClick}
                handleSaveChangesClick={handleSaveChangesClick}
              ></Work>
            }
            height={4 / 5}
            ToggleDropdown={ToggleDropdown}
            IsOpen={checkIsOpen("work")}
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
