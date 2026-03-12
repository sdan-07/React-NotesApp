const DisplayNotes = ({title, desc}) => {

  return (
    <>
      <div className="note p-4 rounded-2xl bg-gray-300 text-black">
        <div className="top ">
          <h2 className="text-2xl font-bold"> {title} </h2>
        </div>

        <div className="bottom mt-8">
          <p className="text-[17px]"> {desc} </p>
        </div>
      </div>
    </>
  );
};

export default DisplayNotes;
