
import {
  BookOpen,
  Calculator,
  Atom,
  Languages,
  BrainCircuit,
  Shield,
  MessageSquareQuote,
  LayoutDashboard,
  DollarSign,
  Award,
  Users,
  GraduationCap,
  Image,
  FlaskConical,
  Trophy,
  ClipboardList,
  UserCheck,
} from 'lucide-react';

export const navLinks = [
  {
    name: 'Classes',
    href: '#',
    subLinks: [
      { name: '10th Grade', href: '/classes/10' },
      { name: '11th Grade', href: '/classes/11' },
      { name: '12th Grade', href: '/classes/12' },
    ],
  },
  { name: 'Fees', href: '#fees' },
  { name: 'Teachers', href: '#teachers' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Admission', href: '/admission' },
  { name: 'Contact', href: '#contact' },
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
];

export const classes = [
  {
    subject: 'Mathematics',
    teacher: 'Mr. Ritesh Kumar',
    time: 'Mon - Fri',
    icon: Calculator,
    grade: 10,
  },
  {
    subject: 'Physics',
    teacher: 'Birender Sir',
    time: 'Mon - Fri',
    icon: Atom,
    grade: 11,
  },
  {
    subject: 'English Literature',
    teacher: 'Mr. Sudhakar Patil',
    time: 'Mon - Fri',
    icon: BookOpen,
    grade: 12,
  },
   {
    subject: 'Chemistry',
    teacher: 'Harish Chandra Patel',
    time: 'Mon - Fri',
    icon: FlaskConical,
    grade: 11,
  },
  {
    subject: 'Advanced Physics',
    teacher: 'B.D. Pandey',
    time: 'Mon - Fri',
    icon: Atom,
    grade: 12,
  },
];

export const teachers = [
  {
    id: 'teacher-1',
    name: 'Mr. Ritesh Kumar',
    qualifications: 'Mathematics, 27+ years of teaching experience.',
    imageUrl: 'https://picsum.photos/seed/teacher1/400/400',
    imageHint: 'math teacher',
  },
  {
    id: 'teacher-2',
    name: 'Mr. Sudhakar Patil',
    qualifications: 'English, 30+ years of teaching experience.',
    imageUrl: 'https://picsum.photos/seed/teacher2/400/400',
    imageHint: 'english teacher',
  },
  {
    id: 'teacher-3',
    name: 'Birender Sir',
    qualifications: 'Physics, 10+ years of teaching experience.',
    imageUrl: 'https://picsum.photos/seed/teacher3/400/400',
    imageHint: 'physics teacher',
  },
  {
    id: 'teacher-4',
    name: 'Harish Chandra Patel',
    qualifications: 'Chemistry, 20+ years of teaching experience.',
    imageUrl: 'https://picsum.photos/seed/teacher4/400/400',
    imageHint: 'chemistry teacher',
  },
  {
    id: 'teacher-5',
    name: 'B.D. Pandey',
    qualifications: 'Physics, 15+ years of teaching experience.',
    imageUrl: 'https://picsum.photos/seed/teacher5/400/400',
    imageHint: 'male professor',
  },
];

export const faqs = [
  {
    id: 'faq-1',
    question: 'What subjects do you offer?',
    answer:
      'We offer a wide range of subjects including Mathematics, Physics, Chemistry, and English Literature. We also provide specialized workshops for test preparation.',
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
      'We believe in personalized attention, so our class sizes are small, typically with a maximum of 10-15 students per class. This ensures each student gets the support they need.',
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
      "You can enroll by visiting our Admission page for a step-by-step guide, or by filling out the contact form on our website. Our team will get in touch with you to discuss the details and complete the enrollment process.",
  },
];

export const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Aarav Sharma',
    role: 'Parent',
    text: "Study Hub has been a game-changer for my son's confidence in Math. The teaching method is incredibly effective. We've seen a significant improvement in his grades!",
    imageUrl: 'https://picsum.photos/seed/sarahl/100/100',
    imageHint: 'happy parent',
  },
  {
    id: 'testimonial-2',
    name: 'Priya Patel',
    role: 'Student, Grade 11',
    text: "The classes are engaging and the teachers are very supportive. I'm no longer intimidated by complex topics in Physics and feel much more prepared for my exams.",
    imageUrl: 'https://picsum.photos/seed/jamesp/100/100',
    imageHint: 'college student',
  },
  {
    id: 'testimonial-3',
    name: 'Rajesh Gupta',
    role: 'Parent',
    text: "The improvement in my daughter's writing skills since she joined the English Literature class is remarkable. The small class size makes a huge difference.",
    imageUrl: 'https://picsum.photos/seed/mariag/100/100',
    imageHint: 'smiling parent',
  },
  {
    id: 'testimonial-4',
    name: 'Rohan Mehra',
    role: 'Student, Grade 12',
    text: 'I was struggling with exam preparation on my own. The workshops at Study Hub provided me with the strategies and practice I needed. I highly recommend it!',
    imageUrl: 'https://picsum.photos/seed/leok/100/100',
    imageHint: 'male student',
  },
];

