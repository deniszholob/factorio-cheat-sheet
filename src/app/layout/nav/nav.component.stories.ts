import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { NavComponent } from './nav.component';
import { NavModule } from './nav.module';

type ComponentWithCustomControls = NavComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Layout/Nav',
  component: NavComponent,
  decorators: [
    moduleMetadata({
      imports: [NavModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Nav` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Nav = Template.bind({});
Nav.args = {};
