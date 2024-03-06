import * as React from 'react';
import Container from '@mui/material/Container';

export default function StyledContainer({children,darkMode}) {
  return (
    <Container style={{
        boxShadow: darkMode ? '0 4px 8px 0 #626363, 0 6px 20px 0 #acadad' : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        marginBlock: "65px",
        height: "100vh",
        padding: "20px",
        background: darkMode ? 'black' : 'white',
        color: darkMode ? '#d1d1d1' : 'black'
        }}>
        {children}
    </Container>
  );
};
