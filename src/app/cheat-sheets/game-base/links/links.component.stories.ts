import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { LinksComponent } from './links.component';
import { LinksModule } from './links.module';

type ComponentWithCustomControls = LinksComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Links',
  component: LinksComponent,
  decorators: [
    moduleMetadata({
      imports: [LinksModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Links` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Links = Template.bind({});
Links.args = {};
