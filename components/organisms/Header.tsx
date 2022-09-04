import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, Box, InputBase, LinearProgress, styled } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';
import { theme } from '@/lib/styles/theme';


const Search = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

type Props = {
  isLoading?: boolean;
}
export const Header: React.FC<Props> = ({ isLoading }) => {
  const [name, setName] = React.useState("");
  const router = useRouter();

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (name) {
      router.push(`/stations/${name}`);
    }
  }

  return (
    <AppBar position="static">
      { isLoading && (
        <Box sx={{ width: '100%', position: 'absolute' }}>
          <LinearProgress />
        </Box>
      )}
      <Toolbar>
        <Typography component="h1" variant="h6" sx={{ flexGrow: 1, mr: 2 }}>
          <Link href="/" passHref><MuiLink color='#fff' underline="none">nStation</MuiLink></Link>
        </Typography>
        <Search onSubmit={handleSubmit}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="駅検索"
            inputProps={{ 'aria-label': 'search' }}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}
