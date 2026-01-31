// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ksAvinash', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Side Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'MyGala Invites',
          description:
            'Digital invites platform for events like birthdays, weddings, and housewarming. Flutter apps with a fully serverless AWS backend (Lambda, API Gateway, S3, SNS/SQS, Aurora Serverless). ~1K downloads.',
          imageUrl: '',
          link: 'https://mygala.in',
        },
      ],
    },
  },
  seo: {
    title: 'Avinash Kemparaju | Senior Software Engineer',
    description:
      'Senior Software Engineer (Backend) with 8+ years of experience architecting scalable, fault-tolerant systems and leading greenfield development initiatives. Focused on cloud architectures, serverless solutions, and API development, optimizing performance and cloud costs. AWS Certified Solutions Architect – Associate.',
    imageURL: '',
  },
  social: {
    linkedin: 'ksavinash22',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '+91 9880430068',
    email: 'kemparaju.avinash@gmail.com',
  },
  resume: {
    fileUrl: '/Avinash-Kemparaju-Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Backend System Design',
    'Microservices & Serverless Architectures',
    'Event-Driven Architectures',
    'Autoscaling',
    'API Design',
    'AWS (EC2, Lambda, EKS, ECS, RDS, DynamoDB, S3, SQS, SNS, EventBridge, Step Functions)',
    'Firebase (Firestore, Functions, Realtime DB, Cloud Messaging)',
    'Terraform',
    'Pulumi',
    'GitHub Actions',
    'Jenkins',
    'Grafana',
    'Datadog',
    'CloudWatch',
    'PostgreSQL',
    'MySQL',
    'DynamoDB',
    'Redis',
    'Python',
    'Go',
    'Node.js',
    'Dart',
  ],
  experiences: [
    {
      company: 'Cisco Systems Inc',
      position: 'Senior Software Engineer (Backend)',
      from: 'Oct 2022',
      to: 'Present',
      companyLink: 'https://www.cisco.com',
    },
    {
      company: 'Freshworks Inc',
      position: 'Senior Software Engineer (Backend)',
      from: 'Jun 2021',
      to: 'Sep 2022',
      companyLink: 'https://www.freshworks.com',
    },
    {
      company: 'Viacom18 Media Pvt Ltd',
      position: 'Software Engineer (Backend)',
      from: 'Jun 2019',
      to: 'May 2021',
      companyLink: 'https://www.viacom18.com',
    },
    {
      company: 'McAfee Corp',
      position: 'Build Tools Engineer',
      from: 'Jul 2017',
      to: 'Jun 2019',
      companyLink: 'https://www.mcafee.com',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      body: 'Certificate validation number: 5ZXRPB221ME1QXWW',
      year: '',
      link: 'https://www.credly.com',
    },
  ],
  educations: [],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
