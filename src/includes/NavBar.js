import React, { useState } from 'react';
import styled from "styled-components";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo to="/">Moha<span>Mmed</span></Logo>
            <HamBerger onClick={()=>setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </HamBerger>
            <Menu isOpen={isOpen}>
                <Item>Home</Item>
                <Item>About</Item>
                <Item>Contact</Item>
                <Item>Report</Item>
            </Menu>
        </Nav>
    );
};

const Nav = styled.header`
 padding: 0 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: #fff;
 @media all and (max-width:740px) {
     flex-wrap: wrap;
 }
`;
const Logo = styled.a`
 display: inline-block;
 padding: 1rem 0;
 color: #7b7fda;
 text-decoration: none;
 font-weight: 800;
 font-size: 1.7rem;
 cursor: pointer;
 span {
     display: inline-block;
     font-weight: 400;
     font-size: 1.3rem;
 }
`;
const HamBerger = styled.div`
 cursor: pointer;
 flex-direction: column;
 display: none;
 @media all and (max-width: 740px) {
    display: flex;
 }
 span {
     height: 3px;
     width: 35px;
     background-color: #0e76ff;
     margin-bottom: 4px;
     border-radius: 5px;
     &:nth-child(2) {
         width: 30px;
     }
     &:last-child {
         margin-bottom: 0;
     }
 }
`;
const Menu = styled.ul`
 display: flex;
 @media all and (max-width: 740px) {
     overflow: hidden;
     flex-direction: column;
     align-items: center;
     width: 100%;
     max-height: ${({isOpen})=>isOpen ? "300px" : "0"};
     transition: max-height 0.3s ease-out;
 }
`;
const Item = styled.li`
 list-style: none;
 display: inline-block;
 margin-right: 20px;
 cursor: pointer;
 font-weight: 500;
 font-size: 20px;
 &:last-child {
     margin-right: 0;
 }
 &:hover {
     color: #7f8c8d;
 }
 @media all and (max-width: 740px) {
     margin-right: 0;
     margin-bottom: 20px;
 }
`;

export default NavBar;
