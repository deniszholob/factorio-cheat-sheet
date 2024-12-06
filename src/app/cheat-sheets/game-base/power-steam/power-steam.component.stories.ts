import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/types';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { PowerSteamComponent } from './power-steam.component';

type ComponentWithCustomControls = PowerSteamComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Power Steam',
  component: PowerSteamComponent,
  decorators: [
    moduleMetadata({ imports: [StorybookCsModule] }),
    // applicationConfig({ providers: [importProvidersFrom()] }),
  ],
  parameters: {
    docs: { description: { component: `PowerSteam` } },
    // layout: 'fullscreen',
  },
  argTypes: {
    /** === Input Mapping === */
    // input: { options: ['---', ...Object.values(YourEnum)], mapping: YourEnum & { '---': undefined }, control: { type: 'select' }}
    /** === Output Actions === */
    // inputChange: { action: 'inputChange', table: { disable: true } }
    /** === Control Hide === */
    // someControl: { table: { disable: true } }
    /** === Control Disable === */
    // someControl: { control: { disable: true } }
  },
  args: {},
};
export default meta;

export const PowerSteam: StoryObj<ComponentWithCustomControls> = {
  args: {}, // Overrides args from default
  render: (args): StoryFnAngularReturnType => ({ props: args }),
};
