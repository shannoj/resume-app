import { MyData } from "../App";

export interface Education {
  data: MyData;
}

function EducationResumeBlock({ data }: Education) {
  return (
    <>
      <div className="flex w-full min-h-1/6 max-h-1/2 flex-col p-2 relative">
        <div className="flex felx-row w-full justify-start h-1/6 px-4 mb-4">
          <p className="font-bold underline">Education:</p>
        </div>
        {data.education.map((element) => (
          <div
            className="flex flex-row items-center justify-between min-h-1/6 max-h-2/6 w-full mx-3 px-4 object-scale-down my-1 border-t-2 border-black border-solid"
            key={element.id}
          >
            <div className="flex flex-col h-full min-w-1/5 max-w-[90%] items-start justify-between">
              <p className="font-bold">{element.school}</p>
              <p className="text-xs pl-3">{element.major}</p>
            </div>
            <div className="flex flex-row items-center justify-center w-1/5">
              <p className="flex flex-end">{element.yearstarted + "-"}</p>
              <p className="flex flex-end">{element.yearended}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationResumeBlock;
