/** @jsxImportSource theme-ui */
import { Box, Button, Flex } from "@theme-ui/components";
import { usePagination } from "../../hooks/usePagination";
import { SVGIcon } from "../SVGIcon/SVGIcon";
import sx from "./sx";
const DOTS = () => {
  return (
    <Flex sx={sx.dotWrapper}>
      <SVGIcon name="circle" />
      <SVGIcon name="circle" />
      <SVGIcon name="circle" />
    </Flex>
  );
};
const Pagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  onPageChange,
  totalPages,
  styles,
}) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    totalCount,
    siblingCount,
    totalPages,
  });
  if (totalPages === 1) return null;
  let lastPage;
  if (paginationRange) {
    lastPage = paginationRange[paginationRange.length - 1];
  }
  const onPreviousPageChange = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };
  const onNextPageChange = () => {
    console.log("alo");
    console.log(currentPage, totalCount, pageSize);
    if (currentPage < Math.ceil(totalCount / pageSize) + 1) {
      onPageChange(currentPage + 1);
      console.log(currentPage);
    }
  };
  return (
    <Box sx={() => sx.paginationWrapper(styles)}>
      <Button
        variant="buttons.pagination"
        sx={sx.arrowBox}
        className={["item", `${currentPage === 1 ? "disabled" : ""}`].join(" ")}
        onClick={onPreviousPageChange}
      >
        <SVGIcon name="arrrowpagination" sx={sx.leftArrow} />
      </Button>
      {paginationRange &&
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === "...") return <DOTS key={index} />;
          return (
            <Button
              key={index}
              variant="buttons.pagination"
              className={[
                "item",
                `${currentPage === pageNumber ? "active" : ""}`,
              ].join(" ")}
              onClick={() => onPageChange(pageNumber)}
              sx={sx.number}
            >
              {pageNumber}
            </Button>
          );
        })}
      <Button
        variant="buttons.pagination"
        sx={sx.arrowBox}
        className={[
          "item",
          `${currentPage === lastPage ? "disabled" : ""}`,
        ].join(" ")}
        onClick={onNextPageChange}
      >
        <SVGIcon name="arrrowpagination" sx={sx.rightArrow} />
      </Button>
    </Box>
  );
};

export { Pagination };
