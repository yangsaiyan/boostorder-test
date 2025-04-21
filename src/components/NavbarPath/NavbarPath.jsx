import {
  ActionsContainer,
  ArrowDownIcon,
  ExpandIcon,
  LanguageContainer,
  LanguageText,
  LeftContainer,
  LeftWrapper,
  NameContainer,
  NavbarWrapper,
  NotificationIcon,
  PathContainer,
  PathItem,
  PathTextContainer,
  SearchIcon,
  Searhbar,
  StyledBadge,
  StyledCompany,
  StyledIcon,
  StyledInputAndorsement,
  StyledText,
  StyledUsername,
  UserDetailsContainer,
  UserImage,
} from "./styles";
import ChevronRightSVG from "../../../public/ChevronRight.svg";
import { useLocation } from "react-router-dom";
import { pathsName } from "../../../utils/constants";
import SearchIconSVG from "../../../public/LeadingIcon2.svg";
import NotificationSVG from "../../../public/Notification.svg";
import ArrowDownSVG from "../../../public/ArrowDown.svg";
import UserImageSVG from "../../../public/UserImagePlaceholder.svg";
import ExpandSVG from "../../../public/Expand.svg";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

export default function NavbarPath({ selectedTab }) {
  const largeTablet = useMediaQuery("(max-width: 1080px)");
  const location = useLocation();
  const { pathname } = location;
  const paths = pathname.split("/").filter((item) => item !== "");
  const [displayProfile, setDisplayProfile] = useState(false);

  return (
    <NavbarWrapper displayProfile={displayProfile}>
      {!displayProfile &&
      <PathContainer>
        {paths?.map((path, index) => {
          const currentPath = pathsName.filter((item) =>
            item.toLowerCase().includes(path?.toLowerCase())
          );
          return (
            <PathItem key={index}>
              <PathTextContainer>
                <StyledText>{currentPath}</StyledText>
              </PathTextContainer>
              <StyledIcon
                component="img"
                src={ChevronRightSVG}
                alt="chevron-right"
              />
            </PathItem>
          );
        })}
        {selectedTab && (
          <PathItem>
            <PathTextContainer>
              <StyledText status={true}>
                {
                  pathsName?.filter(
                    (item) => item?.toLowerCase() === selectedTab.toLowerCase()
                  )[0]
                }
              </StyledText>
            </PathTextContainer>
          </PathItem>
        )}
      </PathContainer>
}
      <ActionsContainer>
        {largeTablet && (
          <ExpandIcon
            sx={{ rotate: displayProfile ? "0deg" : "180deg", cursor: "pointer" }}
            onClick={() => {
              setDisplayProfile((prev) => !prev);
            }}
            component="img"
            src={ExpandSVG}
          />
        )}
        {(displayProfile || !largeTablet) && (
          <>
            <LeftWrapper>
              <LeftContainer>
                <Searhbar
                  placeholder="Search"
                  inputProps={{
                    sx: {
                      "&::placeholder": {
                        color: "#9E9E9E",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        opacity: 1,
                      },
                    },
                  }}
                  startAdornment={
                    <StyledInputAndorsement position="start">
                      <SearchIcon component="img" src={SearchIconSVG} />
                    </StyledInputAndorsement>
                  }
                />
                <StyledBadge badgeContent={3}>
                  <NotificationIcon component="img" src={NotificationSVG} />
                </StyledBadge>
              </LeftContainer>
            </LeftWrapper>
            <UserDetailsContainer>
              <UserImage component="img" src={UserImageSVG} alt="user" />
              <NameContainer>
                <StyledUsername>User Name</StyledUsername>
                <StyledCompany>Company Name</StyledCompany>
              </NameContainer>
              <ArrowDownIcon
                component="img"
                src={ArrowDownSVG}
                alt="arrow-dropdown"
              />
            </UserDetailsContainer>
            <LanguageContainer>
              <LanguageText>EN</LanguageText>
            </LanguageContainer>
          </>
        )}
      </ActionsContainer>
    </NavbarWrapper>
  );
}
