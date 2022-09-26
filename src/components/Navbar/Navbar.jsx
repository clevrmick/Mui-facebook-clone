import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { borderRadius } from '@mui/system';
import { Facebook, Mail, Notifications } from '@mui/icons-material';
import { useState } from 'react';
// import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {
  const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });

  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0px 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }));

  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Facebook
        </Typography>
        <Facebook sx={{ display: { xs: 'block', fontSize: 35, sm: 'none' } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={e => setOpen(prevState => !prevState)}
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/13570394/pexels-photo-13570394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </Icons>
        <UserBox>
          <Avatar
            onClick={e => setOpen(prevState => !prevState)}
            src="https://images.pexels.com/photos/13570394/pexels-photo-13570394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Typography variant="span">John Doe</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
