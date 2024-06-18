import { useState } from 'react';
import { getCurrentLanguageText } from '../../utils/get-current-language-text';
import { useAtom, useAtomValue } from 'jotai';
import { languageAtom, loggedInAtom } from '../../atoms/primitive.atom';
import DataTable from '../common/DataTable';
import { Button, Grid, TextField } from '@mui/material';
import { fetchDevRecords } from '../../services/fetch-dev-records';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LANGUAGE, NAV_BAR } from '../../constants/navbar-items';
import { CONFERENCE, JOURNAL, PUBLICATION } from '../../constants/publication-items';

export default function InnovationHub() {
  const language = useAtomValue(languageAtom);

  return (
    <motion.div
      className='container'
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: '0' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {(
        <>
          <h1 className='text-left w-50 mt-5'>
            ar<math xmlns="http://www.w3.org/1998/Math/MathML">
              <mi>&#x3C7;</mi>
            </math>iv / Conference
          </h1>
        </>
      )}
      <Grid container className='justify-content-center'>
        {CONFERENCE.map((publication, index) => {
          return (
            <Grid
              item
              md={12}
              className='box shadow p-3 rounded m-4'
              key={`work-${index}`}
            >
              <Link
                to={publication.url}
                target='_blank'
                className='text-decoration-none text-black'
                state={publication}
              >
                <h1 className='fs-4 text-primary fw-normal'>
                  {publication.title}
                </h1>

                <h3 className='fs-5 fw-normal'>
                  {publication?.authors?.map((author, i) => (
                    <><span className={`${author.includes('Jiaqing Zhang') ? 'fw-bold' : ''}`}>{author}</span>
                      <span>{i === publication?.authors.length - 1 ? '' : ', '}</span></>))}

                </h3>
                <div className='fst-italic mb-2'>
                  {
                    publication.publisher
                  }{', '}
                  {
                    publication.time
                  }
                </div>
                <ul>
                  {(language === LANGUAGE.chinese.value
                    ? publication.description_chinese
                    : publication.description
                  ).map((description) => (
                    <li
                      className='text-secondary'
                      key={`work-exper-des-${description}`}
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <h1 className='text-left w-50'>
        Journal
      </h1>
      <Grid container className='justify-content-center'>
        {JOURNAL.map((publication, index) => {
          return (
            <Grid
              item
              md={12}
              className='box shadow p-3 rounded m-4'
              key={`work-${index}`}
            >
              <Link
                to={publication.url}
                target='_blank'
                className='text-decoration-none text-black'
                state={publication}
              >
                <h1 className='fs-3 fw-normal'>
                  {publication.title}
                </h1>
                <h2 className='fs-4'>

                </h2>
                <h3 className='fs-5 fw-normal'>
                  {publication?.authors?.map((author) => (<span className={`${author === 'Jiaqing Zhang' ? 'fw-bold' : ''}`}>{author + ', '}</span>))}
                </h3>
                <div className='fst-italic mb-2'>
                  {
                    publication.publisher
                  }{', '}
                  {
                    publication.time
                  }
                </div>
                <ul>
                  {(language === LANGUAGE.chinese.value
                    ? publication.description_chinese
                    : publication.description
                  ).map((description) => (
                    <li
                      className='text-secondary'
                      key={`work-exper-des-${description}`}
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </motion.div>
  );
}
