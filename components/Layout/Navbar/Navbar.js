import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import useMediaQuery from "../../../hooks/useMediaQuery";
import MobileNav from "./MobileNav";

const menuListItem = [
  {
    id: 1,
    url: "/",
    text: "Strona główna",
  },
  {
    id: 2,
    url: "/offer",
    text: "Oferta",
  },
  {
    id: 3,
    url: "/price",
    text: "Cennik",
  },
  {
    id: 4,
    url: "/contact",
    text: "Kontakt",
  },
];

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <Navigation>
      {!isMobile && (
        <ul>
          {menuListItem.map((item) => (
            <li key={item.id} className="link">
              <Link href={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      )}
      {isMobile && <MobileNav links={menuListItem} />}

      <Image src="/Logo/Logo.jpg" alt="Logo aladyn" width={60} height={60} />
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    width: 50%;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.8rem;
    padding: 0px;
  }

  a {
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.2rem;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${({ theme }) => theme.text.primary};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  a:hover:after {
    width: 100%;
    left: 0;
  }
`;
