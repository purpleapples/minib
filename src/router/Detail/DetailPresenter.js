import styled from 'styled-components';
import Loader from '../../components/Loader';
import LikeButton from '../../components/LikeButton';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;    
    align-items:flex-end;
    height:100%;
    background-image:url(${props=> `${props.poster}`});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    backdrop-filter:opacity(0.5);
    opacity:0.5;
    z-index:1;
`;
// z-index를 이용한 division 겹치기 후 배경만 filtering
// const dkdk = styled.div`
//     background-image:url(${props=> `${props.poster}`});
//     background-position:center;
//     background-repeat:no-repeat;
//     background-size:cover;
//     position: fixed;
//     z-index:1;
// `;

const UpperDiv = styled.section`
    margin-top:20px;    
    height:400px;
    width: 600px;
    min-width:600px;    
    margin-right:10vw;
    display:grid;
    grid-template-columns: 400px 200px;    
`;
const LowerDiv = styled.section`    
    height:150px;
    width: 600px;
    min-width:600px;    
    margin-right:10vw; 
`;
const ImageArticle = styled.article`
    background-image:url(${props=> `${props.poster}`});
    background-repeat:no-repeat;
    background-size:cover;
`;
const StoryArticle = styled.article`
    padding-top:10px;
`;
const CreatorArticle = styled.article`
    display:grid;
    grid-template-rows: 3em 3em 3em 3em 3em 6em 3em 3em 3em 3em; 
`
const StyledP = styled.p`
    font-size:1rem;
    color:whitesmoke;
    opacity:0.7;
    font-weight:bold;
`;
const FigureSpan = styled.span`
    color:white;
    font-size:1.4rem;
    font-weight:bold;
`;
const DetailPresenter = ({
    result,
    error,
    loading,
    _handleonClick
}) => {          
    console.log(result.actors);
    return(
    <>
    {loading ? (<Loader />) : (
        <Container poster={result.poster}>                                
        <UpperDiv>
            <ImageArticle poster={result.poster}/>
            <CreatorArticle>
                <FigureSpan> 감독 </FigureSpan>
                <FigureSpan>{result.director}</FigureSpan>
                <FigureSpan>장르 </FigureSpan>
                <FigureSpan>{result.genre}</FigureSpan>
                <FigureSpan>배우</FigureSpan>
                <FigureSpan>{result.actors.map(actor=> (actor+" "))}</FigureSpan>
                <FigureSpan>개봉일 </FigureSpan>
                <FigureSpan>{result.releaseDt}</FigureSpan>
                <FigureSpan>상영시간</FigureSpan>
                <FigureSpan>{result.runningtime} <LikeButton onClick={()=>_handleonClick(result._id, result.like)} /></FigureSpan>
            </CreatorArticle>
        </UpperDiv>
        <LowerDiv>
            <StoryArticle>
            <StyledP>{result.synopsys}</StyledP>
            </StoryArticle>
        </LowerDiv>
    </Container>
    )}
        
    </>
    )
}

export default DetailPresenter;