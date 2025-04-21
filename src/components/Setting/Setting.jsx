import {
  AddressStyledFormControl,
  AddressStyledSelect,
  CheckboxLabel,
  CompanyDetailsWrapper,
  CompanyDetailTextContainer,
  ExpandIcon,
  FormControlContainer,
  GeneralInputRowContainer,
  IDStyledFormControl,
  IDStyledSelect,
  InputContainer,
  InputLabelContainer,
  InputLabelWrapper,
  RequiredSymbolContainer,
  SettingHeaderContainer,
  SettingHeaderWrapper,
  SettingWrapper,
  StyledCharacterCount,
  StyledCheckbox,
  StyledCompanyDetailsText,
  StyledContactNumberInput,
  StyledGeneralInput,
  StyledHeaderText,
  StyledInputLabelText,
  StyledPunctuation,
  StyledRequiredSymbol,
  StyledSaveButton,
  StyledTextarea,
  StyledTooltip,
} from "./styles";
import TooltipSVG from "../../../public/Tooltip.svg";
import ExpandSVG from "../../../public/Expand.svg";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

export default function Setting() {

  const smallDesktop = useMediaQuery("(max-width: 1320px)");
  const largeTablet = useMediaQuery("(max-width: 1080px)");
  const largeMobile = useMediaQuery("(max-width: 650px)");

  const [companyName, setCompanyName] = useState("Example Corporation");
  const [businessActivityDesc, setBusinessActivityDesc] = useState(
    "A text area lets users enter long form text which spans over multiple lines."
  );
  const [idType, setIdType] = useState(1);
  const [country, setCountry] = useState(1);
  const [state, setState] = useState(1);
  const [city, setCity] = useState(1);
  const [postcode, setPostcode] = useState(1);

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleBusinessActivityDesc = (event) => {
    setBusinessActivityDesc(event.target.value);
  };

  const handleIdType = (event) => {
    setIdType(event.target.value);
  };
  
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <SettingWrapper>
      <SettingHeaderWrapper>
        <SettingHeaderContainer>
          <StyledHeaderText>Settings</StyledHeaderText>
          <StyledSaveButton>Save</StyledSaveButton>
        </SettingHeaderContainer>
        <ExpandIcon component="img" src={ExpandSVG} />
      </SettingHeaderWrapper>
      <CompanyDetailsWrapper>
        <CompanyDetailTextContainer>
          <StyledCompanyDetailsText>Company Details</StyledCompanyDetailsText>
        </CompanyDetailTextContainer>
        <InputContainer>
          <GeneralInputRowContainer>
            <FormControlContainer>
              <InputLabelWrapper col={"first"}>
                <InputLabelContainer>
                  <StyledInputLabelText>Company Name</StyledInputLabelText>
                  <RequiredSymbolContainer>
                    <StyledRequiredSymbol>*</StyledRequiredSymbol>
                  </RequiredSymbolContainer>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <StyledGeneralInput
                value={companyName}
                onChange={handleCompanyNameChange}
              />
            </FormControlContainer>

            <FormControlContainer sx={{ alignItems: "flex-start" }}>
              <InputLabelWrapper col={"second"}>
                <InputLabelContainer>
                  <StyledInputLabelText>ID Type</StyledInputLabelText>
                  <RequiredSymbolContainer>
                    <StyledRequiredSymbol>*</StyledRequiredSymbol>
                  </RequiredSymbolContainer>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <IDStyledFormControl>
                <IDStyledSelect displayEmpty onChange={handleIdType} itemSelected={idType !== 1} value={idType}>
                  <MenuItem value={1}>
                    Select
                  </MenuItem>
                  <MenuItem value={2}>
                    ID1
                  </MenuItem>
                  <MenuItem value={3}>
                    ID2
                  </MenuItem>
                </IDStyledSelect>
              </IDStyledFormControl>
              <CheckboxLabel control={<StyledCheckbox />} label="N/A" />
            </FormControlContainer>

            <FormControlContainer>
              <InputLabelWrapper col={"third"}>
                <InputLabelContainer>
                  <StyledInputLabelText>ID Number</StyledInputLabelText>
                  <RequiredSymbolContainer>
                    <StyledRequiredSymbol>*</StyledRequiredSymbol>
                  </RequiredSymbolContainer>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <StyledGeneralInput defaultValue={"ID123456789"} />
            </FormControlContainer>
          </GeneralInputRowContainer>

          <GeneralInputRowContainer>
            <FormControlContainer>
              <InputLabelWrapper col={"first"}>
                <InputLabelContainer>
                  <StyledInputLabelText>Tin</StyledInputLabelText>
                  <RequiredSymbolContainer>
                    <StyledRequiredSymbol>*</StyledRequiredSymbol>
                  </RequiredSymbolContainer>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <StyledGeneralInput defaultValue={"ID0123456789"} />
            </FormControlContainer>

            <FormControlContainer>
              <InputLabelWrapper col={"second"}>
                <InputLabelContainer>
                  <StyledInputLabelText>
                    SST Registration Number
                  </StyledInputLabelText>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <StyledGeneralInput defaultValue={"MY782654639057"} />
              <CheckboxLabel control={<StyledCheckbox />} label="N/A" />
            </FormControlContainer>

            <FormControlContainer>
              <InputLabelWrapper col={"third"}>
                <InputLabelContainer>
                  <StyledInputLabelText>
                    Tourism Tax Registration Number
                  </StyledInputLabelText>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <StyledGeneralInput defaultValue={"T0233307"} />
              <CheckboxLabel control={<StyledCheckbox />} label="N/A" />
            </FormControlContainer>
          </GeneralInputRowContainer>

          <GeneralInputRowContainer>
            <FormControlContainer>
              <InputLabelWrapper col={"first"}>
                <InputLabelContainer>
                  <StyledInputLabelText>MSIC Code</StyledInputLabelText>
                  <RequiredSymbolContainer>
                    <StyledRequiredSymbol>*</StyledRequiredSymbol>
                  </RequiredSymbolContainer>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <StyledGeneralInput defaultValue={"96094 Pet care services"} />
            </FormControlContainer>

            <FormControlContainer>
              <InputLabelWrapper col={"second"}>
                <InputLabelContainer>
                  <StyledInputLabelText>Email</StyledInputLabelText>
                  <RequiredSymbolContainer>
                    <StyledRequiredSymbol>*</StyledRequiredSymbol>
                  </RequiredSymbolContainer>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <StyledGeneralInput defaultValue={"examplecorp@email.com"} />
            </FormControlContainer>

            <FormControlContainer>
              <InputLabelWrapper col={"third"}>
                <InputLabelContainer>
                  <StyledInputLabelText>Contact Number</StyledInputLabelText>
                  <RequiredSymbolContainer>
                    <StyledRequiredSymbol>*</StyledRequiredSymbol>
                  </RequiredSymbolContainer>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <StyledGeneralInput defaultValue={"60123456789"} />
            </FormControlContainer>
          </GeneralInputRowContainer>

          <GeneralInputRowContainer>
            <FormControlContainer>
              <InputLabelWrapper col={"first"}>
                <InputLabelContainer>
                  <StyledInputLabelText>
                    Bank account number
                  </StyledInputLabelText>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <StyledGeneralInput />
            </FormControlContainer>

            <FormControlContainer sx={{ display: smallDesktop && "none !important", opacity: "0" }}>
              <InputLabelWrapper col={"second"}>
                <InputLabelContainer>
                  <StyledInputLabelText>
                    Bank account number
                  </StyledInputLabelText>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <StyledGeneralInput />
            </FormControlContainer>

            <FormControlContainer sx={{ display: smallDesktop && "none !important", opacity: "0" }}>
              <InputLabelWrapper col={"third"}>
                <InputLabelContainer>
                  <StyledInputLabelText>
                    Bank account number
                  </StyledInputLabelText>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <StyledGeneralInput />
            </FormControlContainer>
          </GeneralInputRowContainer>

          <GeneralInputRowContainer
            sx={{ height: largeMobile ? "fit-content" : "156px", alignItems: "flex-start" }}
          >
            <FormControlContainer sx={{ alignItems: "flex-start" }}>
              <InputLabelWrapper col={"first"}>
                <InputLabelContainer>
                  <StyledInputLabelText>
                    Business Activity Description
                  </StyledInputLabelText>
                  <RequiredSymbolContainer>
                    <StyledRequiredSymbol>*</StyledRequiredSymbol>
                  </RequiredSymbolContainer>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <Grid
                sx={{
                  width: "100%",
                  gap: "8px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <StyledTextarea
                  value={businessActivityDesc}
                  onChange={handleBusinessActivityDesc}
                />
                <Grid display={"flex"} justifyContent="flex-end">
                  <StyledCharacterCount>
                    {businessActivityDesc.length > 0
                      ? businessActivityDesc.length
                      : "0"}{" "}
                    Characters
                  </StyledCharacterCount>
                </Grid>
              </Grid>
            </FormControlContainer>
          </GeneralInputRowContainer>

          <GeneralInputRowContainer>
            <FormControlContainer sx={{ alignItems: "flex-start" }}>
              <InputLabelWrapper col={"first"}>
                <InputLabelContainer>
                  <StyledInputLabelText>Address</StyledInputLabelText>
                  <RequiredSymbolContainer>
                    <StyledRequiredSymbol>*</StyledRequiredSymbol>
                  </RequiredSymbolContainer>
                  <StyledTooltip component="img" src={TooltipSVG} />
                </InputLabelContainer>
                <StyledPunctuation>:</StyledPunctuation>
              </InputLabelWrapper>
              <Grid
                width={"100%"}
                display={"flex"}
                flexDirection="column"
                gap={"8px"}
              >
                <Grid display={"flex"} flexDirection={largeTablet && "column"} gap={"8px"}>
                  <StyledGeneralInput defaultValue={"23, Jalan Perhentian"} />
                  <StyledGeneralInput defaultValue={"Taman Sentosa"} />
                </Grid>
                <Grid display={"flex"} flexDirection={largeTablet && "column"} gap={"8px"}>
                  <AddressStyledFormControl>
                    <AddressStyledSelect onChange={handleCountryChange} value={country}>
                      <MenuItem value={1}>Malaysia</MenuItem>
                      <MenuItem value={2}>Singapore</MenuItem>
                    </AddressStyledSelect>
                  </AddressStyledFormControl>
                  <AddressStyledFormControl>
                    <AddressStyledSelect onChange={handleStateChange} value={state}>
                      <MenuItem value={1}>Selangor</MenuItem>
                      <MenuItem value={2}>Perak</MenuItem>
                    </AddressStyledSelect>
                  </AddressStyledFormControl>
                  <AddressStyledFormControl>
                    <AddressStyledSelect onChange={handleCityChange} value={city}>
                      <MenuItem value={1}>Petaling Jaya</MenuItem>
                      <MenuItem value={2}>Kajang</MenuItem>
                    </AddressStyledSelect>
                  </AddressStyledFormControl>
                  <AddressStyledFormControl>
                    <AddressStyledSelect onChange={handlePostcodeChange} value={postcode}>
                      <MenuItem value={1}>46350</MenuItem>
                      <MenuItem value={2}>43300</MenuItem>
                    </AddressStyledSelect>
                  </AddressStyledFormControl>
                </Grid>
              </Grid>
              <CheckboxLabel
                sx={{ textWrap: "nowrap" }}
                control={<StyledCheckbox />}
                label="Partial N/A"
              />
            </FormControlContainer>
          </GeneralInputRowContainer>
        </InputContainer>
      </CompanyDetailsWrapper>
    </SettingWrapper>
  );
}
