import {
  Container,
  HeaderWrapper,
  IconContainer,
  Logo,
  LogoContainer,
  SearchIcon,
  SearchIconBase,
  SearchIconContainer,
  StyledIcon,
  StyledSection,
  TabsWrapper,
} from "./styles";
import CartSVG from "../../../public/Cart.svg";
import CloundSyncSVG from "../../../public/CloudSync.svg";
import DiscountSVG from "../../../public/Discount.svg";
import DocumentSVG from "../../../public/Document.svg";
import DocumentTickSVG from "../../../public/DocumentTick.svg";
import GiftSVG from "../../../public/Gift.svg";
import GraphSVG from "../../../public/Graph.svg";
import HandbagSVG from "../../../public/Handbag.svg";
import IntegrationSVG from "../../../public/Integration.svg";
import InventorySVG from "../../../public/Inventory.svg";
import ListTickSVG from "../../../public/ListTick.svg";
import ListTimeSVG from "../../../public/ListTime.svg";
import LogoPath from "../../../public/Logo.svg";
import LorrySVG from "../../../public/Lorry.svg";
import LorryTimeSVG from "../../../public/LorryTime.svg";
import MapTimeSVG from "../../../public/MapTime.svg";
import PeopleSVG from "../../../public/People.svg";
import PeopleIncreaseSVG from "../../../public/PeopleIncrease.svg";
import SearchSVG from "../../../public/LeadingIcon.svg";
import SecureSVG from "../../../public/Secure.svg";
import ShakehandSVG from "../../../public/ShakeHand.svg";
import WarehouseSVG from "../../../public/Warehouse.svg";

export default function Navbar() {
  return (
    <Container>
      <HeaderWrapper>
        <LogoContainer>
          <Logo component="img" src={LogoPath} />
        </LogoContainer>
        <SearchIconContainer>
          <SearchIconBase>
            <SearchIcon component="img" src={SearchSVG} />
          </SearchIconBase>
        </SearchIconContainer>
      </HeaderWrapper>
      <TabsWrapper>
        <StyledSection>
          <IconContainer>
            <StyledIcon component="img" src={InventorySVG} />
          </IconContainer>
          <IconContainer>
            <StyledIcon component="img" src={ShakehandSVG} />
          </IconContainer>
          <IconContainer>
            <StyledIcon component="img" src={DiscountSVG} />
          </IconContainer>
        </StyledSection>
        <StyledSection>
          <IconContainer>
            <StyledIcon component="img" src={PeopleSVG} />
          </IconContainer>
          <IconContainer>
            <StyledIcon component="img" src={HandbagSVG} />
          </IconContainer>
        </StyledSection>
        <StyledSection>
          <IconContainer>
            <StyledIcon component="img" src={PeopleIncreaseSVG} />
          </IconContainer>
          <IconContainer>
            <StyledIcon component="img" src={GiftSVG} />
          </IconContainer>
        </StyledSection>
        <StyledSection>
          <IconContainer>
            <StyledIcon component="img" src={CartSVG} />
          </IconContainer>
          <IconContainer>
            <StyledIcon component="img" src={SecureSVG} />
          </IconContainer>
        </StyledSection>
        <StyledSection>
          <IconContainer>
            <StyledIcon component="img" src={WarehouseSVG} />
          </IconContainer>
          <IconContainer>
            <StyledIcon component="img" src={LorrySVG} />
          </IconContainer>
        </StyledSection>
        <StyledSection>
          <IconContainer>
            <StyledIcon component="img" src={DocumentTickSVG} />
          </IconContainer>
          <IconContainer>
            <StyledIcon component="img" src={ListTickSVG} />
          </IconContainer>
          <IconContainer>
            <StyledIcon component="img" src={MapTimeSVG} />
          </IconContainer>
          <IconContainer>
            <StyledIcon component="img" src={LorryTimeSVG} />
          </IconContainer>
        </StyledSection>
        <StyledSection>
          <IconContainer>
            <StyledIcon component="img" src={DocumentSVG} />
          </IconContainer>
          <IconContainer>
            <StyledIcon component="img" src={ListTimeSVG} />
          </IconContainer>
        </StyledSection>
        <StyledSection>
          <IconContainer>
            <StyledIcon component="img" src={GraphSVG} />
          </IconContainer>
        </StyledSection>
        <StyledSection>
          <IconContainer
            sx={{ backgroundColor: "#EBF4FF", borderRadius: "4px" }}
          >
            {/* add selected base color later */}
            <StyledIcon component="img" src={IntegrationSVG} />
          </IconContainer>
          <IconContainer>
            <StyledIcon component="img" src={CloundSyncSVG} />
          </IconContainer>
        </StyledSection>
      </TabsWrapper>
    </Container>
  );
}
