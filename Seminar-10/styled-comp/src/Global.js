import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        background-color:  red;
        color: black
        font-size: 1.15em;
        margin: 0;
    }

    p{
        opacity: 0.6;
        line-height: 1.5;
    }
    img{
        max-width: 100%;
    }
`;
export default Global;