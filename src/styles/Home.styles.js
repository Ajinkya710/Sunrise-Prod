import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HomeContent = styled.section`
font-family: 'Raleway', sans-serif;
height: 80%;
width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
color: #FFFEFE;

@media only screen and (max-width:375px) {
    text-align: start;
    height: 80%;
}
`;

export const HomeContentText = styled.div`
width: 78%;
padding-top: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media only screen and (max-width:600px) {
    width: 80%;
}
@media only screen and (max-width:375px) {
    position: absolute;
    align-items: flex-start;
}
`;

export const HomeTitle = styled.h1`
font-size: clamp(1rem, 10vw, 2.5rem);
font-weight: 900;
letter-spacing: .2rem;
line-height: 1.3;
`;

export const HomeTitleText = styled.span`
display: block;
`;

export const HomeSubTitle = styled.h2`
font-size: clamp(2rem, 3vw, 4rem);
font-weight: 400;
letter-spacing: 1rem;
padding-top: 1rem;
`;

export const HomeText = styled.h3`
font-size: clamp(1.1rem, 3vw, 1.1rem);
font-weight: 400;
padding: 2.5rem 2rem;

// @media only screen and (max-width:375px) {
//     padding: 1.5rem 0;
// }
`;

export const HomeBtn = styled(Link)`
text-decoration: none;
outline: none;
border: none;
`;