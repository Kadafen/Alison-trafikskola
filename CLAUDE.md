# Ali Trafikskola - Development Guidelines

## Build & Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Lint code
npm run lint

# Type check
npm run typecheck
```

## Code Style Guidelines
- **TypeScript**: Use strict typing with proper interfaces for all props and data structures.
- **Formatting**: 2 space indentation, trailing commas in arrays/objects.
- **Imports**: Group imports (React, Next.js, third-party, local) with blank line between groups.
- **Components**: Use functional components with React.FC<Props> typing.
- **Naming**: PascalCase for components, camelCase for variables/functions, kebab-case for CSS classes.
- **CSS**: Use Tailwind utility classes and custom components from globals.css.
- **Tailwind**: Utilize custom theme extensions for colors, animations, and shadows.
- **Internationalization**: Use i18next/react-i18next with context-based language switching.
- **Animations**: Keep subtle (0.2-0.5s duration). Use Framer Motion for complex animations.
- **Error Handling**: Try/catch for async operations with user feedback.
- **Images**: Use Next.js Image component with proper optimization.
- **SEO**: Include proper meta tags and semantic HTML for accessibility.
- **Path Aliases**: Use the @/* path alias to import from src directory.