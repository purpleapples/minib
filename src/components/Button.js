import styled from 'styled-components';

const HeartButton = styled.button`
    height:35px;
    width:35px;
    background-color: ${props=> props.like ? "red" : "black"};
    //background-image: require( ${props=> props.like ? "../assets/like.png" : "../assets/ignore.png"} );
`;

const LikeButton = (props) =>{
     
    return(<HeartButton like={props.like} onClick={(event) => {
        props._handler(event)} }/>);
}

export default LikeButton;