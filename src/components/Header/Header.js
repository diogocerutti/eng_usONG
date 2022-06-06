import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
//import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
//import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuIcon from '@mui/icons-material/Menu';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const drawerWidth = 240;

/*
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
*/

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Header = () => {
  /*const theme = useTheme();*/
  const [open, setOpen] = React.useState(false);
  const [openPop, setOpenPop] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpenPop((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenPop(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenPop(false);
    } else if (event.key === 'Escape') {
      setOpenPop(false);
    }
  }

  const prevOpen = React.useRef(openPop);
  React.useEffect(() => {
    if (prevOpen.current === true && openPop === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openPop;
  }, [openPop]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: 'green'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{color: "white", fontSize: "40px"}}/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ONG Amigos dos Animais
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'green'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>            
            <IconButton onClick={handleDrawerClose}>
                <MenuIcon sx={{fontSize: "40px", color: "white"}}/>
            {/*theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />*/}
            </IconButton>        
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Cadastros', 'Relatórios' ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{marginBottom: "40px", color: "white"}}>
              {index === 0 && 
               <>
                  <ListItemButton onClick={(e) => {e.preventDefault(); window.location.href='/';}}>
                    <ListItemIcon>
                      <HomeIcon style={{fontSize: "40px", color: "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
               </>
              }
              {index === 1 && 
                <>
                  <ListItemButton onClick={handleToggle} ref={anchorRef} aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined} aria-haspopup="true">
                    <ListItemIcon>
                      <NoteAltIcon style={{fontSize: "40px", color: "white"}}/>
                    </ListItemIcon>                    
                    <ListItemText primary={text} />
                  </ListItemButton>
                </>
              }
              {index === 2 && 
                <>
                  <ListItemButton onClick={(e) => {e.preventDefault(); window.location.href='#';}}>
                    <ListItemIcon>
                      <AssignmentIcon style={{fontSize: "40px", color: "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </>
              }
                <Popper
                  open={openPop}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'left top' : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={(e) => {e.preventDefault(); window.location.href='userregister';}}>Cadastro de Usuário</MenuItem>
                          <MenuItem onClick={(e) => {e.preventDefault(); window.location.href='attendanceregister';}}>Cadastro de Atendimento</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>              
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/*
      <Main open={open}>
        <DrawerHeader />
        
      </Main>
      */}      
    </Box>
  );
}

export default Header