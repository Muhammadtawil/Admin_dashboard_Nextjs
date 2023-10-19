'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { i18n } from '../../../i18n.config'


export default function LocaleSwitcher() {

  const router = useRouter();

  const handleLanguageChange = (newLanguage: string) => {
  
    localStorage.setItem('selectedLanguage', newLanguage);
  
    // Update the route to include the new language
    router.push(redirectedPathName(newLanguage));
  };
  const pathName = usePathname();

  const redirectedPathName = (locale: any) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;

    return segments.join('/');
  };

  return (
    <ul className='flex gap-x-3'>
      {i18n.locales.map(locale => (
        <li key={locale}>
          <button
            onClick={() => handleLanguageChange(locale)}
            className='rounded-md border bg-black px-3 py-2 text-white'
          >
            {locale}
          </button>
        </li>
      ))}
    </ul>
  );
}
