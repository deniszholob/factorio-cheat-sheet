import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { NuclearPowerComponent } from './nuclear-power.component';
import { NuclearPowerModule } from './nuclear-power.module';

type ComponentWithCustomControls = NuclearPowerComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Nuclear Power',
  component: NuclearPowerComponent,
  decorators: [
    moduleMetadata({
      imports: [NuclearPowerModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `NuclearPower` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const NuclearPower = Template.bind({});
NuclearPower.args = {};
