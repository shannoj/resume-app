export interface Education {
  school: string;
  major: string;
  yearstarted: string;
  yearended: string;
}

function EducationResumeBlock({
  school,
  major,
  yearstarted,
  yearended,
}: Education) {
  return (
    <>
      <div className="flex w-full h-1/6 flex-col p-2">
        <div className="flex felx-row w-full justify-start h-1/6 px-4 mb-4">
          <p className="font-bold">Education:</p>
        </div>
        <div className="flex flex-row items-center justify-between h-2/6 w-full mx-3 px-4">
          <div className="flex flex-col h-full w-1/5 items-start justify-between">
            <p>{school}</p>
            <p className="text-xs pl-3">{major}</p>
          </div>
          <p className="flex flex-end">{yearstarted}</p>
          <p className="flex flex-end">{yearended}</p>
        </div>
      </div>
    </>
  );
}

export default EducationResumeBlock;
