import { useEffect, useState, useCallback } from "react";
import { getCharacters } from "api/api";

function useSearch({
  filterOptions,
  setAppLoader = () => {},
  resetFilter = () => {},
}) {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(undefined);
  const [isFound, setIsFound] = useState(true);

  const fetchMarvelCharacters = async () => {
    if (!searchText) return;
    setIsFound(true);
    try {
      setAppLoader(true);
      const { data } = await getCharacters({
        ...filterOptions,
        limit: 100,
        nameStartsWith: searchText,
      });
      const characters = data.data;
      setResults(characters);
      setIsFound(() => characters?.results?.length > 0);
    } catch (error) {
      console.error(error);
    } finally {
      setAppLoader(false);
    }
  };

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchMarvelCharacters();
    }
  };

  useEffect(() => {
    return () => {
      resetFilter();
    };
  }, []);

  return {
    characters: results?.results ?? [],
    isFound,
    setSearchText,
    _handleKeyDown,
    fetchMarvelCharacters,
  };
}

export default useSearch;
