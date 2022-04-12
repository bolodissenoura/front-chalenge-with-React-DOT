import styled from 'styled-components';

export const About = styled.div`
    .about-img {
        width: 20em;
    }

    .pd-about {
        padding: 50px;
        padding-left: 8em;
    }

    .about-text {
        padding-left: 60px;
        color: #fff;
        font-size: 15px !important;
        width: 37em;
    }

    .about-title {
        color: #fff;
        font-size: 40px !important;
        font-weight: 700;
    }

    .wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 60px;
    }


    @media only screen and (max-width: 800px) {
        .pd-about {
            padding: 50px;
            padding-left: 2em;
        }

        .about-text {
            padding-left: 20px;
            color: #fff;
            font-size: 15px !important;
            width: auto;
        }

        .about-subtitle {
            padding-left: 20px;
        }

    }
`