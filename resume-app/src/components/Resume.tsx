function Resume() {
  return (
    <>
      <div className="flex flex-col justify-start items-center h-5/6 w-2/3 bg-white">
        <div className="flex flex-col items-center justify-between h-1/5 w-5/6 border-solid border-black">
          <p className="text-2xl font-bold">First Name, Last Name</p>
          <p>email</p>
          <p>phone</p>
          <p>address</p>
        </div>
        <div className="flex w-full h-1/6 flex-col p-2">
          <div className="flex felx-row w-full justify-start h-1/6 px-4 mb-4">
            <p className="font-bold">Education:</p>
          </div>
          <div className="flex flex-row items-center justify-between h-2/6 w-full mx-3 px-4">
            <div className="flex flex-col h-full w-1/5 items-start justify-between">
              <p>School</p>
              <p className="text-xs pl-3">Major</p>
            </div>
            <p>Years Attended</p>
          </div>
        </div>
        <div className="flex w-full h-4/6 flex-col p-2">
          <div className="flex felx-row w-full justify-start h-5 px-4 mb-2">
            <p className="font-bold">Work Experience:</p>
          </div>
          <div className="flex flex-row items-start justify-start h-2/6 w-full mx-3 px-4">
            <div className="flex flex-col h-full w-4/5 items-start justify-start">
              <p>Company</p>
              <p className="text-sm">Postition</p>
              <p className="text-xs pl-3">Details</p>
            </div>
            <p>Years Worked</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
