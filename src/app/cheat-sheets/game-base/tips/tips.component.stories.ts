import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { TipsComponent } from './tips.component';
import { TipsModule } from './tips.module';

type ComponentWithCustomControls = TipsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Tips',
  component: TipsComponent,
  decorators: [
    moduleMetadata({
      imports: [TipsModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Tips` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Tips = Template.bind({});
Tips.args = {};
