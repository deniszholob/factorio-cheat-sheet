import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { MaterialProcessingComponent } from './material-processing.component';
import { MaterialProcessingModule } from './material-processing.module';

type ComponentWithCustomControls = MaterialProcessingComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Material Processing',
  component: MaterialProcessingComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialProcessingModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `MaterialProcessing` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const MaterialProcessing = Template.bind({});
MaterialProcessing.args = {};
