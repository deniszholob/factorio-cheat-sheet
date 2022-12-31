import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { OilRefiningComponent } from './oil-refining.component';
import { OilRefiningModule } from './oil-refining.module';

type ComponentWithCustomControls = OilRefiningComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Oil Refining',
  component: OilRefiningComponent,
  decorators: [
    moduleMetadata({
      imports: [OilRefiningModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `OilRefining` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const OilRefining = Template.bind({});
OilRefining.args = {};
