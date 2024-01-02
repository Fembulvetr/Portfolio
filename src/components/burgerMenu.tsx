import React, { useState } from "react";
import * as Styled from "../styles/burgerMenu.styled";
import { routers, routersNames } from "../utils/variables";
import { useRouter } from "next/router";
import Link from "next/link";
import { CloseOutlined, MenuFoldOutlined } from "@ant-design/icons";

const BurgerMenu = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Styled.Wrapper>
      <Styled.Button onClick={onToggle}>
        {isOpen ? (
          <CloseOutlined style={{ color: "#f5d393", fontSize: "24px" }} />
        ) : (
          <MenuFoldOutlined style={{ color: "#f5d393", fontSize: "24px" }} />
        )}
      </Styled.Button>
      {isOpen && (
        <Styled.List className={isOpen ? "open" : "hide"}>
          {routersNames.map((route, idx) => (
            <Link key={route + idx} href={routers[idx]} passHref style={{ textDecoration: "none" }}>
              <Styled.Row className={router.pathname === routers[idx] ? "active" : ""}>{route}</Styled.Row>
            </Link>
          ))}
        </Styled.List>
      )}
    </Styled.Wrapper>
  );
};

export default BurgerMenu;
