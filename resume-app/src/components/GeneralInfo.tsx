import { useState, ChangeEvent, FormEvent, useRef, useEffect } from "react";

interface GeneralProps {
  onFormSubmit: (formData: GeneralFormData) => void;
}

export interface GeneralFormData {
  email: string;
  phone: string;
  inlinefirstname: string;
  inlinelastname: string;
  city: string;
  state: string;
  zip: string;
}

function General({ onFormSubmit }: GeneralProps) {
  const initialFormData: GeneralFormData = {
    email: "",
    phone: "",
    inlinefirstname: "",
    inlinelastname: "",
    city: "",
    state: "",
    zip: "",
  };

  const [formData, setFormData] = useState<GeneralFormData>(initialFormData);
  const initialFormDataRef = useRef<GeneralFormData>(initialFormData);

  useEffect(() => {
    initialFormDataRef.current = formData;
  }, [formData]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    onFormSubmit({ ...formData, [id]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <>
      <form
        className="flex w-full max-w-sm flex-col align-center justify-around"
        onSubmit={handleSubmit}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 mt-2 ml-2">
            <label
              className="block uppercase tracking-wide text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inlinefirstname"
            >
              First Name
            </label>
          </div>
          <div className="md:w-2/3 mt-2 mr-2">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inlinefirstname"
              type="text"
              placeholder="Jane"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 mt-2 ml-2">
            <label
              className="block uppercase tracking-wide text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inlinelastname"
            >
              Last Name
            </label>
          </div>
          <div className="md:w-2/3 mt-2 mr-2">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inlinelastname"
              type="text"
              placeholder="Doe"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 mt-2 ml-2">
            <label
              className="block uppercase tracking-wide text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3 mt-2 mr-2">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="email"
              type="email"
              placeholder="myemail@gmail.com"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 mt-2 ml-2">
            <label
              className="block uppercase tracking-wide text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="phone"
            >
              Phone
            </label>
          </div>
          <div className="md:w-2/3 mt-2 mr-2">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="phone"
              type="tel"
              placeholder="+12345678910"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 ml-2 mr-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="city"
              type="text"
              placeholder="Albuquerque"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <div className="relative flex items-center justify-between">
              <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="state"
                onChange={handleInputChange}
              >
                <option value="-">-</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="zip"
            >
              Zip
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="zip"
              type="text"
              placeholder="90210"
              onChange={handleInputChange}
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

export default General;
