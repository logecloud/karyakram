import 'next-auth';
import { Role } from '@/app/hooks/useAuth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: Role;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
} 