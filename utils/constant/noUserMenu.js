"use client";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import WineBarIcon from '@mui/icons-material/WineBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReportIcon from '@mui/icons-material/Report';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

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
    path: '/drink',
  },
  {
    label: "Order",
    icon: <ShoppingCartIcon />,
    path: '/order',
  },
  {
    label: 'Employee',
    icon: <PeopleAltIcon />,
    path: '/employee',
  },
  {
    label: 'Manager',
    icon: <ManageAccountsIcon />,
    path: '/manager',
  },
  {
    label: 'Report',
    icon: <ReportIcon />,
    path: '/report',
  },
];
export {
  navItems,
  noUserItems,
};
