/* eslint-disable @next/next/no-img-element */
import Header from "components/Header";
import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }: { providers: any[] }) {
  return (
    <>
      <Header />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <img
              className="w-52 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
              alt="google-logo"
            />
            <p className="my-10 text-center text-sm italic">
              This website is created for learning purposes
            </p>
            <button
              className="rounded-lg bg-red-400 p-3 text-white hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with Google
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
