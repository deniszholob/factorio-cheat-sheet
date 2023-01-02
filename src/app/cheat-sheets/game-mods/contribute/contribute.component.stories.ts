import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { ContributeComponent } from './contribute.component';
import { ContributeModule } from './contribute.module';

type ComponentWithCustomControls = ContributeComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Mods/Contribute',
  component: ContributeComponent,
  decorators: [
    moduleMetadata({
      imports: [ContributeModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Contribute` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Contribute = Template.bind({});
Contribute.args = {};
