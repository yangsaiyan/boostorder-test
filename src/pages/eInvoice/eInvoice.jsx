import { useState } from "react";
import NavbarPath from "../../components/NavbarPath/NavbarPath";
import Setting from "../../components/Setting/Setting";
import Tabs from "../../components/Tabs/Tabs";
import VersionFooter from "../../components/VersionFooter/VersionFooter";
import { EInvoiceWrapper } from "./styles";

export default function eInvoice() {
  const [currentPath, setCurrentPath] = useState("Settings");

  return (
    <EInvoiceWrapper>
      <NavbarPath selectedTab={currentPath} />
      <Tabs selectedTab={currentPath} />
      <Setting />
      <VersionFooter />
    </EInvoiceWrapper>
  );
}
