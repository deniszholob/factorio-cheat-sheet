import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { ModulesAndBeaconsComponent } from './modules-and-beacons.component';
import { ModulesAndBeaconsModule } from './modules-and-beacons.module';

type ComponentWithCustomControls = ModulesAndBeaconsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Modules And Beacons',
  component: ModulesAndBeaconsComponent,
  decorators: [
    moduleMetadata({
      imports: [ModulesAndBeaconsModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `ModulesAndBeacons` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const ModulesAndBeacons = Template.bind({});
ModulesAndBeacons.args = {};
