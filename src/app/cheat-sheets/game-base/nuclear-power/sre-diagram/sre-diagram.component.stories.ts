import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DataService } from 'app/services';
import { SreDiagramComponent } from './sre-diagram.component';
import { SreDiagramModule } from './sre-diagram.module';

type ComponentWithCustomControls = SreDiagramComponent;

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Nuclear Power/SRE Diagram',
  component: SreDiagramComponent,
  decorators: [
    moduleMetadata({
      imports: [SreDiagramModule],
      providers: [DataService],
    }),
  ],
  args: {
    row: 2,
    column: 4,
    reactorPower: 40,
  },
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const SREMatrix: Story = {};
