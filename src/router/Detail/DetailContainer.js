import {React, useState, useEffect} from 'react';
import { movieApi } from '../../api';
import DetailPresenter from './DetailPresenter';

const DetailContainer = (props) => {
    
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");
    
    const setDetail = async () => {

        const {match: {params:{naver_code}},
        history:{push}}        
        = props;                
        let result = null; 
        try {
          ({data: {result}}= await movieApi.getMovieSynopsys(naver_code));
          console.log(result);
        //await movieApi.getFavoriteDetail();
        } catch (error) {
            setError({error:error});
        }finally{
            setLoading(false);
            setResult(result);            
        }
    };
    useEffect(()=>{            
        setDetail();
    }, []);

    const _handleonClick = async (_id, like) => {
        let oid = _id;
        console.log(oid);
        try {
            if (like ) {
                ({data:{result:like}}= await movieApi.unregister(oid)); 
            }else{
                ({data:{result:like}}= await movieApi.register(oid));
            } 
            
        } catch (error) {
            setError({error});
        }finally{
            setLoading(false);
        }        
    }
    
    return (<DetailPresenter 
            result={result}
            error={error}
            loading={loading}
            _handleonClick = {_handleonClick}
        />);

}

export default DetailContainer;