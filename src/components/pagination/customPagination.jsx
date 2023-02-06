import { Pagination, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useAppContext } from "hooks/useContext";

function CustomPagination({ total }) {
  const Actions = useAppContext();
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(total / itemsPerPage);

  // Scroll to top when page changes
  const handlePageChange = (page) => {
    Actions.setPagination({
      limit: 10,
      offset: page,
    });
    window.scroll(0, 0);
  };

  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px 0px",
      }}
    >
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numberOfPages}
        color="primary"
        hideNextButton
        hidePrevButton
      />
    </Stack>
  );
}

CustomPagination.propTypes = {
  total: PropTypes.number,
};

export default CustomPagination;
