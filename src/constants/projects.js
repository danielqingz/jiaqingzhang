import {
  UUCircle1Image,
  UUCircle2Image,
  UUCircle3Image,
  UUCircle4Image,
  UUCircle5Image,
  UUCircle6Image,
  UUCircle7Image,
  pokemonGPTImage,
} from '../assets/images/images';
import { techStack } from './tech-stack';

export const projects = [
  {
    title: 'Intellegent ICU',
    time: 'August 2022 - Present',
    description: [
      `Collect and analyze data from various sensors and medical devices to monitor the patient's condition`,
      `Build deep learning models to predict the patient's condition and provide the best treatment plan`,
    ],
    title_chinese: '智能重症监护室',
    time_chinese: '2022年8月 - 至今',
    description_chinese: [
      `收集并分析来自各种传感器和医疗设备的数据，以监测患者的病情`,
      `建立深度学习模型来预测患者的病情并提供最佳治疗方案`,
    ],
    techStack: [
      techStack.pytorch,
      techStack.sql,
      techStack.python,
    ],
  },
  {
    title: 'PokémonGPT',
    time: 'May 2024 - Present',
    description: [
      `Use RAG (Retrieval-Augmented Generation) technique to update ChatGPT 4o  knowledge`,
    ],
    title_chinese: '宝可梦GPT',
    time_chinese: '2024年5月 - 至今',
    description_chinese: [
      `使用 RAG（检索增强生成）技术更新 ChatGPT 4o 描述和知识`,
    ],
    techStack: [
      techStack.chatGpt,
      techStack.python,
    ],
    images: [
      pokemonGPTImage,
    ],
  },
  {
    title: 'Life and daily service web application',
    time: 'January 2022 - January 2023',
    description: [
      `Managed and guided a team of 10 members to develop a life and daily service online platform that allows users to share recent activities, organize small gatherings, and respond to others' invitations`,
      `Implemented cutting-edge solutions to enhance the functionality and user experience of the mini-program`,
      `Delivered a fully functional mini-program that met all project requirements and exceeded user expectations`,
    ],
    title_chinese: '留学动态社区小程序',
    time_chinese: '2022年1月 - 2023年1月',
    description_chinese: [
      `管理并指导一个由10名成员组成的团队开发了一个生活和日常服务在线平台，允许用户分享近期活动、组织小型聚会并响应他人的邀请`,
      `实施了最前沿的解决方案，以增强小程序的功能和用户体验`,
      `交付了一个完全符合项目要求并超出用户期望的全功能小程序`,
    ],
    techStack: [
      techStack.wechat,
      techStack.js,
      techStack.react,
      techStack.sql,
      techStack.figma,
      techStack.cPlusPlus,
    ],
    images: [
      UUCircle1Image,
      UUCircle6Image,
      UUCircle2Image,
      UUCircle7Image,
      UUCircle3Image,
      UUCircle5Image,
      UUCircle4Image,
    ],
  },
];
