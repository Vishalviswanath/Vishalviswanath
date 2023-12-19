import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/Vishalviswanath/repos',
          {
            headers: {
              Authorization:
                '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',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRepos();
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        border: '5px solid black',
        borderRadius: '20px',
        marginTop: '15px',
        marginLeft: '25px',
        marginRight: '25px',
        padding: '30px',
      }}
    >
      <Typography variant='h4'>Git Repositories</Typography>
      <Box>
        <List>
          {repos.map((repo) => (
            <ListItem key={repo.id}>
              <ListItemIcon sx={{ color: 'white' }}>
                <FolderIcon />
              </ListItemIcon>
              <Box sx={{ display: 'flex' }}>
                <ListItemText>{repo.name}</ListItemText>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Projects;
