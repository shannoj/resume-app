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
function Resume({
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
  return (
    <>
      <div className="flex flex-col justify-start items-center h-[95%] w-2/3 bg-white">
        <div className="flex flex-col items-center justify-between h-[10%] w-5/6 border-solid border-black mb-12 mt-2">
          <p className="text-2xl font-bold">
            {firstName} {lastName}
          </p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>
            {city}&nbsp;{state}&nbsp;{zip}
          </p>
        </div>
        <div className="flex w-full h-1/6 flex-col p-2">
          <div className="flex felx-row w-full justify-start h-1/6 px-4 mb-4">
            <p className="font-bold">Education:</p>
          </div>
          {educationList.map((education, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between h-2/6 w-full mx-3 px-4"
            >
              <div className="flex flex-col h-full w-1/5 items-start justify-between">
                <p>{education.school}</p>
                <p className="text-xs pl-3">{education.major}</p>
              </div>
              <p className="flex flex-end">{education.yearstarted}</p>
              <p className="flex flex-end">{education.yearended}</p>
            </div>
          ))}
        </div>
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
    </>
  );
}

export default Resume;
