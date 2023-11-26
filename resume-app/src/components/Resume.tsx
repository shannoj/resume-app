import { ReactNode } from "react";
import { MyData } from "../App";

interface Props {
  children: ReactNode;
  data: MyData;
}

// ... (interface definitions)

function Resume({ children, data }: Props) {
  return (
    <div className="flex flex-col justify-start items-center h-[95%] w-2/3 bg-white px-3">
      {/* Header section */}
      <div className="flex flex-col items-center justify-between h-[10%] w-5/6 border-solid border-black mb-12 mt-2">
        <p className="text-2xl font-bold">
          {data.general[0].text} {data.general[1].text}
        </p>
        <p className="text-xs">{data.general[2].text}</p>
        <p className="text-xs">{data.general[3].text}</p>
        <p className="text-xs">
          {data.general[4].text}&nbsp;{data.general[5].text}&nbsp;
          {data.general[6].text}
        </p>
      </div>

      {/* Education section,  Work Experience section  */}
      {children}
    </div>
  );
}

export default Resume;
