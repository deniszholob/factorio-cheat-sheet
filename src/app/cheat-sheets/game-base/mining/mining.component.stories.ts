import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { MiningComponent } from './mining.component';
import { MiningModule } from './mining.module';

type ComponentWithCustomControls = MiningComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Mining',
  component: MiningComponent,
  decorators: [
    moduleMetadata({
      imports: [MiningModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Mining` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Mining = Template.bind({});
Mining.args = {};
