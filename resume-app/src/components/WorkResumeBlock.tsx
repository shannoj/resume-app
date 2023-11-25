import { MyData } from "../App";

export interface Work {
  data: MyData;
}
function WorkResumeBlock({ data }: Work) {
  return (
    <>
      <div className="flex w-full h-4/6 flex-col p-2">
        <div className="flex felx-row w-full justify-start h-5 px-4 mb-2">
          <p className="font-bold">Work Experience:</p>
        </div>
        {data.work.map((element) => (
          <div
            className="flex flex-row items-start justify-start h-2/6 w-full mx-3 px-4"
            key={element.id}
          >
            <div className="flex flex-col h-full w-4/5 items-start justify-start">
              <p>{element.company}</p>
              <p className="text-sm">{element.position}</p>
              <p className="text-xs pl-3">{element.details}</p>
            </div>
            <p className="flex justify-end w-[40%]">{element.yearstart}</p>
            <p className="flex justify-end w-[40%]">{element.yearend}</p>
          </div>
        ))}
      </div>
      ;
    </>
  );
}

export default WorkResumeBlock;
