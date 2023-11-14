// components/NewLocaleSwitcher.tsx
import { Button, Menu, MenuItem, Select, FormControl } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { useState } from 'react';
import Image from 'next/image'
import lb from './../../../../public/images/lb.svg'
import um from './../../../../public/images/um.svg'
export default function NewLocaleSwitcher() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onLocaleChange = (e:any) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div>
      <Button
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        variant="outlined"
      >
        {locale === 'en' ? (
          <Image src={um} alt="UM" style={{ borderRadius: '50%', width: '32px', height: '32px' }} />
        ) : (
          <Image src={lb} alt="LB" style={{ borderRadius: '50%', width: '32px', height: '32px' }} />
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
        {['en', 'ar'].map((lang) => (
          <MenuItem key={lang} onClick={() => onLocaleChange({ target: { value: lang } })}>
            {lang === 'ar' ? (
              <Image src={lb} alt="LB" style={{ borderRadius: '50%', width: '32px', height: '32px' }} />
            ) : (
              <Image src={um} alt="UM" style={{ borderRadius: '50%', width: '32px', height: '32px' }} />
            )}
            {t('locale', { locale: lang })}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
