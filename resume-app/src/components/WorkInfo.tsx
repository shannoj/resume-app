import { ChangeEvent, FormEvent } from "react";

interface WorkProps {
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  formData: WorkFormData;
  handleEditClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSaveChangesClick: () => void;
  editMode: boolean;
  formSubmitted: boolean;
}

export interface WorkFormData {
  company: string;
  position: string;
  details: string;
  yearstart: string;
  yearend: string;
}

function Work({
  onFormSubmit,
  handleInputChange,
  formData,
  handleEditClick,
  handleSaveChangesClick,
  editMode,
  formSubmitted,
}: WorkProps) {
  return (
    <>
      <form
        className="flex w-full max-w-sm flex-col align-center justify-start"
        onSubmit={onFormSubmit}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 mt-2 ml-2">
            <label
              className="block uppercase tracking-wide text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="company"
            >
              Company
            </label>
          </div>
          <div className="md:w-2/3 mt-2 mr-2">
            {formSubmitted ? (
              editMode ? (
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                ></input>
              ) : (
                <span>{formData.company}</span>
              )
            ) : (
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="company"
                type="text"
                placeholder="Apple"
                onChange={handleInputChange}
              ></input>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 mt-2 ml-2">
            <label
              className="block uppercase tracking-wide text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="position"
            >
              Position
            </label>
          </div>
          <div className="md:w-2/3 mt-2 mr-2">
            {formSubmitted ? (
              editMode ? (
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="position"
                  type="text"
                  value={formData.position}
                  onChange={handleInputChange}
                ></input>
              ) : (
                <span>{formData.position}</span>
              )
            ) : (
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="position"
                type="text"
                placeholder="Software Engineer"
                onChange={handleInputChange}
              ></input>
            )}
          </div>
        </div>
        <div className="w-19/20 h-full ml-2 mr-2 mb-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="details"
          >
            Deatils
          </label>
          {formSubmitted ? (
            editMode ? (
              <textarea
                className="flex flex-col justify-start bg-gray-200 appearance-none mr-2 border-2 border-gray-200 rounded w-full h-2/3 px-2 py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="details"
                rows={4}
                value={formData.details}
                onChange={handleInputChange}
              ></textarea>
            ) : (
              <span>{formData.details}</span>
            )
          ) : (
            <textarea
              className="flex flex-col justify-start bg-gray-200 appearance-none mr-2 border-2 border-gray-200 rounded w-full h-2/3 px-2 py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="details"
              rows={4}
              placeholder="Made stuff"
              onChange={handleInputChange}
            ></textarea>
          )}
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 ml-2 mr-2 w-full justify-around">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="yearstart"
            >
              Year Start
            </label>
            {formSubmitted ? (
              editMode ? (
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="yearstart"
                  type="text"
                  value={formData.yearstart}
                  onChange={handleInputChange}
                ></input>
              ) : (
                <span>{formData.yearstart}</span>
              )
            ) : (
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="yearstart"
                type="text"
                placeholder="2016"
                onChange={handleInputChange}
              ></input>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="yearend"
            >
              Year End
            </label>
            {formSubmitted ? (
              editMode ? (
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="yearend"
                  type="text"
                  value={formData.yearend}
                  onChange={handleInputChange}
                ></input>
              ) : (
                <span>{formData.yearend}</span>
              )
            ) : (
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="yearend"
                type="text"
                placeholder="2020"
                onChange={handleInputChange}
              ></input>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-2">
          <div className="md:w-full flex justify-center align-center">
            {formSubmitted ? (
              editMode ? (
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  onClick={handleSaveChangesClick}
                >
                  Save Changes
                </button>
              ) : (
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              )
            ) : (
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default Work;
