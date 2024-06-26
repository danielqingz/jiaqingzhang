import { Grid } from '@mui/material';
import TechStackIcon from '../common/TechStackIcon';
import { workingExperience } from '../../constants/work-items';
import { getCurrentLanguageText } from '../../utils/get-current-language-text';
import { useAtomValue } from 'jotai';
import { languageAtom } from '../../atoms/primitive.atom';
import { LANGUAGE, NAV_BAR } from '../../constants/navbar-items';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function WorkingExperience({ hideHeader = false }) {
  const language = useAtomValue(languageAtom);
  return (
    <motion.div
      className='container'
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: '0' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {!hideHeader && (
        <>
          <h1 className='text-left w-50 mt-5'>
            Experience
          </h1>
          <p className='fs-5 text-secondary'>
          </p>
        </>
      )}
      <Grid container className='justify-content-center'>
        {workingExperience.map((experience, index) => {
          if (hideHeader && index >= 1)
            return <div key={`work-${index}`}></div>;
          return (
            <Grid
              item
              md={hideHeader ? 10 : 5}
              className='box shadow p-3 rounded m-4'
              key={`work-${index}`}
            >
              <Link
                to={`${NAV_BAR.workingExperience.path}/${experience.employer}`}
                className='text-decoration-none text-black'
                state={experience}
              >
                <div>
                  {experience.techStack.map((tech) => (
                    <TechStackIcon key={`work-tech-${tech}`} stack={tech} />
                  ))}
                </div>
                <h1 className='fs-3 fw-bold'>
                  {getCurrentLanguageText(
                    language,
                    experience.employer,
                    experience.employer_chinese
                  )}
                </h1>
                <h2 className='fs-4'>
                  {getCurrentLanguageText(
                    language,
                    experience.position,
                    experience.position_chinese
                  )}
                </h2>
                <h3 className='fs-5'>
                  {getCurrentLanguageText(
                    language,
                    experience.location,
                    experience.location_chinese
                  )}
                </h3>
                <div>
                  {getCurrentLanguageText(
                    language,
                    experience.time,
                    experience.time_chinese
                  )}
                </div>
                <ul>
                  {(language === LANGUAGE.chinese.value
                    ? experience.description_chinese
                    : experience.description
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
        {workingExperience.length % 2 !== 0 && (
          <Grid item md={5} className='p-3 rounded m-4' />
        )}
      </Grid>
    </motion.div>
  );
}
