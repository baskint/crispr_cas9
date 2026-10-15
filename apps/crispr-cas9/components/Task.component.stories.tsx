import type { Meta, StoryObj } from '@storybook/nextjs';

import { Task } from './Task.component';

const meta: Meta<typeof Task> = {
  component: Task,
};

export default meta;
type Story = StoryObj<typeof Task>;

export const Primary: Story = {
  args: {
    title: 'Test',
  },
};
