import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { TrainColorsComponent } from './train-colors.component';
import { TrainColorsModule } from './train-colors.module';

type ComponentWithCustomControls = TrainColorsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Train Colors',
  component: TrainColorsComponent,
  decorators: [
    moduleMetadata({
      imports: [TrainColorsModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `TrainColors` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const TrainColors = Template.bind({});
TrainColors.args = {};
