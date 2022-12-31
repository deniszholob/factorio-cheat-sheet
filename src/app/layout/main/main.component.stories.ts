import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { MainComponent } from './main.component';
import { MainModule } from './main.module';

type ComponentWithCustomControls = MainComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Layout/Main',
  component: MainComponent,
  decorators: [
    moduleMetadata({
      imports: [MainModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Main` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Main = Template.bind({});
Main.args = {};
