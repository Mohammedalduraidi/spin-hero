import { useNavigate } from "react-router-dom";
import { Box, Typography, Avatar, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { unavailable } from "assets/images";
import PropTypes from "prop-types";

const Image = styled("img")({
  width: "calc(100% - 20px)",
  height: 300,
  padding: "5px 10px",
  objectFit: "fill",
  "&:hover": {
    transform: "scale3d(1, 1, 1)",
    transition: "all 0.2s linear",
    objectPosition: "top center",
  },
});

const SingleContent = ({
  id,
  thumbnail = "",
  image = "",
  title = "",
  loading = false,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`card ${loading ? "card-check" : ""}`}
      onClick={() => navigate(`/characters/${id}/character/${title}`)}
    >
      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        <Box sx={{ margin: 1 }}>
          {loading ? (
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          ) : (
            <Avatar src={thumbnail ? thumbnail : unavailable} />
          )}
        </Box>
        <Box sx={{ width: "100%" }}>
          {loading ? (
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
          ) : (
            <Typography>{title}</Typography>
          )}
        </Box>
      </Box>

      {loading ? (
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: "57%" }} />
        </Skeleton>
      ) : (
        <Image src={image ? image : unavailable} alt="" />
      )}
    </div>
  );
};

SingleContent.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  image: PropTypes.string,
  loading: PropTypes.bool,
};

export default SingleContent;
