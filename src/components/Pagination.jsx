import Pagination from "@mui/material/Pagination";

function ProductPagination({ count, page, handleChange }) {
  return (
    <Pagination
      color="primary"
      count={count}
      page={page}
      onChange={handleChange}
      size="small"
    />
  );
}

export default ProductPagination;