export const fees = [
  {
    grade: '10th Grade',
    price: '20,000',
    period: 'yearly',
    description: 'Comprehensive curriculum for a strong foundation.',
    features: ['All core subjects covered', 'Regular mock tests', 'Doubt clearing sessions'],
    icon: DollarSign,
  },
  {
    grade: '11th Grade',
    price: '75,000',
    period: 'yearly',
    description: 'Specialized streams for Science and Commerce.',
    features: [
      'In-depth subject modules',
      'Practical lab sessions',
      'Career counseling',
      'Competitive exam preparation',
    ],
    icon: DollarSign,
    popular: true,
  },
  {
    grade: '12th Grade',
    price: '85,000',
    period: 'yearly',
    description: 'Focused preparation for board exams and beyond.',
    features: [
      'Intensive revision classes',
      'Advanced problem-solving',
      'Personalized mentorship',
      'University application support',
    ],
    icon: DollarSign,
  },
];

export const successStats = [
  {
    value: '94.88%',
    label: 'Ritu Chaudhary (12th Sci)',
    icon: Trophy,
  },
  {
    value: '90%',
    label: 'Lakshya Yadav (11th Com)',
    icon: Trophy,
  },
  {
    value: '89%',
    label: 'Ruchi Shah (12th)',
    icon: Trophy,
  },
  {
    value: '70+',
    label: 'Students Enrolled',
    icon: Users,
  },
  {
    value: '5+',
    label: 'Classes Offered',
    icon: ClipboardList,
  },
  {
    value: '12',
    label: 'Batches Running',
    icon: UserCheck,
  },
];

export const admissionProcess = [
  {
    step: 1,
    title: 'Submit an Inquiry',
    description:
      "Fill out our contact form with your details and the subjects you're interested in. Our admissions team will review your information and reach out to you within 24 hours.",
    icon: MessageSquareQuote,
  },
  {
    step: 2,
    title: 'Free Consultation',
    description:
      "We'll schedule a free, no-obligation consultation with you and your parents to discuss your academic goals, assess your needs, and answer any questions you may have about our programs.",
    icon: Users,
  },
  {
    step: 3,
    title: 'Placement Assessment',
    description:
      "To ensure you're placed in the right class, we conduct a simple assessment test. This helps us understand your current knowledge level and tailor our teaching to your specific needs.",
    icon: BrainCircuit,
  },
  {
    step: 4,
    title: 'Enrollment & Orientation',
    description:
      "Once the assessment is complete, we'll guide you through the final enrollment and payment process. You'll then attend a brief orientation session to meet your teachers and get acquainted with our learning platform.",
    icon: GraduationCap,
  },
];
