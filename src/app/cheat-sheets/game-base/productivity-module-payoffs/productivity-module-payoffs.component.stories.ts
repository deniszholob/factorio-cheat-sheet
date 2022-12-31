import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { ProductivityModulePayoffsComponent } from './productivity-module-payoffs.component';
import { ProductivityModulePayoffsModule } from './productivity-module-payoffs.module';

type ComponentWithCustomControls = ProductivityModulePayoffsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Productivity Module Payoffs',
  component: ProductivityModulePayoffsComponent,
  decorators: [
    moduleMetadata({
      imports: [ProductivityModulePayoffsModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `ProductivityModulePayoffs` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const ProductivityModulePayoffs = Template.bind({});
ProductivityModulePayoffs.args = {};
