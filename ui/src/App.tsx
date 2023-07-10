import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
  const [ianseoUrl, setIanseoUrl] = React.useState<string>('http://localhost:8080');
  const ddClient = useDockerDesktopClient();
  const copyTextToClipboard = async () => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(ianseoUrl);
    } else {
      return document.execCommand('copy', true, ianseoUrl);
    }
  }

  return (
    <>
      <Typography variant="h3"><img src="arqueria.svg" width="45" height="45" />{' '}
        Arqueria Desktop Extension</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        <p>The extension allows Ianseo archery tournaments management software
        to run in a docker desktop runtime environment. The goal is to present
        a simple and unified way to run the software cross-platform.</p>
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 400, mt: 2, mb: 2 }} >
        <Table sx={{ minWidth: 400, maxWidth: 400}} aria-label="Db settings">
          <TableRow>
      <TableCell>Database host</TableCell><TableCell>ianseodb</TableCell>
          </TableRow>
          <TableRow>
      <TableCell>Database username</TableCell><TableCell>ianseo</TableCell>
          </TableRow>
          <TableRow>
      <TableCell>Database password</TableCell><TableCell>ianseo</TableCell>
          </TableRow>
          <TableRow>
      <TableCell>Database name</TableCell><TableCell>ianseo</TableCell>
          </TableRow>
          <TableRow>
      <TableCell>ADMIN Password</TableCell><TableCell>ianseo</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <Typography variant="body1" sx={{mb: 2 }}>Go ahead and endjoy the shooting! 🎯 Your Ianseo is at
      ➡️ <Link href={ianseoUrl}>{ianseoUrl}</Link>⬅️  <span onClick={copyTextToClipboard}>📋</span> </Typography>
      <img width="400px" src="db.png" alt="Database settings" />
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        <p>It builds on top of other people work, the open source community
        and specially the <Link href="https://ianseo.net">Ianseo Team</Link></p>

        <p><Link href="https://ianseo.net/Releases.php">Ianseo Documentation</Link></p>

        <p>Arqueria desktop extension <Link href="https://ianseo.arqueria.pro">website</Link></p>

      </Typography>
    </>
  );
}
