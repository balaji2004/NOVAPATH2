export interface ForumUser {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface ForumReply {
  id: string;
  text: string;
  author: ForumUser;
  timestamp: Date;
  upvotes: number;
}

export interface ForumAnswer extends ForumReply {
  replies?: ForumReply[];
}

export interface ForumQuestion {
  id: string;
  text: string;
  author: ForumUser;
  isAnonymous: boolean;
  timestamp: Date;
  tags: string[];
  answers: ForumAnswer[];
}

const users: ForumUser[] = [
  { id: 'user-1', name: 'Alisha Sharma', avatarUrl: '/avatars/01.png' },
  { id: 'user-2', name: 'Ben Carter', avatarUrl: '/avatars/02.png' },
  { id: 'user-3', name: 'Chris Lee', avatarUrl: '/avatars/03.png' },
  { id: 'user-4', name: 'Diana Ray', avatarUrl: '/avatars/04.png' },
];

export const forumTags: string[] = [
  'JEE Advanced',
  'NEET',
  'BITSAT',
  'IIT Bombay',
  'NIT',
  'Admissions',
  '1st Year',
  'Computer Science',
  'Drop Year',
  'Internships'
];

export const forumQuestions: ForumQuestion[] = [
  {
    id: 'q1',
    text: 'What is the best way to prepare for the JEE Advanced in the last 3 months?',
    author: users[0],
    isAnonymous: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    tags: ['JEE Advanced', 'Admissions', 'Drop Year'],
    answers: [
      {
        id: 'a1-1',
        text: "Focus on mock tests and analyzing your mistakes. Don't try to learn new topics, just revise your strong areas.",
        author: users[1],
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5), // 1.5 hours ago
        upvotes: 15,
        replies: [
          {
            id: 'r1-1-1',
            text: 'I agree. Also, make sure to solve previous year papers to understand the pattern.',
            author: users[2],
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1), // 1 hour ago
            upvotes: 8,
          },
        ],
      },
      {
        id: 'a1-2',
        text: 'I would suggest focusing on inorganic chemistry, it has a high weightage and is mostly memory-based.',
        author: users[3],
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        upvotes: 5,
        replies: [],
      },
    ],
  },
  {
    id: 'q2',
    text: 'Is it worth taking a drop year for IITs if I am getting into a good NIT?',
    author: users[2],
    isAnonymous: true,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    tags: ['Drop Year', 'Admissions', 'IIT Bombay', 'NIT'],
    answers: [
      {
        id: 'a2-1',
        text: "It depends on your personal goals. A drop year can be very stressful. If you're confident you can improve significantly, go for it. Otherwise, an NIT is also a great option.",
        author: users[0],
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
        upvotes: 22,
        replies: [],
      },
    ],
  },
  {
    id: 'q3',
    text: 'How is the coding culture at IIT Bombay? Are there enough opportunities for internships?',
    author: users[3],
    isAnonymous: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
    tags: ['IIT Bombay', 'Computer Science', 'Internships', '1st Year'],
    answers: [
        {
            id: 'a3-1',
            text: "The coding culture is amazing! There are many clubs and competitions. Internships are plentiful if you have the right skills.",
            author: users[1],
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4),
            upvotes: 18,
            replies: []
        }
    ],
  },
];