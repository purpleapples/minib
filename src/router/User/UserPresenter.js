import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Container = styled.div`
    padding:20px;
`;

const UserPresenter = () => {
    return (
        <>
            <Helmet>
                <title> MovieFrame | User </title>
            </Helmet>
            <Container>ccc</Container>

        </>
        
    );
};

export default UserPresenter;