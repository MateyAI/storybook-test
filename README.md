# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook`

Starts Storybook in development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

This allows you to develop and test your components in isolation.

### `npm run build-storybook`

Builds Storybook as a static web application.\
You can then deploy this to any static hosting service.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Project Name

## Project Structure and Best Practices

### Directory Structure

```
src/
├── components/          # Reusable components
│   ├── atoms/          # Basic building blocks (buttons, inputs, etc.)
│   ├── molecules/      # Combinations of atoms
│   ├── organisms/      # Complex components
│   └── templates/      # Page layouts
├── styles/             # Global styles and styled-components themes
├── hooks/              # Custom React hooks
├── utils/              # Utility functions and helpers
├── types/              # TypeScript type definitions
└── stories/            # Storybook stories
```

### Coding Standards and Best Practices

#### TypeScript

- Use explicit type annotations for function parameters and return types
- Prefix interfaces with 'I' (e.g., IButtonProps)
- Prefix type aliases with 'T' (e.g., TTheme)
- Avoid using 'any' type
- Use union types instead of enums
- Enable strict TypeScript checks

#### React

- Use functional components with hooks
- Implement proper error boundaries
- Use React.memo() for performance optimization when needed
- Keep components small and focused
- Use proper prop naming conventions
- Implement proper loading and error states

#### Styled Components

- Use theme variables for consistent styling
- Create reusable styled components
- Use proper component naming (StyledComponent)
- Implement responsive designs using theme breakpoints
- Use CSS properties in camelCase
- Avoid inline styles

#### Storybook

- Create stories for all reusable components
- Use component story format (CSF)
- Include documentation with each story
- Implement proper controls and actions
- Use proper naming convention: ComponentName.stories.tsx
- Include different variants and states
- Add proper accessibility information

### Component Structure

```typescript
// ComponentName.tsx
import React from 'react';
import styled from 'styled-components';

interface IComponentProps {
  // Props interface
}

const StyledComponent = styled.div`
  // Styled component styles
`;

export const ComponentName: React.FC<IComponentProps> = ({ ...props }) => {
  return (
    <StyledComponent>
      {/* Component content */}
    </StyledComponent>
  );
};

// ComponentName.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: {
    // Default props
  },
};
```

### Git Commit Standards

- Use conventional commits format
- Include ticket number in commit message
- Keep commits atomic and focused
- Write meaningful commit messages

### Performance Guidelines

- Implement code splitting
- Use React.lazy() for component lazy loading
- Optimize images and assets
- Implement proper memoization
- Monitor bundle size

### Accessibility Standards

- Follow WCAG 2.1 guidelines
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain proper color contrast
- Test with screen readers
