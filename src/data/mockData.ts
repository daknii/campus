import type { 
  UserProfile, 
  ClassItem, 
  AssignmentItem, 
  AcademicStats, 
  GradeItem, 
  GitHubCommit, 
  CalendarEvent 
} from '../types';

export const MOCK_USER: UserProfile = {
  name: "Dani",
  course: "Informatics (Integrated Technical)",
  avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Dani&backgroundColor=f1f5f9"
};

export const MOCK_CLASSES: ClassItem[] = [
  { id: 1, subject: "Web Development", time: "08:00 - 09:40", room: "Lab 3", status: "completed" },
  { id: 2, subject: "Hardware Architecture", time: "10:00 - 11:40", room: "Room 102", status: "current" },
  { id: 3, subject: "Mathematics", time: "13:30 - 15:10", room: "Room 205", status: "upcoming" },
];

export const MOCK_ASSIGNMENTS: AssignmentItem[] = [
  { 
    id: 1, 
    title: "React Components", 
    subject: "Web Development", 
    deadline: "Today, 23:59", 
    platform: "Moodle", 
    completed: false, 
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" 
  },
  { 
    id: 2, 
    title: "Math List 04", 
    subject: "Mathematics", 
    deadline: "Tomorrow, 12:00", 
    platform: "SIGAA", 
    completed: false, 
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" 
  },
  { 
    id: 3, 
    title: "CPU Architecture Essay", 
    subject: "Hardware Architecture", 
    deadline: "Sep 28", 
    platform: "Moodle", 
    completed: true, 
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" 
  },
  { 
    id: 4, 
    title: "Final Project Proposal", 
    subject: "Software Engineering", 
    deadline: "Oct 05", 
    platform: "SIGAA", 
    completed: false, 
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" 
  },
  { 
    id: 5, 
    title: "Database Design", 
    subject: "Databases", 
    deadline: "Oct 10", 
    platform: "Moodle", 
    completed: false, 
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" 
  },
];

export const MOCK_ACADEMIC: AcademicStats = {
  attendance: 95,
  averageGrade: 8.5,
  totalCredits: 120,
  completedCredits: 84
};

export const MOCK_GRADES: GradeItem[] = [
  { id: 1, subject: "Web Development", grade: 9.5, absences: 2, maxAbsences: 20, status: "excellent" },
  { id: 2, subject: "Hardware Architecture", grade: 8.0, absences: 0, maxAbsences: 20, status: "good" },
  { id: 3, subject: "Mathematics", grade: 7.2, absences: 5, maxAbsences: 20, status: "warning" },
  { id: 4, subject: "Software Engineering", grade: 9.0, absences: 1, maxAbsences: 20, status: "excellent" },
  { id: 5, subject: "Databases", grade: 8.8, absences: 4, maxAbsences: 20, status: "good" },
];

export const MOCK_COMMITS: GitHubCommit[] = [
  { id: 1, message: "feat: add campus dashboard layout", repo: "campus-frontend", time: "2 hours ago" },
  { id: 2, message: "fix: dark mode toggle bug", repo: "campus-frontend", time: "5 hours ago" },
];

export const MOCK_CALENDAR_EVENTS: CalendarEvent[] = [
  { id: 1, date: 5, title: "Web Dev Midterm", type: "exam" },
  { id: 2, date: 12, title: "Campus Tech Fair", type: "event" },
  { id: 3, date: 15, title: "Math Assignment Due", type: "assignment" },
  { id: 4, date: 28, title: "Hardware Essay Due", type: "assignment" },
];
