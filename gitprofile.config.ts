// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ksAvinash', // Your GitHub org/user name. (This is the only required config)
    token: '', // GitHub personal access token (required for organization contributions)
    contributions: {
      display: true, // Display organization contributions?
      header: 'Organization Contributions',
      organizations: [], // Leave empty to use your public organizations
      limit: 6, // How many organizations to display.
    },
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/ksAvinash/ksAvinash.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/ksAvinash/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['ksAvinash/NammaBengaluru'], // These projects will not be displayed. example: ['ksAvinash/my-project1', 'ksAvinash/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['ksAvinash/my-project1', 'ksAvinash/my-project2']
      },
    },
    external: {
      header: 'Side Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'MyGala Invites',
          description: [
            'Digital invites platform for events like birthdays, weddings, and housewarming.',
            'Flutter apps with a fully serverless AWS backend (Lambda, API Gateway, S3, SNS/SQS, Aurora Serverless).',
            '~1K downloads.',
          ],
          imageUrl: '',
          link: 'https://mygala.in',
        },
        {
          title: 'RentMyTent App',
          description: [
            'Travel gear rental platform (Camping Tents, Trekking Shoes).',
            'Integrated delivery partners like Dunzo & Blowhorn via B2B APIs and RazorPay for payments.',
            'Stack: Flutter App & AWS Lambda Functions.',
          ],
          imageUrl: '',
          link: '',
        },
        {
          title: 'Namma Karnataka Tourism App',
          description: [
            "A comprehensive tourism app showcasing Karnataka's top attractions.",
            'Awarded "Best Project of the Year - 2017".',
            'Achieved a milestone of 30K downloads on the Google Play Store.',
          ],
          imageUrl: '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Avinash Kemparaju | Senior Software Engineer',
    description:
      'Senior Software Engineer (Backend) with 8+ years of experience architecting scalable, fault-tolerant systems. Specialized in end-to-end cloud architectures, serverless solutions, and API development. AWS Certified Solutions Architect – Associate.',
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
  profile: {
    bio: 'Senior Backend Developer',
  },
  skills: [
    'Backend System Design: Microservices & Serverless Architectures, Event Driven Architectures, Autoscaling, API Designs',
    'AI Tools: GitHub Copilot, ChatGPT Codex, Windsurf, Grok with Agent Modes, MCP Models',
    'DevOps: Terraform, GitHub Actions, Jenkins, Pulumi, Serverless',
    'Observability: Grafana, Datadog, Cloudwatch',
    'Cloud Platforms: AWS (EC2, Lambda, EKS, ECS, RDS, DynamoDB, Elasticache, SQS, SNS, S3, EventBridge, StepFunctions, etc.), Firebase services (Cloud Firestore, Cloud Functions, Realtime Database, Cloud Messaging, etc.)',
    'Databases: PostgreSQL, MySQL, DynamoDB, Redis Caching, Firebase Firestore, etc.',
    'Programming: Python, GoLang, NodeJs, Dart',
  ],
  experiences: [
    {
      company: 'Cisco Systems Inc',
      position: 'Senior Software Engineer (Backend)',
      from: 'Oct 2022',
      to: 'Present',
      companyLink: 'https://www.cisco.com',
      roles: [
        {
          position: 'Senior Software Engineer (Backend)',
          from: 'Oct 2023',
          to: 'Present',
        },
        {
          position: 'Software Engineer (Backend)',
          from: 'Oct 2022',
          to: 'Sep 2023',
        },
      ],
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
  achievements: [
    {
      title: 'WDSE India Mentorship Program@Cisco',
      year: '2025',
      body: '1st place for the Mentor-Mentee program and demoed "Getting Started with GitHub Copilot" to SBG.',
    },
    {
      title: 'WDSE Innovation Summit@Cisco',
      year: '2024',
      body: '1st place for YouTube Tenant Control feature.',
    },
    {
      title: 'AWS Solutions Architect - Associate',
      body: 'Certificate validation number: 5ZXRPB221ME1QXWW',
    },
    {
      title: 'Best Performer Award@Jiocinema aka Voot',
      body: 'For subscription management system & PG integration work.',
    },
    {
      title: 'Best Project of the year',
      year: '2017',
      body: 'The Namma Karnataka tourism Android app received the best project in the department.',
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
    defaultTheme: 'light',

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
      class="text-primary" href="https://github.com/ksAvinash/ksAvinash.github.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
