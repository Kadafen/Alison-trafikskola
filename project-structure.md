# Project Structure Plan

We'll create the following files and directories for our Ali Trafikskola website:

## Core Files
- package.json - Project configuration
- next.config.js - Next.js configuration
- tailwind.config.js - Tailwind CSS configuration
- tsconfig.json - TypeScript configuration
- .eslintrc.json - ESLint configuration
- postcss.config.js - PostCSS configuration

## Directories
- src/ - Source code
  - pages/ - Next.js pages
    - index.tsx - Home page
    - about.tsx - About page
    - courses.tsx - Courses page
    - reviews.tsx - Reviews page
    - contact.tsx - Contact page
    - _app.tsx - Custom App component
    - _document.tsx - Custom Document component
  - components/ - React components
    - layout/ - Layout components
      - Header.tsx - Header component
      - Footer.tsx - Footer component
      - Layout.tsx - Main layout wrapper
    - ui/ - UI components
      - Button.tsx - Button component
      - RatingStars.tsx - Star rating component
    - home/ - Home page components
      - HeroSection.tsx
      - AboutSection.tsx
      - CoursesSection.tsx
      - TestimonialsSection.tsx
      - StatsSection.tsx
      - ContactSection.tsx
    - shared/ - Shared components
      - Seo.tsx - SEO component
  - styles/ - CSS styles
    - globals.css - Global styles
  - data/ - Data files
    - testimonials.ts - Testimonial data
    - courses.ts - Course data
    - stats.ts - Statistics data

## Public Assets
- public/ - Public assets
  - images/ - Images
    - logo.svg - Logo
    - instructor-ali.jpg - Instructor photo
    - hero-bg.jpg - Hero background
    - favicon.ico - Favicon