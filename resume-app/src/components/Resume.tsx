import { ReactNode } from "react";

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
  EducationChild: ReactNode;
  workList: WorkExperience[];
}

// ... (interface definitions)

function Resume({
  firstName,
  lastName,
  email,
  phone,
  city,
  state,
  zip,
  EducationChild,
  workList,
}: Props) {
  return (
    <div className="flex flex-col justify-start items-center h-[95%] w-2/3 bg-white">
      {/* Header section */}
      <div className="flex flex-col items-center justify-between h-[10%] w-5/6 border-solid border-black mb-12 mt-2">
        <p className="text-2xl font-bold">
          {firstName} {lastName}
        </p>
        <p className="text-xs">{email}</p>
        <p className="text-xs">{phone}</p>
        <p className="text-xs">
          {city}&nbsp;{state}&nbsp;{zip}
        </p>
      </div>

      {/* Education section */}
      {EducationChild}
      {/* Work Experience section */}
      <div className="flex w-full h-4/6 flex-col p-2">
        <div className="flex felx-row w-full justify-start h-5 px-4 mb-2">
          <p className="font-bold">Work Experience:</p>
        </div>
        {workList.map((work, index) => (
          <div
            key={index}
            className="flex flex-row items-start justify-start h-2/6 w-full mx-3 px-4"
          >
            <div className="flex flex-col h-full w-4/5 items-start justify-start">
              <p>{work.company}</p>
              <p className="text-sm">{work.position}</p>
              <p className="text-xs pl-3">{work.details}</p>
            </div>
            <p className="flex justify-end w-[40%]">{work.yearstart}</p>
            <p className="flex justify-end w-[40%]">{work.yearend}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
