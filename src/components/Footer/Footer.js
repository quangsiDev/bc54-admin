import React from "react";
import { useMediaQuery } from "react-responsive";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
export default function Footer() {
  return (
    <div>
      <Desktop>
        <FooterDesktop />
      </Desktop>

      <Mobile>
        <FooterMobile />
      </Mobile>
    </div>
  );
}
