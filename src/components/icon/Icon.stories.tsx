import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ColorEnum } from 'src/lib/enums/color.enum';
import { IconEnum } from 'src/lib/enums/icon.enum';
import Icon, { IIcon } from './Icon';
import { mockIconProps } from './Icon.mocks';

export default {
  title: 'ui-kit/Icon',
  component: Icon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      options: [
        IconEnum.MAIL,
        IconEnum.MESSAGE,
        IconEnum.EYE,
        IconEnum.NOEYE,
        IconEnum.USER,
        IconEnum.STOCK,
        IconEnum.COMMAND,
        IconEnum.ACCOUNTING,
        IconEnum.HOME,
      ],
      control: { type: 'select' },
    },
    color: {
      options: [ColorEnum.PRIMARY, ColorEnum.WHITE],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockIconProps.base,
} as IIcon;
