import ImageResults from "components/ImageResults";
import SearchHeader from "components/SearchHeader";
import SearchResults from "components/SearchResults";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import type { SearchImageData } from "types/data";

const Search = ({ results }: SearchImageData) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>
      <SearchHeader />
      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const startIndex = context.query.start || "1";
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${context.query.term}${
      context.query.searchType && "&searchType=image"
    }&start=${startIndex}`,
  ).then((res) => res.json());
  return {
    props: { results: data },
  };
};

export default Search;
