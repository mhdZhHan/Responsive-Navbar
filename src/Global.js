import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     vertical-align: baseline;
 }

 body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     background: #EA2027;
 }

`;
export default Global;
