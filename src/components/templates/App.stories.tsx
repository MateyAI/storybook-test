import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../../styles/global';
import { theme } from '../../styles/theme';

import { App } from './App';

const meta: Meta<typeof App> = {
  title: 'Templates/App',
  component: App,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type TStory = StoryObj<typeof App>;

export const Default: TStory = {
  args: {},
};
