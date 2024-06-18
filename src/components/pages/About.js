import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { UFImage, aboutImage, aquinasImage } from '../../assets/images/images';
import { educationExperience } from '../../constants/education-items';
import { Grid } from '@mui/material';
import { getCurrentLanguageText } from '../../utils/get-current-language-text';
import { useAtomValue } from 'jotai';
import { languageAtom } from '../../atoms/primitive.atom';
import { motion } from 'framer-motion';

export default function About() {
  const language = useAtomValue(languageAtom);

  const TEXT_1 = getCurrentLanguageText(
    language,
    `TBD`,
    `待修订`
  ).split(' ');

  return (
    <motion.div
      className='container'
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: '0' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Grid container className='mt-5 justify-content-center' gap={5}>
        <Grid item md={4}>
          <h2 className='text-center fw-bold'>
            {getCurrentLanguageText(
              language,
              `I am Jiaqing Zhang.`,
              `我是张嘉庆`
            )}
          </h2>
          <p className='fs-5 text-secondary'>
            {TEXT_1.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: i / 20 }}
              >
                {el}{' '}
              </motion.span>
            ))}
          </p>
        </Grid>
        <Grid item md={4}>
          <img className='img-fluid' src={aboutImage} alt='about me' />
          <div className='d-flex justify-content-center'>
            <div
              style={{ cursor: 'pointer' }}
              className='d-flex justify-content-center my-2'
              onClick={() => window.open('https://github.com/jimmysoccer')}
            >
              <GitHubIcon className='me-3'></GitHubIcon>
              <div className='language'>
                {getCurrentLanguageText(
                  language,
                  'Follow on Github',
                  '关注我的Github'
                )}
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div
              style={{ cursor: 'pointer' }}
              className='d-flex justify-content-center my-2'
              onClick={() =>
                window.open('https://www.linkedin.com/in/jimmysoccer/')
              }
            >
              <LinkedInIcon className='me-3'></LinkedInIcon>
              <div className='language'>
                {getCurrentLanguageText(
                  language,
                  'Follow on LinkedIn',
                  '关注我的领英'
                )}
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div
              style={{ cursor: 'pointer' }}
              className='d-flex justify-content-center my-2'
              onClick={() => window.open('mailto:jimmysoccer0927@gmail.com')}
            >
              <EmailIcon className='me-3'></EmailIcon>
              <div className='language'>
                {getCurrentLanguageText(language, 'Email', '电子邮箱')}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        {educationExperience.map((exp) => (
          <Grid
            item
            md={12}
            key={`about-education-${exp.school}`}
            className='text-center my-5'
          >
            <div className='d-flex justify-content-center'>
              <img
                src={
                  exp.school === 'University of Florida'
                    ? UFImage
                    : aquinasImage
                }
                alt='school-logo'
                className='img-fluid'
              ></img>
            </div>
            <h3 className='mt-2 mb-0 fs-5'>
              {getCurrentLanguageText(
                language,
                exp.school + ', ' + exp.location + ' --- ' + exp.degree,
                exp.school_chinese +
                  ', ' +
                  exp.location_chinese +
                  ' --- ' +
                  exp.degree_chinese
              )}
            </h3>
            <div className='fs-4'>
              {getCurrentLanguageText(language, exp.time, exp.time_chinese)}
            </div>
            <div className='fs-5 text-secondary'>
              {getCurrentLanguageText(
                language,
                'Main courses: ' + exp.courses.map((des) => des),
                '主要课程: ' + exp.courses_chinese.map((des) => des)
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}
