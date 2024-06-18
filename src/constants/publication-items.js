import { projects } from './projects';
import { techStack } from './tech-stack';

export const CONFERENCE = [
  {
    publisher: 'Arxiv',
    time: 'March 2024',
    authors: [
      'Scott Siegel', 
      'Jiaqing Zhang', 
      'Sabyasachi Bandyopadhyay', 
      'Subhash Nerella', 
      'Brandon Silva', 
      'Tezcan Baslanti', 
      'Azra Bihorac', 
      'Parisa Rashidi'
  ],
    title: 'Leveraging Computer Vision in the Intensive Care Unit (ICU) for Examining Visitation and Mobility',
    description: [
      'Leveraging noninvasive depth imaging, this study uses computer vision to monitor ICU visitations and patient mobility, linking increased visitations with deteriorating acuity and delirium, while decreased visitations correlate with lower pain levels.',
      'This approach demonstrates the feasibility of enhancing patient monitoring and reducing healthcare provider workload.',
    ],
    url: 'https://arxiv.org/abs/2403.06322'
  },
  {
    publisher: 'Arxiv',
    time: 'March 2023',
    authors: [
      'Subhash Nerella', 
      'Ziyuan Guan', 
      'Scott Siegel', 
      'Jiaqing Zhang', 
      'Kia Khezeli', 
      'Azra Bihorac', 
      'Parisa Rashidi'
  ],
    title: 'AI-Enhanced Intensive Care Unit: Revolutionizing Patient Care with Pervasive Sensing',
    description: [
      'The Intelligent Intensive Care Unit (I2CU) system leverages AI to enhance patient monitoring through multi-modal data collection, including depth and RGB images, accelerometry, electromyography, sound pressure, and light levels',
      'This comprehensive approach aims to provide continuous, granular assessments of acuity, delirium risk, pain, and mobility, reducing healthcare provider workload and improving care quality',
    ],
    url: 'https://arxiv.org/abs/2303.06252'
  },
];


export const JOURNAL = [
  {
    publisher: 'Artificial Intelligence in Medicine',
    time: 'June 2024',
    authors: [
      'Subhash Nerella',
      'Sabyasachi Bandyopadhyay',
      'Jiaqing Zhang',
      'Miguel Contreras',
      'Scott Siegel',
      'Aysegul Bumin',
      'Brandon Silva',
      'Jessica Sena',
      'Benjamin Shickel',
      'Azra Bihorac',
      'Kia Khezeli',
      'Parisa Rashidi'
    ],
    title: 'Transformers and large language models in healthcare: A review',
    description: [
      'A compelted review of how Transformer architecture has been adopted to analyze various forms of healthcare data, including clinical NLP, medical imaging, structured Electronic Health Records (EHR), social media, bio-physiological signals, biomolecular sequences',
    ],
    url: 'https://www.sciencedirect.com/science/article/pii/S0933365724001428',
  },
  {
    publisher: 'Frontiers in Neurology',
    time: 'May 2024',
    authors: [
      'Jessica Sena',
      'Mohammad Tahsin Mostafiz',
      'Jiaqing Zhang',
      'Andrea E Davidson',
      'Sabyasachi Bandyopadhyay',
      'Subhash Nerella',
      'Yuanfang Ren',
      'Tezcan Ozrazgat-Baslanti',
      'Benjamin Shickel',
      'Tyler Loftus',
      'William Robson Schwartz',
      'Azra Bihorac',
      'Parisa Rashidi'
    ]
    ,
    title: 'Wearable sensors in patient acuity assessment in critical care',
    description: [
      'Integrating wrist-worn accelerometer data with clinical EHR data, this study demonstrates enhanced acuity assessments in ICU patients using deep learning models.',
      'Our models outperform traditional SOFA scores in predicting patient stability, showcasing significant improvements in precision, sensitivity, and overall predictive performance, offering a nuanced understanding of patient physiology and functional status.',
    ],
    url: 'https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2024.1386728/full'
  },
];
