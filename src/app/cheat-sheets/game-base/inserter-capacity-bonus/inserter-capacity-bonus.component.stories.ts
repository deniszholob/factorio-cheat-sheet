import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { InserterCapacityBonusComponent } from './inserter-capacity-bonus.component';
import { InserterCapacityBonusModule } from './inserter-capacity-bonus.module';

type ComponentWithCustomControls = InserterCapacityBonusComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Inserter Capacity Bonus',
  component: InserterCapacityBonusComponent,
  decorators: [
    moduleMetadata({
      imports: [InserterCapacityBonusModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `InserterCapacityBonus` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const InserterCapacityBonus = Template.bind({});
InserterCapacityBonus.args = {};
