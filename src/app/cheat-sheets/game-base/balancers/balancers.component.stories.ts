import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { StorybookCsModule } from 'app/shared/storybook-cs.module';
import { BalancersComponent } from './balancers.component';
import { BalancersModule } from './balancers.module';

type ComponentWithCustomControls = BalancersComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Balancers',
  component: BalancersComponent,
  decorators: [
    moduleMetadata({
      imports: [BalancersModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Balancers` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Balancers = Template.bind({});
Balancers.args = {};
