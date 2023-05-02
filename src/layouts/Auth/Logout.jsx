import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_AUTH_RESET } from '../../reducers/modules/Auth/mutation';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch({type:SET_AUTH_RESET})
     localStorage.clear();
        navigate("/");

    }, [""])
    
  return null
}

export default Logout