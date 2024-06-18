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
      'Leveraged computer vision technique on noninvasive depth imaging to monitor ICU visitations and patient mobility',
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
      'Developed Intelligent Intensive Care Unit (I2CU) system leveraging AI to enhance patient monitoring through multi-modal data collection, including depth and RGB images, accelerometry, electromyography, sound pressure, light levels, and EHR data',
    ],
    url: 'https://arxiv.org/abs/2303.06252'
  },
  {
    publisher: 'Arxiv',
    time: 'March 2023',
    authors: [
      'Sabyasachi Bandyopadhyay', 
      'Ahna Cecil', 
      'Jessica Sena', 
      'Andrea Davidson', 
      'Ziyuan Guan', 
      'Subhash Nerella', 
      'Jiaqing Zhang', 
      'Kia Khezeli', 
      'Brooke Armfield', 
      'Azra Bihorac', 
      'Parisa Rashidi'
  ],
    title: 'Predicting risk of delirium from ambient noise and light information in the ICU',
    description: [
      'Proposed a deep-learning model predicting ICU delirium using ambient light and noise data from 102 patients',
      'Achieved high performance on long-term predicting (28 days after data collection)',
    ],
    url: 'https://arxiv.org/abs/2303.06253'
  },
  {
    publisher: 'Research Square',
    time: 'October 2023',
    authors: [
      'Jiaqing Zhang', 
      'Sabyasachi Bandyopadhyay', 
      'Faith Kimmet', 
      'Jack Wittmayer', 
      'Kia Khezeli', 
      'David J Libon', 
      'Catherine C Price', 
      'Parisa Rashidi'
  ],
    title: 'FaIRClocks: Fair and Interpretable Representation of the Clock Drawing Test for mitigating classifier bias against lower educational groups',
    description: [
      'Proposed FaIRClocks, a fair and interpretable clock drawing test model, mitigates educational bias in cognitive assessments',
      'Used embeddings from a Relevance Factor Variational Autoencoder (RF-VAE) and fairness metrics, Fairclocks predicts cognitive scores accurately for individuals with varying education levels, ensuring balanced identification of attention and memory deficits',
      'Deployed fairness metrics to remove bias of cognitive assessment models against lower educational groups',
    ],
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10602062/'
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
      'Provided a compelted review of how Transformer architecture has been adopted to analyze various forms of healthcare data, including clinical NLP, medical imaging, structured Electronic Health Records (EHR), social media, bio-physiological signals, biomolecular sequences',
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
      'Integrated wrist-worn accelerometer data with clinical EHR data to enhance acuity assessments in ICU patients using deep learning models',
    ],
    url: 'https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2024.1386728/full'
  },
];
