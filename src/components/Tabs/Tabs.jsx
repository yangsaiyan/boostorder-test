import {
  StyledTabContainer,
  StyledText,
  TabsContainer,
  TabsWrapper,
  TextContainer,
} from "./styles";

export default function Tabs({ selectedTab }) {
  return (
    <TabsWrapper>
      <TabsContainer>
        <StyledTabContainer>
          <TextContainer>
            <StyledText>Buyer’s e-Invoice</StyledText>
          </TextContainer>
        </StyledTabContainer>
        <StyledTabContainer>
          <TextContainer>
            <StyledText>Supplier’s e-Invoice</StyledText>
          </TextContainer>
        </StyledTabContainer>
        <StyledTabContainer>
          <TextContainer>
            <StyledText>Self-billed e-Invoice</StyledText>
          </TextContainer>
        </StyledTabContainer>
        <StyledTabContainer>
          <TextContainer>
            <StyledText>Product</StyledText>
          </TextContainer>
        </StyledTabContainer>
        <StyledTabContainer>
          <TextContainer>
            <StyledText>Customer</StyledText>
          </TextContainer>
        </StyledTabContainer>
        <StyledTabContainer>
          <TextContainer>
            <StyledText>Supplier</StyledText>
          </TextContainer>
        </StyledTabContainer>
        <StyledTabContainer selected={selectedTab === "Settings"}>
          <TextContainer>
            <StyledText selected={selectedTab === "Settings"}>
              Settings
            </StyledText>
          </TextContainer>
        </StyledTabContainer>
      </TabsContainer>
    </TabsWrapper>
  );
}
