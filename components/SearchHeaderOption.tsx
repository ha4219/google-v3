import { useRouter } from "next/router";

interface IProps {
  title: string;
  selected: boolean;
  Icon: (props: React.ComponentProps<"svg"> & { title?: string; titleId?: string }) => JSX.Element;
}

const SearchHeaderOption = ({ title, selected, Icon }: IProps) => {
  const router = useRouter();
  const selectTab = (title: string) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${title === "Images" ? "image" : ""}`,
    );
  };
  return (
    <div
      onClick={() => selectTab(title)}
      className={`flex cursor-pointer items-center space-x-1 border-b-4 border-transparent pb-3 hover:border-blue-500 hover:text-blue-500 ${
        selected && "border-blue-500 text-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
};

export default SearchHeaderOption;
