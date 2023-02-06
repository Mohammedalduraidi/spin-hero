import { Typography, Grid } from "@mui/material";
import SingleContent from "components/singleContent";
import CustomPagination from "components/pagination/customPagination";
import useFetchCharacters from "hooks/useFetchCharacters";
import { useAppContext } from "hooks/useContext";

const Characters = () => {
  const { isLoading, filterOptions, setAppLoader, resetFilter } =
    useAppContext();

  const { characters, total } = useFetchCharacters({
    filterOptions,
    setAppLoader,
    resetFilter,
  });

  return (
    <>
      <Typography variant="h4" textAlign={"center"} paddingBottom={"20px"}>
        Superhero movies
      </Typography>
      <Grid container columns={12} spacing={2}>
        {characters.map((character, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={`${index}`}>
              <SingleContent
                id={character?.id ?? ""}
                title={character.title || character.name}
                loading={isLoading}
                image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                thumbnail={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              />
            </Grid>
          );
        })}
      </Grid>

      <CustomPagination total={total} />
    </>
  );
};

export default Characters;
