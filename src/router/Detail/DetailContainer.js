import React from 'react';
import { movieApi } from '../../api';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component{
    constructor(props){
        super(props);

        this.state =
        {
            result: null,
            error : null,
            loading: true,            
        }        
    }
    async componentDidMount(){

        const {match: {params:{naver_code}},
        history:{push}}        
        = this.props;
            
        let result = null;                

        try {
            const {data:result} = await movieApi.getMovieSynopsys(naver_code);

        } catch (error) {
            this.setState({error:error});
            console.log(error);
        }finally{
            this.setState({
                loading:false, result
            })
        }
    } 

    render(){
        const {result, error, loading} = this.state;
        return <DetailPresenter 
            result={result}
            error={error}
            loading={loading}
        />
    }
}

export default DetailContainer;