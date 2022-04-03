// models
import { Product } from '../../models';

export const productsMock: Required<Product>[] = [
  {
    id: '65a92309-da2d-4c18-92bf-abc1590d9741',
    title: 'Product A',
    subtitle: 'Product sample A',
    status: 'Available',
    color: '#0C97A1',
    description: `
      Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim 
      id est laborum.
      `,
    details: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit',
      'sed do eiusmod tempor incididunt',
    ],
  },
  {
    id: 'ea3acac8-27ad-4c3e-a731-24498f24290e',
    title: 'Product B',
    subtitle: 'Product sample B',
    status: 'Unavailable',
    color: '#3F4040',
    description: `
      Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim 
      id est laborum.
      `,
    details: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit',
      'sed do eiusmod tempor incididunt',
    ],
  },
  {
    id: 'b4f024b4-96f9-4405-8588-c0fd3013068e',
    title: 'Product C',
    subtitle: 'Product sample C',
    status: 'Available',
    color: '#607d8b',
    description: `
      Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim 
      id est laborum.
      `,
    details: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit',
      'sed do eiusmod tempor incididunt',
    ],
  },
];
