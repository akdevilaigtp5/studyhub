import {
  BookOpen,
  Calculator,
  Atom,
  Languages,
  BrainCircuit,
  Shield,
  MessageSquareQuote,
  LayoutDashboard,
} from 'lucide-react';

export const navLinks = [
  { name: 'Classes', href: '#classes' },
  { name: 'Teachers', href: '#teachers' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
  { name: 'Content Ideas', href: '/content-ideas' },
  { name: 'Admin', href: '/admin/inquiries' },
];

export const adminNavLinks = [
  {
    name: 'Inquiries',
    href: '/admin/inquiries',
    icon: MessageSquareQuote,
  },
  {
    name: 'Reviews',
    href: '/admin/reviews',
    icon: LayoutDashboard,
  },
]

export const classes = [
  {
    subject: 'Mathematics',
    teacher: 'Dr. Evelyn Reed',
    time: 'Mon, Wed, Fri | 4:00 PM - 5:30 PM',
    icon: Calculator,
  },
  {
    subject: 'Physics',
    teacher: 'Mr. David Chen',
    time: 'Tue, Thu | 3:00 PM - 4:30 PM',
    icon: Atom,
  },
  {
    subject: 'English Literature',
    teacher: 'Ms. Sarah Jenkins',
    time: 'Mon, Wed | 6:00 PM - 7:30 PM',
    icon: BookOpen,
  },
  {
    subject: 'Foreign Languages',
    teacher: 'Ms. Isabella Rossi',
    time: 'Tue, Thu, Sat | 5:00 PM - 6:00 PM',
    icon: Languages,
  },
  {
    subject: 'Critical Thinking',
    teacher: 'Dr. Evelyn Reed',
    time: 'Fri | 6:00 PM - 8:00 PM',
    icon: BrainCircuit,
  },
];

export const teachers = [
  {
    id: 'teacher-1',
    name: 'Dr. Evelyn Reed',
    qualifications: 'Ph.D. in Mathematics, 15+ years of teaching experience.',
    imageUrl: 'https://picsum.photos/seed/teacher1/400/400',
    imageHint: 'teacher classroom',
  },
  {
    id: 'teacher-2',
    name: 'Mr. David Chen',
    qualifications: 'M.S. in Physics, specializing in advanced mechanics.',
    imageUrl: 'https://picsum.photos/seed/teacher2/400/400',
    imageHint: 'teacher whiteboard',
  },
  {
    id: 'teacher-3',
    name: 'Ms. Sarah Jenkins',
    qualifications: 'M.A. in English, published author and literary critic.',
    imageUrl: 'https://picsum.photos/seed/teacher3/400/400',
    imageHint: 'teacher student',
  },
  {
    id: 'teacher-4',
    name: 'Ms. Isabella Rossi',
    qualifications: 'Certified Language Instructor for Spanish and French.',
    imageUrl: 'https://picsum.photos/seed/teacher4/400/400',
    imageHint: 'friendly woman',
  },
];

export const schedule = {
  Monday: [
    {
      time: '4:00 PM - 5:30 PM',
      subject: 'Mathematics',
      teacher: 'Dr. Evelyn Reed',
    },
    {
      time: '6:00 PM - 7:30 PM',
      subject: 'English Literature',
      teacher: 'Ms. Sarah Jenkins',
    },
  ],
  Tuesday: [
    { time: '3:00 PM - 4:30 PM', subject: 'Physics', teacher: 'Mr. David Chen' },
    {
      time: '5:00 PM - 6:00 PM',
      subject: 'Foreign Languages',
      teacher: 'Ms. Isabella Rossi',
    },
  ],
  Wednesday: [
    {
      time: '4:00 PM - 5:30 PM',
      subject: 'Mathematics',
      teacher: 'Dr. Evelyn Reed',
    },
    {
      time: '6:00 PM - 7:30 PM',
      subject: 'English Literature',
      teacher: 'Ms. Sarah Jenkins',
    },
  ],
  Thursday: [
    { time: '3:00 PM - 4:30 PM', subject: 'Physics', teacher: 'Mr. David Chen' },
    {
      time: '5:00 PM - 6:00 PM',
      subject: 'Foreign Languages',
      teacher: 'Ms. Isabella Rossi',
    },
  ],
  Friday: [
    {
      time: '4:00 PM - 5:30 PM',
      subject: 'Mathematics',
      teacher: 'Dr. Evelyn Reed',
    },
    {
      time: '6:00 PM - 8:00 PM',
      subject: 'Critical Thinking',
      teacher: 'Dr. Evelyn Reed',
    },
  ],
  Saturday: [
    { time: '10:00 AM - 12:00 PM', subject: 'SAT Prep Workshop', teacher: 'Staff' },
    {
      time: '5:00 PM - 6:00 PM',
      subject: 'Foreign Languages',
      teacher: 'Ms. Isabella Rossi',
    },
  ],
};

export const faqs = [
  {
    id: 'faq-1',
    question: 'What subjects do you offer?',
    answer:
      'We offer a wide range of subjects including Mathematics, Physics, English Literature, and Foreign Languages. We also provide specialized workshops for test preparation like the SAT.',
  },
  {
    id: 'faq-2',
    question: 'How are the teachers qualified?',
    answer:
      'All our teachers are experts in their fields with advanced degrees and extensive teaching experience. They are passionate about education and dedicated to helping students succeed.',
  },
  {
    id: 'faq-3',
    question: 'What is the class size?',
    answer:
      'We believe in personalized attention, so our class sizes are small, typically with a maximum of 10 students per class. This ensures each student gets the support they need.',
  },
  {
    id: 'faq-4',
    question: 'Do you offer online classes?',
    answer:
      'Yes, we offer both in-person and online classes to provide flexibility for our students. Our online platform is interactive and engaging, mirroring the in-person experience.',
  },
  {
    id: 'faq-5',
    question: 'How can I enroll?',
    answer:
      'You can enroll by filling out the contact form on our website. Our team will get in touch with you to discuss the details and complete the enrollment process.',
  },
];

export const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Sarah L.',
    role: 'Parent',
    text: "TutorVista has been a game-changer for my son's confidence in Math. Dr. Reed's teaching method is incredibly effective. We've seen a significant improvement in his grades!",
    imageUrl: 'https://picsum.photos/seed/sarahl/100/100',
    imageHint: 'happy parent',
  },
  {
    id: 'testimonial-2',
    name: 'James P.',
    role: 'Student, Grade 11',
    text: "Mr. Chen makes Physics so much easier to understand. The classes are engaging and I'm no longer intimidated by complex topics. I finally feel prepared for my exams.",
    imageUrl: 'https://picsum.photos/seed/jamesp/100/100',
    imageHint: 'male student',
  },
  {
    id: 'testimonial-3',
    name: 'Maria G.',
    role: 'Parent',
    text: "The improvement in my daughter's writing skills since she joined Ms. Jenkins' English Literature class is remarkable. The small class size makes a huge difference.",
    imageUrl: 'https://picsum.photos/seed/mariag/100/100',
    imageHint: 'smiling parent',
  },
  {
    id: 'testimonial-4',
    name: 'Leo K.',
    role: 'Student, Grade 12',
    text: "I was struggling with SAT prep on my own. The workshop at TutorVista provided me with the strategies and practice I needed. I highly recommend it!",
    imageUrl: 'https://picsum.photos/seed/leok/100/100',
    imageHint: 'male teenager',
  },
];
