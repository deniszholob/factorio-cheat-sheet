import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/types';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { PowerSolarComponent } from './power-solar.component';

type ComponentWithCustomControls = PowerSolarComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Power Solar',
  component: PowerSolarComponent,
  decorators: [
    moduleMetadata({ imports: [StorybookCsModule] }),
    // applicationConfig({ providers: [importProvidersFrom()] }),
  ],
  parameters: {
    docs: { description: { component: `PowerSolar` } },
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

export const PowerSolar: StoryObj<ComponentWithCustomControls> = {
  render: (args): StoryFnAngularReturnType => ({ props: args }),
};
