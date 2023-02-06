import { Button, Grid, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SingleContent from "components/singleContent/index";
import useSearch from "hooks/useSearch";
import { useAppContext } from "hooks/useContext";

const Search = () => {
  const { isLoading, filterOptions, setAppLoader, resetFilter } =
    useAppContext();

  const {
    characters,
    isFound,
    setSearchText,
    _handleKeyDown,
    fetchMarvelCharacters,
  } = useSearch({
    filterOptions,
    setAppLoader,
    resetFilter,
  });

  return (
    <div>
      <div
        style={{ display: "flex", margin: "15px 0" }}
        onKeyPress={_handleKeyDown}
      >
        <TextField
          style={{ flex: 1 }}
          className="searchBox"
          label="Please specified full character name (e.g. Spider-Man)"
          variant={"filled"}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ marginLeft: 10 }}
          onClick={fetchMarvelCharacters}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </div>

      <>
        <Grid container columns={12} spacing={2}>
          {characters.length > 0
            ? characters.map((character, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={3}
                    key={`${index}`}
                  >
                    <SingleContent
                      id={character?.id ?? ""}
                      title={character.title || character.name}
                      loading={isLoading}
                      image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                      thumbnail={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                    />
                  </Grid>
                );
              })
            : !isFound && (
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                    width: "100%",
                  }}
                >
                  Not Found!
                </Typography>
              )}
        </Grid>
      </>
    </div>
  );
};

export default Search;
