import { useCallback, useEffect, useState } from "react";
import { getCharacters } from "api/api";

function useFetchCharacters({
  filterOptions,
  setAppLoader = () => {},
  resetFilter = () => {},
}) {
  const [results, setResults] = useState(undefined);

  const fetchMarvelCharacters = useCallback(async () => {
    try {
      setAppLoader(true);
      const { data } = await getCharacters(filterOptions);
      const characters = data.data;
      setResults(characters);
    } catch (error) {
      console.error(error);
    } finally {
      setAppLoader(false);
    }
  }, [filterOptions.offset]);

  useEffect(() => {
    fetchMarvelCharacters();
    return () => {
      resetFilter();
    };
  }, [filterOptions.offset]);

  return {
    characters: results?.results ?? [],
    total: results?.total ?? 0,
  };
}

export default useFetchCharacters;
