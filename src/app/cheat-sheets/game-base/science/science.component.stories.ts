import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { ScienceComponent } from './science.component';
import { ScienceModule } from './science.module';

type ComponentWithCustomControls = ScienceComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Science',
  component: ScienceComponent,
  decorators: [
    moduleMetadata({
      imports: [ScienceModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Science` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Science = Template.bind({});
Science.args = {};
