import { MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

import SearchHeaderOptions from "./SearchHeaderOptions";
import User from "./User";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const search = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const term = searchInputRef?.current?.value;
    if (!term?.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <Image
          onClick={() => router.push("/")}
          alt="google-logo"
          className="cursor-pointer"
          objectFit="contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
          width={120}
          height={40}
        />
        <form className="ml-10 mr-5 flex max-w-3xl flex-grow items-center rounded-full border border-gray-200 px-6 py-3 shadow-lg">
          <input
            type="text"
            className="w-full focus:outline-none"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <XMarkIcon
            onClick={() => {
              if (searchInputRef?.current?.value) searchInputRef.current.value = "";
            }}
            className="h-7 cursor-pointer text-gray-500 sm:mr-3"
          />
          <MicrophoneIcon className="mr-3 hidden h-6 border-l-2 border-gray-300 pl-4 text-blue-500 sm:inline-flex" />
          <MagnifyingGlassIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
          <button type="submit" hidden onClick={search}></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
