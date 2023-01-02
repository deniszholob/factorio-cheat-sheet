import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { UtilityModsComponent } from './utility-mods.component';
import { UtilityModsModule } from './utility-mods.module';

type ComponentWithCustomControls = UtilityModsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Mods/Utility Mods',
  component: UtilityModsComponent,
  decorators: [
    moduleMetadata({
      imports: [UtilityModsModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `UtilityMods` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const UtilityMods = Template.bind({});
UtilityMods.args = {};
