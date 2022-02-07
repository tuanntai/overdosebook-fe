import React from "react";
import { Outlet } from "react-router-dom";
import FilterCategory from "../../components/FilterCategory/FilterCategory";
import { categories } from "./constants";

function MyAccount() {
  return (
    <div>
      <FilterCategory categories={categories} />
      <Outlet />
    </div>
  );
}

export default MyAccount;
