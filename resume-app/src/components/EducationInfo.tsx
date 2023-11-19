import { ChangeEvent, FormEvent } from "react";

interface EducationProps {
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  formData: EducationFormData;
  handleEditClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSaveChangesClick: () => void;
  editMode: boolean;
  formSubmitted: boolean;
}

export interface EducationFormData {
  school: string;
  major: string;
  yearstarted: string;
  yearended: string;
}

function EducationInfo({
  onFormSubmit,
  handleInputChange,
  formData,
  handleEditClick,
  handleSaveChangesClick,
  editMode,
  formSubmitted,
}: EducationProps) {
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
              htmlFor="school"
            >
              University
            </label>
          </div>
          <div className="md:w-2/3 mt-2 mr-2">
            {formSubmitted ? (
              editMode ? (
                <input
                  className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="school"
                  type="text"
                  value={formData.school}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formData.school}</span>
              )
            ) : (
              <input
                className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="school"
                placeholder="Harvard"
                type="text"
                onChange={handleInputChange}
              />
            )}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 mt-2 ml-2">
            <label
              className="block uppercase tracking-wide text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="major"
            >
              Major
            </label>
          </div>
          <div className="md:w-2/3 mt-2 mr-2">
            {formSubmitted ? (
              editMode ? (
                <input
                  className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="major"
                  type="text"
                  value={formData.major}
                  onChange={handleInputChange}
                ></input>
              ) : (
                <span>{formData.major}</span>
              )
            ) : (
              <input
                className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="major"
                type="text"
                placeholder="Computer Science"
                onChange={handleInputChange}
              ></input>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 ml-2 mr-2 w-full justify-around">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="yearstarted"
            >
              Year Start
            </label>
            {formSubmitted ? (
              editMode ? (
                <input
                  className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="yearstarted"
                  type="text"
                  value={formData.yearstarted}
                  onChange={handleInputChange}
                ></input>
              ) : (
                <span>{formData.yearstarted}</span>
              )
            ) : (
              <input
                className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="yearstarted"
                type="text"
                placeholder="2016"
                onChange={handleInputChange}
              ></input>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="yearended"
            >
              Year End
            </label>
            {formSubmitted ? (
              editMode ? (
                <input
                  className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="yearended"
                  type="text"
                  value={formData.yearended}
                  onChange={handleInputChange}
                ></input>
              ) : (
                <span>{formData.yearended}</span>
              )
            ) : (
              <input
                className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="yearended"
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
                  className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  onClick={handleSaveChangesClick}
                >
                  Save Changes
                </button>
              ) : (
                <button
                  className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              )
            ) : (
              <button
                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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

export default EducationInfo;
