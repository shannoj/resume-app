export interface Work {
  company: string;
  position: string;
  details: string;
  yearstart: string;
  yearend: string;
}

function WorkResumeBlock({
  company,
  position,
  details,
  yearstart,
  yearend,
}: Work) {
  return (
    <>
      <div className="flex w-full h-4/6 flex-col p-2">
        <div className="flex felx-row w-full justify-start h-5 px-4 mb-2">
          <p className="font-bold">Work Experience:</p>
        </div>
        <div className="flex flex-row items-start justify-start h-2/6 w-full mx-3 px-4">
          <div className="flex flex-col h-full w-4/5 items-start justify-start">
            <p>{company}</p>
            <p className="text-sm">{position}</p>
            <p className="text-xs pl-3">{details}</p>
          </div>
          <p className="flex justify-end w-[40%]">{yearstart}</p>
          <p className="flex justify-end w-[40%]">{yearend}</p>
        </div>
      </div>
      ;
    </>
  );
}

export default WorkResumeBlock;
