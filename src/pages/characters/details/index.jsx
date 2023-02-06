import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { unavailable } from "assets/images";
import { useAppContext } from "hooks/useContext";
import Loading from "components/loading/index";

const Image = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  objectFit: "contain",
  "&:hover": {
    transform: "scale3d(1, 1, 1)",
    transition: "all 0.2s linear",
    objectPosition: "top center",
  },
});

function Character() {
  const { characterName = "" } = useParams();
  const criteria = { name: characterName };
  const { isLoading, fetchCharacterByCriteria, character } = useAppContext();

  const image = character.thumbnail
    ? `${character.thumbnail?.path}.${character.thumbnail?.extension}`
    : unavailable;
  let date = character.modified ? new Date(character.modified) : null;
  let modified = date && new Date(date.getTime() + (4 * 60 + 0) * 60 * 1000);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  useEffect(() => {
    fetchCharacterByCriteria(criteria);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Grid
      container
      display={"flex"}
      sx={{
        "@media (max-width:599px)": {
          display: "flex",
          flexDirection: "column-reverse",
        },
      }}
      columns={12}
      spacing={4}
    >
      <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
        <Image src={image} alt="" />
      </Grid>

      <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
        <Grid container columns={12} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" textAlign={"center"}>
              {character?.name ?? ""}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" textAlign={"center"} color="#38424d">
              {modified ? modified.toLocaleDateString("en-EU", options) : ""}
            </Typography>
          </Grid>
          {character.description && (
            <Grid item xs={12}>
              <TextField
                id="filled-multiline-static"
                multiline
                sx={{
                  width: "100%",
                  boxShadow: "inset 0 0 5px #000000",
                  borderRadius: "10px",
                }}
                rows={6}
                disabled
                defaultValue={character?.description ?? ""}
                color="default"
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Character;
