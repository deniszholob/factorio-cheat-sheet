import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { BeltsComponent } from './belts.component';

type ComponentWithCustomControls = BeltsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Belts',
  component: BeltsComponent,
  decorators: [
    moduleMetadata({
      imports: [StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Belts` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Belts = Template.bind({});
Belts.args = {};
