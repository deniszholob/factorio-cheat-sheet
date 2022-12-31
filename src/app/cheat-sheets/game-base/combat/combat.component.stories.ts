import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { CombatComponent } from './combat.component';
import { CombatModule } from './combat.module';

type ComponentWithCustomControls = CombatComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Combat',
  component: CombatComponent,
  decorators: [
    moduleMetadata({
      imports: [CombatModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Combat` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Combat = Template.bind({});
Combat.args = {};
