import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { InserterThroughputComponent } from './inserter-throughput.component';
import { InserterThroughputModule } from './inserter-throughput.module';

type ComponentWithCustomControls = InserterThroughputComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Inserter Throughput',
  component: InserterThroughputComponent,
  decorators: [
    moduleMetadata({
      imports: [InserterThroughputModule, StorybookCsModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `InserterThroughput` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const InserterThroughput = Template.bind({});
InserterThroughput.args = {};
