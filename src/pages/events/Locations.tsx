import LocationBody from "@/components/Location";

const Locations = () => {
  return (
    <div className="flex flex-col content-center items-center ">
      <div
        className="flex flex-col p-5 m-5 border shadow-xl bg-slate-200 min-h-screen text-slate-700 rounded-lg 
         items-center gap-[2rem] w-10/12"
      >
        <h1 className=" text-4xl font-bold font-sans mt-5 border-b-black">
          Events Location
        </h1>
        <div>
          <h1>Hello here!</h1>
        </div>
        <LocationBody />
      </div>
    </div>
  );
};

export default Locations;
