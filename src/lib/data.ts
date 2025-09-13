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
} from 'lucide-react';

export const navLinks = [
  { name: 'Classes', href: '#classes' },
  { name: 'Fees', href: '#fees' },
  { name: 'Teachers', href: '#teachers' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Admission', href: '/admission' },
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
    time: 'Tue, Thu | 5:00 PM - 6:00 PM',
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
      'You can enroll by visiting our Admission page for a step-by-step guide, or by filling out the contact form on our website. Our team will get in touch with you to discuss the details and complete the enrollment process.',
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

export const fees = [
  {
    plan: 'Starter',
    price: 150,
    description: 'Perfect for focusing on a single subject.',
    features: ['1 subject', '2 classes per week', 'Weekly assignments'],
    icon: DollarSign,
  },
  {
    plan: 'Pro',
    price: 280,
    description: 'Ideal for students needing help in multiple areas.',
    features: ['Up to 3 subjects', '4 classes per week', 'Personalized study plan', 'Monthly progress reports'],
    icon: DollarSign,
    popular: true,
  },
  {
    plan: 'Premium',
    price: 400,
    description: 'Comprehensive support for dedicated learners.',
    features: ['Unlimited subjects', 'Unlimited classes', 'One-on-one doubt sessions', 'College admission guidance'],
    icon: DollarSign,
  },
];

export const successStats = [
  {
    value: '98%',
    label: 'Pass Rate',
    icon: Award,
  },
  {
    value: '500+',
    label: 'Students Enrolled',
    icon: Users,
  },
  {
    value: 'Top 10%',
    label: 'University Placements',
    icon: GraduationCap,
  },
  {
    value: '15+',
    label: 'Years of Experience',
    icon: Shield,
  },
];

export const admissionProcess = [
    {
        step: 1,
        title: "Submit an Inquiry",
        description: "Fill out our contact form with your details and the subjects you're interested in. Our admissions team will review your information and reach out to you within 24 hours.",
        icon: MessageSquareQuote,
    },
    {
        step: 2,
        title: "Free Consultation",
        description: "We'll schedule a free, no-obligation consultation with you and your parents to discuss your academic goals, assess your needs, and answer any questions you may have about our programs.",
        icon: Users,
    },
    {
        step: 3,
        title: "Placement Assessment",
        description: "To ensure you're placed in the right class, we conduct a simple assessment test. This helps us understand your current knowledge level and tailor our teaching to your specific needs.",
        icon: BrainCircuit,
    },
    {
        step: 4,
        title: "Enrollment & Orientation",
        description: "Once the assessment is complete, we'll guide you through the final enrollment and payment process. You'll then attend a brief orientation session to meet your teachers and get acquainted with our learning platform.",
        icon: GraduationCap,
    }
];
