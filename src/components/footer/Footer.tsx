import React from "react";
import { Box, Typography } from "@mui/material";
import { HoverableIcon } from "components/hoverableIcon/HoverableIcon";
import {
  CenteringWrapper,
  ContributedWrapper,
  CredentialsWrapper,
  FooterLink,
  FooterTextBoxLeft,
  FooterTextBoxRight,
  FooterWrapper,
  Separator,
  SocialsContent,
  SocialsWrapper,
} from "./styled";
import telegram from "assets/icons/telegram.svg";
import telegramHovered from "assets/icons/telegram-hover.svg";
import github from "assets/icons/github.svg";
import orbsLogo from "assets/icons/orbs.svg";
import githubHovered from "assets/icons/github-hover.svg";
import { AppLogo } from "components/appLogo";
import heart from "assets/icons/heart.svg";
import { Outlet } from "react-router-dom";

export const Footer = () => {
  return (
    <FooterWrapper>
      <SocialsWrapper>
        <Box>
          <AppLogo />
        </Box>
        <SocialsContent>
          <HoverableIcon
            iconUrl={github}
            hoveredIconUrl={githubHovered}
            link="https://github.com/ARJUN-R34/token-deployer"
          />
        </SocialsContent>
      </SocialsWrapper>
      <Separator />
      <Outlet />
    </FooterWrapper>
  );
};
