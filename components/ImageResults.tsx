import type { SearchImageData } from "types/data";

import PaginationButtons from "./PaginationButton";

const ImageResults = ({ results }: SearchImageData) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 space-x-4 px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.items.map((item) => (
          <div key={item.link} className="mb-8">
            <div className="group">
              <a href={item.image.contextLink}>
                <img
                  className="h-60 w-full object-contain group-hover:shadow-lg"
                  src={item.link}
                  alt={item.title}
                />
              </a>
              <a className="group-hover:underline" href={item.image.contextLink}>
                <h2 className="truncate text-xl">{item.title}</h2>
              </a>
              <a className="group-hover:underline" href={item.image.contextLink}>
                <h2 className="text-gray-600">{item.displayLink}</h2>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
};

export default ImageResults;
