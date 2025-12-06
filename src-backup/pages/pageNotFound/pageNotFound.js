import * as React from 'react';
import StyledContainer from '../../components/styled-container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
const navigate = useNavigate()
  const handleClick = () => {
        navigate('/blog');
        window.location.reload();
  };
  return (
    <StyledContainer>
      <h1> The page you are looking for does not exist</h1>
      <Button variant="outlined" color='secondary' onClick={handleClick}>Return to Blog Home</Button>
    </StyledContainer>
  );
}
