import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/types';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { SpaceAgeComponent } from './space-age.component';

type ComponentWithCustomControls = SpaceAgeComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Space Age',
  component: SpaceAgeComponent,
  decorators: [
    moduleMetadata({ imports: [StorybookCsModule] }),
    // applicationConfig({ providers: [importProvidersFrom()] }),
  ],
  parameters: {
    docs: { description: { component: `SpaceAge` } },
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

export const SpaceAge: StoryObj<ComponentWithCustomControls> = {
  args: {}, // Overrides args from default
  render: (args): StoryFnAngularReturnType => ({ props: args }),
};
