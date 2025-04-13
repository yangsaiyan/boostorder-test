import Navbar from "../components/Navbar/Navbar";
import { Wrapper } from "./styles";

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
}
