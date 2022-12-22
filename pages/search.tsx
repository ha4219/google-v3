import SearchHeader from "components/SearchHeader";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";

interface IProps {
  results: {
    context: {
      title: string;
    };
    items: {
      cacheId: string;
      displayLink: string;
      formattedUrl: string;
      htmlFormattedUrl: string;
      htmlSnippet: string;
      htmlTitle: string;
      kind: string;
      link: string;
      pagemap: {
        cse_image: {
          src: string;
        }[];
        cse_thumbnail: {
          src: string;
          width: string;
          height: string;
        }[];
        metatags: {
          "ahrefs_site-verification": string;
          "facebook-domain-verfication": string;
          "fb:app_id": string;
          //...
        }[];
        title: string;
        snippet: string;
      };
    }[];
  };
}

const Search = ({ results }: IProps) => {
  console.log(results);

  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      <SearchHeader />
    </div>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${context.query.term}${context.query.searchType && "&searchType=image"}`,
  ).then((res) => res.json());
  return {
    props: { results: data },
  };
};

export default Search;
