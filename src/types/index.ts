import type { LucideIcon } from 'lucide-react';

export interface UserProfile {
  name: string;
  course: string;
  avatar: string;
}

export type ClassStatus = 'completed' | 'current' | 'upcoming';

export interface ClassItem {
  id: number;
  subject: string;
  time: string;
  room: string;
  status: ClassStatus;
}

export interface AssignmentItem {
  id: number;
  title: string;
  subject: string;
  deadline: string;
  platform: string;
  completed: boolean;
  color: string;
}

export interface AcademicStats {
  attendance: number;
  averageGrade: number;
  totalCredits: number;
  completedCredits: number;
}

export type GradeStatus = 'excellent' | 'good' | 'warning';

export interface GradeItem {
  id: number;
  subject: string;
  grade: number;
  absences: number;
  maxAbsences: number;
  status: GradeStatus;
}

export interface GitHubCommit {
  id: number;
  message: string;
  repo: string;
  time: string;
}

export type CalendarEventType = 'exam' | 'event' | 'assignment';

export interface CalendarEvent {
  id: number;
  date: number;
  title: string;
  type: CalendarEventType;
}

export interface IntegrationItem {
  name: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  connected?: boolean;
}

export interface NavItem {
  path: string;
  icon: LucideIcon;
  label: string;
}

export type AssignmentFilter = 'All' | 'Pending' | 'Completed';
