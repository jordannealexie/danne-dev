module.exports = {
  email: 'jordannebartolome@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jordannealexie',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dannelexie/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jordanne-alexie-bartolome-1591212ba/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/jordannealexie',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#C18DB4',
    navy: '#27425D',
    darkNavy: '#0E1F2F',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
