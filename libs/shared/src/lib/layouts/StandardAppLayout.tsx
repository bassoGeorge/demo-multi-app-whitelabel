import React from "react";
import { AppBar, Box, Container, Link as MuiLink, Toolbar, Typography } from "@mui/material";
import Link from 'next/link';


export function StandardAppLayout({ children }: React.PropsWithChildren) {
  // A standard material ui layout with a header, sidebar, and main content area
  // using react material ui components
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Link href='/'>
            Home
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ px: 2, py: 5, flexGrow: 1 }}
      >
        {children}
      </Box>

      <Container component="footer" sx={{ color: 'white', backgroundColor: 'black', pb: 8, pt: 3 }} maxWidth={false}>
        <Typography variant="body2">
          Hey there
        </Typography>
      </Container>
    </Box>
  );
}