// This is a mock database for demonstration purposes.
// In a real application, you would use a proper database like Firestore.

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};

const inquiries: Inquiry[] = [];

export async function saveInquiry(data: Omit<Inquiry, 'id' | 'createdAt'>): Promise<Inquiry> {
  const newInquiry: Inquiry = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date(),
  };
  inquiries.unshift(newInquiry); // Add to the beginning of the array
  return newInquiry;
}

export async function getInquiries(): Promise<Inquiry[]> {
  return inquiries;
}