import { Box } from '@mui/material';
import React from 'react';
import Post from '../Post/Post';

const Feed = () => {
  return (
    <Box flex={4}>
      <Post
        title="Why React is Awesome for Developers World Wide"
        subheader="September 14, 19"
        img="https://images.pexels.com/photos/13298639/pexels-photo-13298639.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
      <Post
        title="The Unique Value of Materia ui"
        subheader="October 18, 2021"
        img="https://static01.nyt.com/images/2020/12/14/well/14google-photo/14google-photo-videoSixteenByNineJumbo1600.jpg"
      />
      <Post
        title="Why Re-invent the wheel"
        subheader="Google has made Elegant design possible"
        img="https://res.cloudinary.com/practicaldev/image/fetch/s--g7-BuY4h--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/htmgfgfy1dfg5aq47boc.png"
      />
    </Box>
  );
};

export default Feed;
