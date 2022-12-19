import { signIn, signOut, useSession } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          onClick={() => signOut()}
          src={session.user?.image ? session.user?.image : ""}
          alt="user-image"
          className="h-10 w-10 rounded-full p-1 hover:bg-gray-200"
        />
      </>
    );
  }
  return (
    <>
      <button
        className="rounded-md bg-blue-500 px-6 py-2 font-medium text-white hover:shadow-md hover:brightness-105"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
