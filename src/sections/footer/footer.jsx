import React from "react";
import styled from "styled-components";
import { black, pink, white } from "../../const/colors";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fa";
import { LOGO, sections } from "../../const/const";
import { useState } from "react";

const FooterWrapper = styled.footer`
  height: 176px;
  background-color: ${black};
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Title = styled.h1`
  font-family: "Arvo", serif;

  color: white;
`;

const Image = styled.img`
  width: 100px;
  align-self: center;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  align-self: center;
  margin-bottom: 10px;
`;

const Li = styled.li`
  font-family: "Anek Malayalam";
  font-weight: 800;
  color: ${(props) => (props.selected ? pink : white)};
  cursor: pointer;
`;

const Link = styled.a`
  color: white;
`

const Footer = () => {
  const [selected, setSelected] = useState("");

  return (
    <FooterWrapper>
      <Image src={LOGO} />
      <Ul>
        {sections.map((item) => {
          return (
            <Li
              onClick={() => setSelected(item)}
              selected={selected === item ? true : false}
            >
              {item}
            </Li>
          );
        })}
      </Ul>
      <div style={{marginBottom:'10px'}}>
        <Link href="https://www.tiktok.com/@codelemonade?lang=en" target="_blank">
          <FaTiktok style={{ fontSize: 25, marginRight: 10 }} />
        </Link>
        <Link
          href="https://www.instagram.com/codelemonadev/?next=%2F"
          target="_blank"
        >
          <FaInstagram style={{ fontSize: 25 }} />
        </Link>
      </div>

      <p style={{ fontFamily: "Arvo serif" }}>
        All right reserved 2023 codelemonade
      </p>
    </FooterWrapper>
  );
};

export default Footer;
