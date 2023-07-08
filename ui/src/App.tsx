import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
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
        {`The extension allows Ianseo archery tournaments management software
        to run in a docker desktop runtime environment.

        The goal is to present a simple and unified way to run the software
        cross-platform.

        Go ahead and endjoy the shooting! 🎯 Your Ianseo is at ➡️ ${<Link href="http://localhost:8080">Ianseo</Link>} ⬅️

        This work builds on top of other people work, the open source community
        but specially the ${<Link href="https://ianseo.net">Ianseo Team</Link>}

        ${<Link href="https://ianseo.net/Releases.php">Ianseoo Documentation</Link>}

        Arqueria desktop extension ${<Link href="https://ianseo.arqueria.pro">website</Link>}`}
      </Typography>
    </>
  );
}
