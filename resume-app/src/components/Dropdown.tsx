interface Props {
  title: string;
  image: string;
}

function Dropdown({ title, image }: Props) {
  return (
    <>
      <div className="flex flex-row justify-center align-center w-4/5 h-12 bg-neutral-50 rounded-md mt-6 shadow-md">
        <div className="box flex flex-row justify-start align-center">
          <img></img>
          <p className="flex flex-column justify-center align-center font-serif">
            {title}
          </p>
        </div>
        <img src={image} className="drop-down-arrow"></img>
      </div>
    </>
  );
}

export default Dropdown;
