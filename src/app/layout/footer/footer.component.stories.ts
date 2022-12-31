import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { FooterComponent } from './footer.component';
import { FooterModule } from './footer.module';

type ComponentWithCustomControls = FooterComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Layout/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [FooterModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Footer` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Footer = Template.bind({});
Footer.args = {};
