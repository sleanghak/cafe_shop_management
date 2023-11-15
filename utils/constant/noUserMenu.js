import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import WineBarIcon from '@mui/icons-material/WineBar';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'; //course
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'; //about
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded'; //contact

const navItems = [
  // {
  //   label: 'Home',
  //   icon: <HomeRoundedIcon />,
  //   path: '/home',
  // },

  // {
  //   label: 'Contact',
  //   icon: <RecentActorsRoundedIcon />,
  //   path: '/contact',
  // },
];

// No user
const noUserItems = [
  {
    label: 'Cafe Shop',
    icon: <LocalCafeIcon />,
    path: '/',
  },

  {
    label: 'Drink',
    icon: <WineBarIcon />,
    path: '/',
  },
  {
    label: "Student's Project",
    icon: <SchoolRoundedIcon />,
    path: '/',
  },
  {
    label: 'About',
    icon: <InfoRoundedIcon />,
    path: '/',
  },
  {
    label: 'Contact',
    icon: <RecentActorsRoundedIcon />,
    path: '/',
  },
  {
    label: 'Contact',
    icon: <RecentActorsRoundedIcon />,
    path: '/',
  },
];
export {
  navItems,
  noUserItems,
};
