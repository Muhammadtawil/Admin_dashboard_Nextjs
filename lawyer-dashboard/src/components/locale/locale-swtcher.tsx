'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button, Menu, MenuItem, Box, ListItemIcon, ListItemText } from '@mui/material'; // Import Box for styling
import { useState } from 'react';
import { i18n } from '../../../i18n.config';

export default function LocaleSwitcher() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.defaultLocale);

  const handleMenu = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLanguage:any) => {
    localStorage.setItem('selectedLanguage', newLanguage);
    setSelectedLanguage(newLanguage);
    router.push(redirectedPathName(newLanguage));
    setAnchorEl(null); // Close the menu after selecting a language
  };

  const pathName = usePathname();

  const redirectedPathName = (locale:any) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div >
    <Button
      aria-controls="language-menu"
      aria-haspopup="true"
      onClick={handleMenu}
      color="inherit"
        variant="outlined"
        
      // sx={{   width: '1%', height: '36px',}}
    >
      {selectedLanguage === 'ar' ? (
        <img src='/images/lb.svg' alt="LB" style={{ borderRadius: '50%', width: '32px', height: '32px' }} />
      ) : (
        <img src='/images/um.svg' alt="UM" style={{ borderRadius: '50%', width: '32px', height: '32px' }} />
      )}
    </Button>
    <Menu
      id="language-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        onClick: (event) => event.stopPropagation(),
      }}
    >
      {i18n.locales.map((locale) => (
        <MenuItem key={locale} onClick={() => handleLanguageChange(locale)}>
          <ListItemIcon>
            {locale === 'ar' ? (
              <img src='/images/lb.svg' alt="LB" style={{ borderRadius: '50%', width: '32px', height: '32px' }} />
            ) : (
              <img src='/images/um.svg' alt="UM" style={{ borderRadius: '50%', width: '32px', height: '32px' }} />
            )}
          </ListItemIcon>
          <ListItemText primary={locale} />
        </MenuItem>
      ))}
    </Menu>
  </div>
  );
}
