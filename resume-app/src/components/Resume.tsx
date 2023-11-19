import { ReactNode } from "react";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  children: ReactNode;
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
  children,
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

      {/* Education section,  Work Experience section  */}
      {children}
    </div>
  );
}

export default Resume;
