import styled from "styled-components";
import img from '../../assets/home/home-wpp.png'

export const Box = styled.div`
    .title-home {
        font-size: 2.3em;
        color: #3e4f1a;
        padding: 20px;
    }

    .home {
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        justify-content: center;
        text-align: center;
    }
    .home1 {
        background-image: url(${img});
    }

`