import "./App.css";
import Dropdown from "./components/Dropdown";

export default function App() {
  return (
    <>
      <div className="information-container mx-5 mt-10 mb-10 rounded-md shadow-md">
        <Dropdown image="" title="Background Information"></Dropdown>
        <Dropdown image="" title="Education"></Dropdown>
        <Dropdown image="" title="Experience"></Dropdown>
      </div>
      <div className="resume-container"></div>
    </>
  );
}
