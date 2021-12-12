/** @jsxImportSource theme-ui */

import React, { useState, useEffect } from "react";
import { Button, Flex } from "theme-ui";
import { Link, useLocation } from "react-router-dom";
import sx from "./sx";
import { SVGIcon } from "../SVGIcon/SVGIcon";

const FilterCategory = ({ categories, rootUrl }) => {
  const [active, setActive] = useState(categories[0].key);
  const [isShowDropDownMenu, setIsShowDropDownMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const currentItem = categories.find((category) =>
      location.pathname.includes(category.path)
    );
    if (currentItem) setActive(currentItem.key);
  }, [categories, location.pathname]);
  const handleFilterChange = (key) => {
    setActive(key);
    setIsShowDropDownMenu(!isShowDropDownMenu);
  };
  return (
    <Flex sx={sx.wrapper}>
      {categories.map((category) => (
        <Link
          to={rootUrl ? `${rootUrl}${category.path}` : category.path}
          style={sx.link}
          key={category.key}
        >
          <Button
            className={
              (
                rootUrl === "/explore"
                  ? location.pathname.includes(
                      category.key
                        .substring(3, category.key.length - 2)
                        .toLowerCase()
                    )
                  : active === category.key
              )
                ? "active"
                : ""
            }
            variant="buttons.category"
            onClick={() => handleFilterChange(category.key)}
            sx={sx.button}
          >
            <SVGIcon name={category.icon.name} sx={() => sx.icon(category)} />
            {category.name}
            <span></span>
          </Button>
        </Link>
      ))}
    </Flex>
  );
};

export { FilterCategory };
