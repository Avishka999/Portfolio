import floodDetectionFeature from '../assets/flood-detection-feature.png';
import nullPoint from '../assets/null_point.png';
import yumYard from '../assets/yum-yard.png';

export const projects = [
  {
    number: '01',
    title: 'Flood Detection & Early Warning System',
    type: 'Final-year research project',
    description:
      'A disaster-management platform combining satellite-image classification with weather-based risk assessment to help surface potential flood events sooner.',
    features: ['Satellite image classification', 'Weather API integration', 'Rainfall risk assessment', 'Email and phone alerts'],
    technologies: ['Python', 'Flask', 'TensorFlow', 'OpenCV', 'SQLite'],
    image: floodDetectionFeature,
    art: 'flood',
    github: '',
  },
  {
    number: '02',
    title: 'Yum Yard',
    type: 'Food ordering system',
    description:
      'A full-stack food ordering application designed to manage food products, customer orders, categories and order processing.',
    features: ['Customer interface', 'Food browsing', 'Category management', 'Order management', 'Admin dashboard'],
    technologies: ['ReactJS', 'Laravel', 'MySQL', 'Axios'],
    image: yumYard,
    github: '',
  },
  {
    number: '03',
    title: 'AuraFinance',
    type: 'Finance project',
    description:
      'A finance-focused project. Detailed case study, feature list and technology stack will be added as project information becomes available.',
    features: [],
    technologies: [],
    image: '',
    art: 'finance',
    github: '',
  },
  {
    number: '04',
    title: 'NULL POINT',
    type: 'Assignment manager',
    description:
      'An assignment-tracking tool designed to bring deadlines, reminders and study resources into one place, with real-time synchronization.',
    features: ['Assignment tracking', 'Scheduler and reminders', 'Study resource suggestions', 'Firebase synchronization'],
    technologies: ['Python', 'Flask', 'Firebase', 'NLP APIs'],
    image: nullPoint,
    github: '',
  },
];

export const additionalProjects = [
  {
    number: '01',
    title: 'Formula 1 Racing Simulator',
    type: 'Object-oriented programming',
    description: 'A championship simulator built around race results, point calculations and reusable object-oriented models.',
    technologies: ['Java', 'OOP'],
    artLabel: 'RACE / ENGINE',
  },
  {
    number: '02',
    title: 'Shopping Cart Application',
    type: 'Frontend application',
    description: 'A responsive e-commerce interface with dynamic cart state, price updates and browser-based interactions.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    artLabel: 'CART / CHECKOUT',
  },
  {
    number: '03',
    title: 'Sports Equipment Website',
    type: 'E-commerce frontend',
    description: 'A responsive storefront concept featuring a clear landing page and client-side form validation.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    artLabel: 'SPORT / GOODS',
  },
  {
    number: '04',
    title: 'Hotel Management System',
    type: 'Console application',
    description: 'A Java reservation system exploring core language features and structured booking data.',
    technologies: ['Java'],
    artLabel: 'STAY / BOOKING',
  },
];
