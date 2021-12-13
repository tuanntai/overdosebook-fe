/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Divider, Flex, Image, Link } from "theme-ui";
import sx from "./sx";
import Logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { SVGIcon } from "../SVGIcon/SVGIcon";
import { sidebarPageOptions, socialLinkOptions } from "./constants";
import { useAppDispatch } from "../../redux/hook";
import { setCurrentPage } from "../../redux/reducers/navigateReducer";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.logoBox}>
        <Image src={Logo} sx={sx.logo} />
      </Box>
      <Box>
        {sidebarPageOptions.map((item) => (
          <NavLink
            key={item.key}
            to={item.path}
            sx={sx.navLink}
            onClick={() => dispatch(setCurrentPage({ currentPage: item.name }))}
          >
            <SVGIcon name={item.icon} sx={sx.drawerNavLinkIcon} />
            {item.name}
          </NavLink>
        ))}
      </Box>
      <Divider sx={sx.drawerDivider} />
      <Flex sx={sx.drawerSocial}>
        {socialLinkOptions.map((link, index) => (
          <Link href={link.link} target="_blank" key={index}>
            {index <= 2 ? (
              <SVGIcon name={link.name} sx={sx.drawerSocialIcon} />
            ) : (
              <Image src={link.name} sx={sx.drawerSocialIconIgm} />
            )}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
