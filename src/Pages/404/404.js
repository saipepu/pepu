import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <>
    Not Found
    </>
  )
}
export default NotFound;