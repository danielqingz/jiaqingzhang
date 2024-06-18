import { Link, useLocation } from 'react-router-dom';
import { LANGUAGE, NAV_BAR } from '../../constants/navbar-items';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useAtom } from 'jotai';
import { languageAtom } from '../../atoms/primitive.atom';
import { getCurrentLanguageText } from '../../utils/get-current-language-text';
import { chinaImage, usImage } from '../../assets/images/images';
import getHeaderTitleByPath from '../../utils/get-header-title-by-path';

export default function NavBar() {
  const location = useLocation();
  const path = location.pathname;
  const [language, setLanguage] = useAtom(languageAtom);

  useEffect(() => {
    document.title = `Jiaqing | ${getHeaderTitleByPath(path, language)}`;
  }, [language, path]);

  return (
    <div className='navbar justify-content-center mx-2 px-2'>
      <div className='d-flex shadow rounded-pill m-2 p-2'>
        <Grid container justifyContent={'center'}>
          {Object.values(NAV_BAR).map((navItem) => (
            <Link
              key={`nav-bar-${navItem.title}`}
              to={navItem.path}
              className={'nav justify-content-center'}
              style={
                path === navItem.path || path.startsWith(navItem.path + '/')
                  ? { color: '#14b8a6' }
                  : {}
              }
            >
              {getCurrentLanguageText(
                language,
                navItem.title,
                navItem.titleChinese
              )}
            </Link>
          ))}
        </Grid>
      </div>
    </div>
  );
}
