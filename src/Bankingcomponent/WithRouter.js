import React from 'react';
import {useParams,useNavigate} from 'react-router-dom';

const withRouter = WrappedComponent => props => {
    const params = useParams();
    const navigation = useNavigate();
    return (
        <WrappedComponent
        {...props}
        params = {params}  navigation={navigation}
        />
        );
    };
export default withRouter;