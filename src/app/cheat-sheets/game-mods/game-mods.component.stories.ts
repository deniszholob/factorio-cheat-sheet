import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { GameModsComponent } from './game-mods.component';
import { GameModsModule } from './game-mods.module';

type ComponentWithCustomControls = GameModsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Mods',
  component: GameModsComponent,
  decorators: [
    moduleMetadata({
      imports: [GameModsModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `GameMods` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const GameMods = Template.bind({});
GameMods.args = {};
