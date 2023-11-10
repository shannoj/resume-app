function Work() {
  return (
    <>
      <form className="flex w-full max-w-sm flex-col align-center justify-start">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 mt-2 ml-2">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="company"
            >
              Company
            </label>
          </div>
          <div className="md:w-2/3 mt-2 mr-2">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="company"
              type="text"
              placeholder="Apple"
            ></input>
          </div>
        </div>
        <div className="w-19/20 h-full ml-2 mr-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="details"
          >
            Deatils
          </label>
          <input
            className="flex flex-col justify-start bg-gray-200 appearance-none mr-2 border-2 border-gray-200 rounded w-full h-2/3 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="details"
            type="text"
            placeholder="made stuff"
          ></input>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 ml-2 mr-2 w-full justify-around">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="year-start"
            >
              Year Start
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="year-start"
              type="text"
              placeholder="2016"
            ></input>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="year-end"
            >
              Year End
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="year-end"
              type="text"
              placeholder="2020"
            ></input>
          </div>
        </div>
        <div className="md:flex md:items-center mb-2">
          <div className="md:w-full flex justify-center align-center">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Work;
