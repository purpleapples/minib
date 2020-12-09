import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../components/Loader';
import Section from '../../components/Section';
import Poster from '../../components/Poster';
const Container = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    padding:20px;
`;
const Article = styled.article`
    display:grid;    
    grid-template-columns: repeat(auto-fill, 100px);
    gap: 20px;
`;
const Ul = styled.ul`
    display:grid;    
    grid-template-rows: repeat(auto-fill, 15px);
    gap: 10px;
`;
const UserPresenter = ({
    myfavoriteList,
    error,
    loading
}) => {
    return (
        <>        
            <Helmet>
                <title>MovieFrame | Home</title>
            </Helmet>
            {loading ? (<Loader />) : (
                <Container>                            
                    <Section title="내가 좋아하는 영화목록~">
                    {
                        myfavoriteList.map(movie => {
                            return(<Poster 
                                naver_code = {movie.naver_code}
                                title={movie.title}
                                poster={movie.thumbnail}
                                star={movie.star}
                                director={movie.director}
                                actors={movie.actors}
                                genre={movie.genre}
                                runningtime={movie.runningtime}
                                releaseDt={movie.releaseDt}
                                />)
                        }                            
                        )
                    }
                    </Section>
                    <Section title="정보분석">
                        <Ul>
                            <li>sdsds</li>
                            <li>sdsds</li>
                            <li>sdsds</li>
                            <li>sdsds</li>
                            <li>sdsds</li>
                        </Ul>
                        <Ul>
                            <li>sdsds</li>
                            <li>sdsds</li>
                            <li>sdsds</li>
                            <li>sdsds</li>
                            <li>sdsds</li>
                        </Ul>
                        <Ul>
                            <li>sdsds</li>
                            <li>sdsds</li>
                            <li>sdsds</li>
                            <li>sdsds</li>
                            <li>sdsds</li>
                        </Ul>
                    </Section>
                </Container>
            )}
            
        </>
        
    );
};

export default UserPresenter;