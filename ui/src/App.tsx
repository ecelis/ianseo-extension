import React from 'react';
import Button from '@mui/material/Button';
import { createDockerDesktopClient } from '@docker/extension-api-client';
import { Stack, TextField, Typography } from '@mui/material';

// Note: This line relies on Docker Desktop's presence as a host application.
// If you're running this React app in a browser, it won't work properly.
const client = createDockerDesktopClient();

function useDockerDesktopClient() {
  return client;
}

export function App() {
  const [response, setResponse] = React.useState<string>();
  const ddClient = useDockerDesktopClient();

  return (
    <>
      <Typography variant="h3">Arqueria Desktop Extension</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        Ianseo archery tournaments management software in the desktop.
        This is a wrapper to run easily the software cross-platform, the
        project is not officially related to Ianseo.
      </Typography>
    </>
  );
}
