import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Projects from './Projects';
import WorkingExperience from './Works';
import web_development_animation from '../../assets/animations/web_development.json';
import Lottie from 'lottie-react';
import { Grid } from '@mui/material';
import { useAtomValue } from 'jotai';
import { languageAtom } from '../../atoms/primitive.atom';
import { getCurrentLanguageText } from '../../utils/get-current-language-text';
import { NAV_BAR } from '../../constants/navbar-items';
import { motion } from 'framer-motion';
import pokeAnimation from '../../assets/animations/poke1.json'

export default function Home() {
  const language = useAtomValue(languageAtom);

  const TEXT_1 = getCurrentLanguageText(
    language,
    `
🚀 Hi, I'm Jiaqing Zhang, a PhD student at the University of Florida.`,
    `
🚀 你好，我是张嘉庆，佛罗里达大学的PhD学生`
  ).split(' ');

  const TEXT_2 = getCurrentLanguageText(
    language,
    `🎓 My research interest is AI in Healthcare.`,
    `🎓 我的研究兴趣是AI在医疗健康领域的应用。`
  ).split(' ');

  const TEXT_3 = getCurrentLanguageText(
    language,
    `🎉 I am a huge fan of Pokemon.`,
    `🎉 太喜欢宝可梦了。`
  ).split(' ');

  return (
    <motion.div
      className='container'
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: '0' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Grid container className='my-5' justifyContent={'center'} gap={5}>
        <Grid item md={4}>
          <h2 className='text-center fw-bold'>
            {getCurrentLanguageText(
              language,
              'AIer in Healthcare',
              '医疗健康领域的炼丹师'
            )}
          </h2>
          <p className='fs-5 text-secondary'>
            {TEXT_1.map((el, i) => (
              <motion.span
                className='fs-5 text-secondary'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: i / 10 }}
              >
                {el}{' '}
              </motion.span>
            ))}
          </p>
          <p className='fs-5 text-secondary'>
            {TEXT_2.map((el, i) => (
              <motion.span
                className='fs-5 text-secondary'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: i / 10 }}
              >
                {el}{' '}
              </motion.span>
            ))}
          </p>
          <p className='fs-5 text-secondary'>
            {TEXT_3.map((el, i) => (
              <motion.span
                className='fs-5 text-secondary'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: i / 10 }}
              >
                {el}{' '}
              </motion.span>
            ))}
          </p>
        </Grid>
        <Grid item md={5}>
          <div className='mx'>
            <Lottie
              className='img-fluid'
              animationData={pokeAnimation}
            ></Lottie>
          </div>
        </Grid>
      </Grid>

      {/* <div className='w-50'><Lottie animationData={pokeAnimation}></Lottie></div> */}

      <div className='d-flex justify-content-center mb-5 mt-2'>
        <GitHubIcon
          className='mx-3'
          role='button'
          color='action'
          fontSize='large'
          onClick={() => window.open('https://github.com/danielqingz')}
        ></GitHubIcon>
        <EmailIcon
          className='mx-3'
          role='button'
          fontSize='large'
          onClick={() => window.open('mailto:danielqing99@gmail.com')}
        ></EmailIcon>
        <LinkedInIcon
          className='mx-3'
          role='button'
          fontSize='large'
          onClick={() =>
            window.open('https://www.linkedin.com/in/jiaqing-zhang-danielqing/')
          }
        ></LinkedInIcon>
      </div>
      <h2 className='text-center'>
        {getCurrentLanguageText(
          language,
          NAV_BAR.workingExperience.title,
          NAV_BAR.workingExperience.titleChinese
        )}
      </h2>
      <WorkingExperience hideHeader={true} />
      <h2 className='text-center'>
        {getCurrentLanguageText(
          language,
          NAV_BAR.projects.title,
          NAV_BAR.projects.titleChinese
        )}
      </h2>
      <Projects hideHeader={true}></Projects>
    </motion.div>
  );
}
