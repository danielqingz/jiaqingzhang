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
    title: 'Life and daily service web application',
    time: 'January 2022 - January 2023',
    description: [
      `Worked with 10 members of the creative team to develop a life and daily service online platform that allows the users to post recent activities, organize a small group of party and respond to other's
    invitations`,
      `Mainly responsible for the front-end development by using React framework, Redux, and JavaScript`,
      `Embedded an instant chatting API in the application that enables users to exchange recent activities'
    information`,
      `Helped to build and manage the backend that controls the application's database and interfaces by
    using C++`,
    ],
    title_chinese: '留学动态社区小程序',
    time_chinese: '2022年1月 - 2023年1月',
    description_chinese: [
      `与创意团队的10名成员合作开发了一个生活和日常服务的在线平台,
       允许用户发布最近的活动, 
      组织小型聚会并回复其他人的邀请`,
      '主要负责使用React框架、Redux和JavaScript进行前端开发',
      '在应用程序中嵌入了即时聊天API,使用户能够交换最近活动的信息',
      '通过使用C++帮助构建和管理控制应用程序数据库和接口的后端',
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
  {
    title: 'PokémonGPT',
    time: 'May 2024 - Present',
    description: [
      `Use RAG (Retrieval-Augmented Generation) technique to update ChatGPT 4o descriptions and knowledge`,
    ],
    title_chinese: '宝可梦GPT',
    time_chinese: '2024年5月 - 至今',
    description_chinese: [
      `使用 RAG（检索增强生成）技术更新 ChatGPT 4o 描述和知识`,
    ],
    techStack: [
      techStack.sql,
      techStack.python,
    ],
    images: [
      pokemonGPTImage,
    ],
  },
];
