import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    padding:20px;
`;
const UpperSection = styled.section`
    background-color:rgba(210, 237, 134, 0.5);
`;
const ImgArticle = styled.article`
    background-color:rgba(113, 147, 21, 0.5);
`;
const Img = styled.img``;
const LowerSecton = styled.section`
    background-color:rgba(113, 147, 21, 0.5);
`;
const StarSpan = styled.span``;
const Synopsys = styled.p``;
const TextP = styled.p``;

const DetailPresenter = ({
        result,
        error,
        loading
}) => {
    return (
        <Container>
            <UpperSection ></UpperSection>
            <LowerSecton ></LowerSecton>
        </Container>
    );
};

export default DetailPresenter;