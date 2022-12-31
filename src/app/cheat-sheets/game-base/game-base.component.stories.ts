import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { GameBaseComponent } from './game-base.component';
import { GameBaseModule } from './game-base.module';

type ComponentWithCustomControls = GameBaseComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base',
  component: GameBaseComponent,
  decorators: [
    moduleMetadata({
      imports: [GameBaseModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `GameBase` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const GameBase = Template.bind({});
GameBase.args = {};
