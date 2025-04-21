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
} from "@mui/material";
import { useState } from "react";

export default function Setting() {
  const displayFunction = (bool, msg) => {
    console.log(bool ? "Hello world!" : msg);
  };

  displayFunction(true);

  const [companyName, setCompanyName] = useState("");
  const [businessActivityDesc, setBusinessActivityDesc] = useState("");

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleBusinessActivityDesc = (event) => {
    setBusinessActivityDesc(event.target.value);
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
                <IDStyledSelect displayEmpty value={10}>
                  <MenuItem selected value={10}>
                    Select
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
              <StyledGeneralInput value={"ID123456789"} />
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
              <StyledGeneralInput value={"ID0123456789"} />
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
              <StyledGeneralInput value={"MY782654639057"} />
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
              <StyledGeneralInput value={"T0233307"} />
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
              <StyledGeneralInput value={"96094 Pet care services"} />
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
              <StyledGeneralInput value={"examplecorp@email.com"} />
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
              <StyledGeneralInput value={"examplecorp@email.com"} />
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

            <FormControlContainer sx={{opacity: "0"}}>
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

            <FormControlContainer sx={{opacity: "0"}}>
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
            sx={{ height: "156px", alignItems: "flex-start" }}
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
                <Grid display={"flex"} gap={"8px"}>
                  <StyledGeneralInput value={"23, Jalan Perhentian"} />
                  <StyledGeneralInput value={"Taman Sentosa"} />
                </Grid>
                <Grid display={"flex"} gap={"8px"}>
                  <AddressStyledFormControl>
                    <AddressStyledSelect value={1}>
                      <MenuItem value={1}>Malaysia</MenuItem>
                    </AddressStyledSelect>
                  </AddressStyledFormControl>
                  <AddressStyledFormControl>
                    <AddressStyledSelect value={1}>
                      <MenuItem value={1}>Selangor</MenuItem>
                    </AddressStyledSelect>
                  </AddressStyledFormControl>
                  <AddressStyledFormControl>
                    <AddressStyledSelect value={1}>
                      <MenuItem value={1}>Petaling Jaya</MenuItem>
                    </AddressStyledSelect>
                  </AddressStyledFormControl>
                  <AddressStyledFormControl>
                    <AddressStyledSelect value={1}>
                      <MenuItem value={1}>46350</MenuItem>
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
