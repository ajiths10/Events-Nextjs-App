import LoginComponent from "@/components/login";
import Head from "next/head";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Next js Login page" />
      </Head>

      <div className="flex flex-col content-center items-center ">
        <div className="grid lg:grid-cols-12 m-5 shadow-xl bg-slate-200 min-h-screen text-slate-700 rounded-lg w-10/12 overflow-hidden">
          <div className="lg:col-span-5 relative">
            <LoginComponent />
          </div>
          <div className="hidden lg:block lg:col-span-7">
            <Image
              src={"/images/rick.jpg"}
              className="object-cover h-full"
              alt="login-banner"
              height={1200}
              width={1800}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
