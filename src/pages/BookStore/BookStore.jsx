import React from "react";
import { useRoutes } from "react-router-dom";
import { FilterCategory } from "../../components/Filter/FilterCategory";
import { categories } from "./constants";
function BookStore() {
  const { path, url } = useRoutes();
  return (
    <>
      <FilterCategory categories={categories} rootUrl={url} />
    </>
  );
}

export default BookStore;
