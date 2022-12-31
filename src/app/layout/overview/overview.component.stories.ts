import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { OverviewComponent } from './overview.component';
import { OverviewModule } from './overview.module';

type ComponentWithCustomControls = OverviewComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Layout/Overview',
  component: OverviewComponent,
  decorators: [
    moduleMetadata({
      imports: [OverviewModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Overview` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Overview = Template.bind({});
Overview.args = {};
