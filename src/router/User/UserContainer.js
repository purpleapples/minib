import React from 'react';
import UserPresenter from './UserPresenter';
import {movieApi} from '../../api';

class UserContainer extends React.Component {

    constructor(props){
        super(props);        
    }
    
    state = {
        myfavoriteList:null,
        error:null,
        loading:true
    };
    
    async componentDidMount(){
        try {
            
            const {
                data: {results: myfavoriteList},
    
            } = await movieApi.getFavorite();                         
            this.setState({myfavoriteList});
        }catch (error) {
            this.setState({error});
        }finally{
            this.setState({loading:false});
        }
    };

    render(){        
        const {myfavoriteList, error, loading} = this.state;        
        return (<UserPresenter 
                    myfavoriteList={myfavoriteList}
                    error={error}
                    loading={loading}
                />       
                );
    };

};

export default UserContainer;