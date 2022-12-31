import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { VehicleFuelBonusComponent } from './vehicle-fuel-bonus.component';
import { VehicleFuelBonusModule } from './vehicle-fuel-bonus.module';

type ComponentWithCustomControls = VehicleFuelBonusComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Vehicle Fuel Bonus',
  component: VehicleFuelBonusComponent,
  decorators: [
    moduleMetadata({
      imports: [VehicleFuelBonusModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `VehicleFuelBonus` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const VehicleFuelBonus = Template.bind({});
VehicleFuelBonus.args = {};
