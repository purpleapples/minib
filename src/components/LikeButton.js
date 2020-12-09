import React from 'react';
import styled from 'styled-components';
import {movieApi} from '../api';

const HeartButton = styled.button`
    height:35px;
    width:35px;
    background-color: ${props=> props.like ? "red" : "black"};
    //background-image: require( ${props=> props.like ? "../assets/like.png" : "../assets/ignore.png"} );
`;

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            like:props.like,
            oid:props.oid,
            loading:true,
            error:null,
        }
    }
    

    render(){
        const {loading, error, like, oid} = this.state;

        return(<HeartButton like={like} oid={oid}
            onClick={this._handleonClick} />)
    }

}

export default LikeButton;