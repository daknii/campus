# 🎓 CAMPUS — Unified Student Dashboard

A modern, responsive, and animated student dashboard application built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- **🏠 Interactive Dashboard**:
  - **Today's Classes**: Real-time daily timeline with completed, current (with pulsing indicator), and upcoming classes.
  - **Upcoming Assignments**: Quick checklist displaying deadlines, platforms (Moodle, SIGAA), and completion toggles.
  - **Academic Overview**: Semester metrics including GPA/Average Grade, attendance tracking, and credit progress bar.
  - **🐱 Cat Companion Widget**: Mascot with interactive click messages and gentle floating animations.
  - **🐙 GitHub Activity Widget**: Contribution heatmap grid and recent repository commits.

- **📅 Calendar View**:
  - Full-month grid with events categorized into exams, assignments, and campus events.
  - Highlighting for current day and month controls.

- **📝 Assignments Hub**:
  - Status filters (**All**, **Pending**, **Completed**).
  - Platform filter (**All**, **Moodle**, **SIGAA**).
  - Toggle assignment completion with smooth layout animations.

- **📊 Grades & Attendance Tracker**:
  - Subject breakdown with individual grade scores and absence ratios.
  - Warning alert bars when approaching the absence limit.

- **⚙️ Settings & Integrations**:
  - Profile customization and avatar preview.
  - Third-party service connectivity toggles (**SIGAA**, **Moodle**, **Integra Garopaba**, **GitHub**).

- **🌓 Dark Mode Support**:
  - Seamless light and dark mode toggling with `localStorage` persistence and system preference detection.

- **📱 Fully Responsive**:
  - Fluid mobile navigation drawer with backdrop blur and collapsible desktop sidebar.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
campus/
├── index.html                 # HTML Entry point with Google Fonts
├── package.json               # Dependencies & scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind configuration & custom design tokens
├── tsconfig.json              # TypeScript root configuration
├── tsconfig.app.json          # TypeScript app configuration
├── vite.config.ts             # Vite configuration
├── src/
│   ├── main.tsx               # Application mounting point
│   ├── App.tsx                # Layout shell, router orchestration, and providers
│   ├── index.css              # Global styles, Tailwind directives & custom keyframes
│   ├── context/
│   │   ├── CampusContext.tsx  # Dashboard state (tasks, active route, mobile sidebar)
│   │   └── ThemeContext.tsx   # Dark/light theme state & documentElement sync
│   ├── hooks/
│   │   └── index.ts           # Re-exported hooks (`useCampus`, `useTheme`)
│   ├── types/
│   │   └── index.ts           # Domain models & TypeScript interfaces
│   ├── data/
│   │   └── mockData.ts        # Typed mock dataset (classes, assignments, grades, events)
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Card.tsx       # Animated card wrapper
│   │   │   ├── Badge.tsx      # Platform and status badges
│   │   │   ├── IconButton.tsx # Reusable button for icons
│   │   │   └── GithubIcon.tsx # SVG GitHub icon
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx    # Collapsible & responsive navigation sidebar
│   │   │   ├── Header.tsx     # Topbar with search, notifications, theme toggle
│   │   │   └── Footer.tsx     # Dashboard footer
│   │   └── widgets/
│   │       ├── ClassesWidget.tsx          # Today's classes timeline
│   │       ├── AssignmentsWidget.tsx      # Pending assignments preview
│   │       ├── AcademicOverviewWidget.tsx # GPA and credit progress
│   │       ├── CatCompanionWidget.tsx     # Animated interactive companion
│   │       └── GitHubWidget.tsx           # Contribution heatmap & commits
│   └── pages/
│       ├── HomePage.tsx       # Main dashboard grid
│       ├── CalendarPage.tsx   # Academic calendar
│       ├── AssignmentsPage.tsx# Task manager with filters
│       ├── GradesPage.tsx     # Subjects, grades, and absences
│       └── SettingsPage.tsx   # Account and service integrations
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```

The production assets will be output to the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```
