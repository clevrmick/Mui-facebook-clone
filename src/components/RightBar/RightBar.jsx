import React from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
const RightBar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/10406699/pexels-photo-10406699.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/10406699/pexels-photo-10406699.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/10406699/pexels-photo-10406699.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/10406699/pexels-photo-10406699.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/10406699/pexels-photo-10406699.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/10406699/pexels-photo-10406699.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default RightBar;
