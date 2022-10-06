import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Task } from './Task.component';

const Story: ComponentMeta<typeof Task> = {
  component: Task,
  title: 'Task',
};
export default Story;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
