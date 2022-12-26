export interface SearchData {
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
      title: string;
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
    searchInformation: {
      formattedTotalResults: string;
      formattedSearchTime: string;
    };
  };
}

export interface SearchImageData {
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
      title: string;
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
      image: {
        contextLink: string;
      };
    }[];
    searchInformation: {
      formattedTotalResults: string;
      formattedSearchTime: string;
    };
  };
}
