import * as React from 'react';
import Container from '@mui/material/Container';

export default function StyledContainer({children}) {
  return (
    <Container style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        marginBlock: "80px",
        height: "100vh",
        padding: "20px"
        }}>
        {children}
    </Container>
  );
};
