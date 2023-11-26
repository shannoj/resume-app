import { MyData } from "../App";

export interface Work {
  data: MyData;
}
function WorkResumeBlock({ data }: Work) {
  return (
    <>
      <div className="flex w-full h-4/6 flex-col p-2 relative mb-4">
        <div className="flex felx-row w-full justify-start h-5 px-4 mb-4">
          <p className="font-bold underline">Work Experience:</p>
        </div>
        {data.work.map((element) => (
          <div
            className="flex flex-row items-start justify-start max-h-2/6 min-h-1/6 w-full mx-3 px-4 border-t-2 border-black border-solid mb-2"
            key={element.id}
          >
            <div className="flex flex-col max-h-full min-h-[25%] w-4/5 items-start justify-start">
              <p className="font-bold">{element.company}</p>
              <p className="text-sm">{element.position}</p>
              <p className="text-xs pl-3">{element.details}</p>
            </div>
            <div className="flex flex-row items-center justify-center w-1/5 h-full">
              <p className="flex flex-end ">{element.yearstart + "- "}</p>
              <p className="flex flex-end">{element.yearend}</p>
            </div>
          </div>
        ))}
      </div>
      ;
    </>
  );
}

export default WorkResumeBlock;
