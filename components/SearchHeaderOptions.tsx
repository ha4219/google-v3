import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

import SearchHeaderOption from "./SearchHeaderOption";

const SearchHeaderOptions = () => {
  const router = useRouter();

  return (
    <div className="mx-auto flex w-full select-none justify-center space-x-8 border-b text-sm text-gray-700 lg:justify-start lg:pl-52">
      <SearchHeaderOption
        title="All"
        Icon={MagnifyingGlassIcon}
        selected={router.query?.searchType === "" || !router.query?.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotoIcon}
        selected={router.query?.searchType === "image"}
      />
    </div>
  );
};

export default SearchHeaderOptions;
