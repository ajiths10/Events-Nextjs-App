import CreateForm from "@/components/admin/CreateForm";
import Head from "next/head";

export default function AdminCreate() {
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="description" content="Next js Event App Admin" />
      </Head>

      <div className="flex flex-col content-center items-center ">
        <div
          className="flex flex-col p-5 m-5 border shadow-xl bg-slate-200 min-h-screen text-slate-700 rounded-lg 
        items-center gap-[2rem] w-10/12"
        >
          <h1 className=" text-4xl font-bold font-sans mt-5 border-b-black">
            Admin
          </h1>
          <div className="flex flex-col items-center w-full">
            <h3>Publish an event</h3>
            <CreateForm />
          </div>
        </div>
      </div>
    </>
  );
}
