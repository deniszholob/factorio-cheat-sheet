import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { FluidWagonTransferComponent } from './fluid-wagon-transfer.component';
import { FluidWagonTransferModule } from './fluid-wagon-transfer.module';

type ComponentWithCustomControls = FluidWagonTransferComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Fluid Wagon Transfer',
  component: FluidWagonTransferComponent,
  decorators: [
    moduleMetadata({
      imports: [FluidWagonTransferModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `FluidWagonTransfer` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const FluidWagonTransfer = Template.bind({});
FluidWagonTransfer.args = {};
