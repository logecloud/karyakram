export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  requiresApproval: boolean;
  createdBy: string;
  status: 'DRAFT' | 'PUBLISHED' | 'CANCELLED' | 'COMPLETED';
}

export interface EventRegistration {
  id: string;
  eventId: string;
  userId: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'CHECKED_IN';
  registeredAt: Date;
  checkedInAt?: Date;
} 