import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styled from "../styles/nav.styled";
import { routers, routersNames } from "../utils/variables";
import BurgerMenu from "./burgerMenu";

const Nav = () => {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <BurgerMenu />
      ) : (
        <Styled.NavContainer>
          {routersNames.map((route, idx) => (
            <Link key={route + idx} href={routers[idx]} passHref style={{ textDecoration: "none" }}>
              <Styled.NavItem className={router.pathname === routers[idx] ? "active" : ""}>{route}</Styled.NavItem>
            </Link>
          ))}
        </Styled.NavContainer>
      )}
    </>
  );
};

export default Nav;
