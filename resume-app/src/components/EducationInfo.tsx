import { ChangeEvent, FormEvent } from "react";
import { MyData } from "../App";

interface EducationProps {
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleEditClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSaveChangesClick: () => void;
  editMode: boolean;
  formSubmitted: boolean;
  height: number;
  removeClick: (id: string) => void;
  addSubmited: (id: string) => void;
  data: MyData;
  handleEducation: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    id: string
  ) => void;
  major: string;
  school: string;
  yearstart: string;
  yearend: string;
  id: string;
}

export interface EducationFormData {
  school: string;
  major: string;
  yearstarted: string;
  yearended: string;
}

function EducationInfo({
  onFormSubmit,
  handleEditClick,
  handleSaveChangesClick,
  editMode,
  formSubmitted,
  height,
  data,
  handleEducation,
  removeClick,
  addSubmited,
  major,
  school,
  yearstart,
  yearend,
  id,
}: EducationProps) {
  return (
    <>
      <div
        className={`flex flex-row justify-center min-h-${height} max-h-${height} align-center w-4/5 bg-gradient-to-r from-gray-100 to-gray-300 rounded-md mt-1 mb-2 shadow-sm hover:shadow-lg`}
      >
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
                    value={school}
                    onChange={(e) => handleEducation(e, id)}
                  />
                ) : (
                  <span>{school}</span>
                )
              ) : (
                <input
                  className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="school"
                  placeholder="Harvard"
                  type="text"
                  onChange={(e) => handleEducation(e, id)}
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
                    value={major}
                    onChange={(e) => handleEducation(e, id)}
                  ></input>
                ) : (
                  <span>{major}</span>
                )
              ) : (
                <input
                  className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="major"
                  type="text"
                  placeholder="Computer Science"
                  value={major}
                  onChange={(e) => handleEducation(e, id)}
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
                    value={yearstart}
                    onChange={(e) => handleEducation(e, id)}
                  ></input>
                ) : (
                  <span>{yearstart}</span>
                )
              ) : (
                <input
                  className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="yearstarted"
                  type="text"
                  placeholder="2016"
                  value={yearstart}
                  onChange={(e) => handleEducation(e, id)}
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
                    value={yearend}
                    onChange={(e) => handleEducation(e, id)}
                  ></input>
                ) : (
                  <span>{yearend}</span>
                )
              ) : (
                <input
                  className="education bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="yearended"
                  type="text"
                  placeholder="2020"
                  value={yearend}
                  onChange={(e) => handleEducation(e, id)}
                ></input>
              )}
            </div>
          </div>
          <div className="md:flex md:items-center mb-2">
            <div className="md:w-full flex justify-center align-center">
              {formSubmitted ? (
                editMode ? (
                  <>
                    <button
                      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      onClick={handleSaveChangesClick}
                    >
                      Save Changes
                    </button>
                    <button
                      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 ml-2 rounded"
                      type="button"
                      onClick={() => removeClick(id)}
                    >
                      Remove
                    </button>
                  </>
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
                <>
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={() => addSubmited(id)}
                  >
                    Save
                  </button>
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 ml-2 rounded"
                    type="button"
                    onClick={() => removeClick(id)}
                  >
                    Remove
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EducationInfo;
