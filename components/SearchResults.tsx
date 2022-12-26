import Parser from "html-react-parser";
import type { SearchData } from "types/data";

import PaginationButtons from "./PaginationButton";

const SearchResults = ({ results }: SearchData) => {
  return (
    <div className="sm:pl:-[5%] mx-auto w-full  px-3 md:pl-[14%] lg:pl-52">
      <p className="mb-5 mt-3 text-sm text-gray-600">
        About {results.searchInformation.formattedTotalResults}
        &nbsp;{results.searchInformation.formattedSearchTime} seconds
      </p>
      {results.items.map((item) => (
        <div key={item.link} className="mb-8 max-w-xl">
          <div className="group">
            <a className="truncate text-sm" href={item.link}>
              {item.formattedUrl}
            </a>
            <a className="decoration-blue-800 group-hover:underline" href={item.link}>
              <h2 className="truncate text-xl font-medium text-blue-800">{item.title}</h2>
            </a>
          </div>
          <p className="text-gray-600">{Parser(item.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
