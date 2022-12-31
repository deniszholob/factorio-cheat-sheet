import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { IntroComponent } from './intro.component';
import { IntroModule } from './intro.module';

type ComponentWithCustomControls = IntroComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Layout/Intro',
  component: IntroComponent,
  decorators: [
    moduleMetadata({
      imports: [IntroModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Intro` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Intro = Template.bind({});
Intro.args = {};
