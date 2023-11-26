import Dropdown from "./components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Work from "./components/WorkInfo";
import General from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import Resume from "./components/Resume";
import { useState, ChangeEvent, FormEvent } from "react";
import EducationResumeBlock from "./components/EducationResumeBlock";
import WorkResumeBlock from "./components/WorkResumeBlock";
import AddButton from "./components/AddButton";
import { v4 as uuidv4 } from "uuid";

export interface EducationItem {
  school: string;
  major: string;
  yearended: string;
  yearstarted: string;
  id: string;
  [key: string]: string;
}

export interface WorkItem {
  company: string;
  position: string;
  details: string;
  yearstart: string;
  yearend: string;
  id: string;
  [key: string]: string;
}

export interface GeneralItem {
  name: string;
  text: string;
}

export interface MyData {
  general: GeneralItem[];
  work: WorkItem[];
  education: EducationItem[];
}

export default function App() {
  const [data, setData] = useState<MyData>({
    general: [
      { name: "inlinefirstname", text: "" },
      { name: "inlinelastname", text: "" },
      { name: "email", text: "" },
      {
        name: "phone",
        text: "",
      },
      {
        name: "city",
        text: "",
      },
      {
        name: "state",
        text: "",
      },
      {
        name: "zip",
        text: "",
      },
    ],
    work: [
      {
        company: "",
        position: "",
        details: "",
        yearstart: "",
        yearend: "",
        id: uuidv4(),
      },
    ],
    education: [
      {
        school: "",
        major: "",
        yearended: "",
        yearstarted: "",
        id: uuidv4(),
      },
    ],
  });

  const addEducation = () => {
    setData({
      ...data,
      education: [
        ...data.education,
        { school: "", major: "", yearended: "", yearstarted: "", id: uuidv4() },
      ],
    });
  };

  let wrCount = 0;
  const addWork = () => {
    wrCount += 1;
    setData({
      ...data,
      work: [
        ...data.work,
        {
          company: "",
          position: "",
          details: "",
          yearstart: "",
          yearend: "",
          id: uuidv4(),
        },
      ],
    });
  };

  const removeEducation = (id: string) => {
    setData({
      ...data,
      education: data.education.filter((ed) => ed.id !== id),
    });
  };

  const removeWork = (id: string) => {
    setData({
      ...data,
      work: data.work.filter((wr) => wr.id !== id),
    });
  };

  const handleEducation = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    id: string
  ) => {
    setData({
      ...data,
      education: data.education.map((ed) => {
        if (ed.id === id) {
          ed[e.target.id] = e.target.value;
        }
        return ed;
      }),
    });
  };

  const handleWork = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    id: string
  ) => {
    setData({
      ...data,
      work: data.work.map((wr) => {
        if (wr.id === id) {
          wr[e.target.id] = e.target.value;
        }
        return wr;
      }),
    });
  };

  const handleGeneral = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      general: data.general.map((element) => {
        if (element.name === e.target.id) element.text = e.target.value;
        return element;
      }),
    });
  };

  const [formsInEdit, setFormsInEdit] = useState<string[]>([]);

  const [editMode, setEditMode] = useState(false);

  const [formsSubmitted, setFormSubmitted] = useState<string[]>([]);

  const [IsOpen, SetIsOpen] = useState<any[]>([]);

  const ToggleDropdown = (e: React.MouseEvent<SVGSVGElement>) => {
    const formElement = e.target as HTMLFormElement;
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

  const removeFromEdit = (id: string) => {
    setFormsInEdit(formsInEdit.filter((element) => element !== id));
  };

  const handleEditClick = (id: string) => {
    setFormsInEdit([...formsInEdit, id]);
  };

  const checkInEdit = (id: string) => {
    return formsInEdit.includes(id);
  };

  const handleSaveChangesClick = (id: string) => {
    removeFromEdit(id);
  };

  const checkSubmitted = (formId: string) => {
    return formsSubmitted.includes(formId);
  };

  const handleSubmit = (id: string) => {
    setFormSubmitted([...formsSubmitted, id]);
    console.log(formsSubmitted);
  };

  console.log(formsSubmitted);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formId = formElement.id;
    console.log(formElement.id);
    /*if (!formsSubmitted.includes(formId)) {
      setFormSubmitted((prevFormsSubmitted) => [...prevFormsSubmitted, formId]);
    }*/
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
              /* <General
                data={data}
                onFormSubmit={handleFormSubmit}
                handleInputChange={handleGeneral}
                editMode={editMode}
                formSubmitted={checkSubmitted("general-form")}
                handleEditClick={handleEditClick(id)}
                handleSaveChangesClick={handleSaveChangesClick}
                height={4 / 5}
              ></General> */
              data.education.map((ed, index) => (
                <EducationInfo
                  key={index}
                  onFormSubmit={handleFormSubmit}
                  handleEducation={handleEducation}
                  editMode={checkInEdit(ed.id)}
                  formSubmitted={checkSubmitted(ed.id)}
                  handleEditClick={handleEditClick}
                  handleSaveChangesClick={handleSaveChangesClick}
                  height={4 / 5}
                  removeClick={removeEducation}
                  addSubmited={handleSubmit}
                  school={ed.school}
                  major={ed.major}
                  yearstart={ed.yearstarted}
                  yearend={ed.yearended}
                  id={ed.id}
                ></EducationInfo>
              ))
            }
            children3={<AddButton addButtonClick={addEducation}></AddButton>}
            height={4 / 5}
            ToggleDropdown={ToggleDropdown}
            IsOpen={checkIsOpen("general")}
          >
            {<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
          </Dropdown>
          <Dropdown
            title="Education"
            Id="education-form"
            children2={data.education.map((ed, index) => (
              <EducationInfo
                key={index}
                onFormSubmit={handleFormSubmit}
                handleEducation={handleEducation}
                editMode={checkInEdit(ed.id)}
                formSubmitted={checkSubmitted(ed.id)}
                handleEditClick={handleEditClick}
                handleSaveChangesClick={handleSaveChangesClick}
                height={4 / 5}
                removeClick={removeEducation}
                addSubmited={handleSubmit}
                school={ed.school}
                major={ed.major}
                yearstart={ed.yearstarted}
                yearend={ed.yearended}
                id={ed.id}
              ></EducationInfo>
            ))}
            children3={<AddButton addButtonClick={addEducation}></AddButton>}
            height={4 / 5}
            ToggleDropdown={ToggleDropdown}
            IsOpen={checkIsOpen("education")}
          >
            {<FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>}
          </Dropdown>
          <Dropdown
            title="Experience"
            Id="work-form"
            children2={data.work.map((wr, index) => (
              <Work
                key={index}
                onFormSubmit={handleFormSubmit}
                handleWork={handleWork}
                editMode={checkInEdit(wr.id)}
                formSubmitted={checkSubmitted(wr.id)}
                handleEditClick={handleEditClick}
                handleSaveChangesClick={handleSaveChangesClick}
                addSubmited={handleSubmit}
                removeClick={removeWork}
                height={4 / 5}
                position={wr.position}
                company={wr.company}
                details={wr.details}
                yearend={wr.yearend}
                yearstart={wr.yearstart}
                id={wr.id}
              ></Work>
            ))}
            children3={<AddButton addButtonClick={addWork}></AddButton>}
            height={4 / 5}
            ToggleDropdown={ToggleDropdown}
            IsOpen={checkIsOpen("work")}
          >
            {<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
          </Dropdown>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-500 h-[95%] w-1/2 mr-5">
          <Resume data={data}>
            <EducationResumeBlock data={data}></EducationResumeBlock>
            <WorkResumeBlock data={data}></WorkResumeBlock>
          </Resume>
        </div>
      </div>
    </>
  );
}
