import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { CargoWagonTransferComponent } from './cargo-wagon-transfer.component';
import { CargoWagonTransferModule } from './cargo-wagon-transfer.module';

type ComponentWithCustomControls = CargoWagonTransferComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Cargo Wagon Transfer',
  component: CargoWagonTransferComponent,
  decorators: [
    moduleMetadata({
      imports: [CargoWagonTransferModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `CargoWagonTransfer` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const CargoWagonTransfer = Template.bind({});
CargoWagonTransfer.args = {};
