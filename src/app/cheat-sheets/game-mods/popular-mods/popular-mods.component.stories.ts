import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { PopularModsComponent } from './popular-mods.component';
import { PopularModsModule } from './popular-mods.module';

type ComponentWithCustomControls = PopularModsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Mods/Utility Mods',
  component: PopularModsComponent,
  decorators: [
    moduleMetadata({
      imports: [PopularModsModule, StorybookCsModule],
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
