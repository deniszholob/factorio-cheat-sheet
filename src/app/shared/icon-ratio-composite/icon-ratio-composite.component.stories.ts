import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DataService, SheetCollapseToggleService } from 'app/services';

import { FactorioIconIds } from '../factorio-icon/factorio-icon.model';
import { IconRatioCompositeComponent } from './icon-ratio-composite.component';
import { IconRatioCompositeModule } from './icon-ratio-composite.module';

type ComponentWithCustomControls = IconRatioCompositeComponent;

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Shared/IconRatioComposite',
  component: IconRatioCompositeComponent,
  decorators: [
    moduleMetadata({
      imports: [IconRatioCompositeModule],
      declarations: [],
      providers: [SheetCollapseToggleService, DataService],
    }),
  ],
  argTypes: {
    machineIconId: {
      options: FactorioIconIds,
      control: { type: 'select' },
    },
    productIconId: {
      options: FactorioIconIds,
      control: { type: 'select' },
    },
  },
  args: {
    machineIconId: FactorioIconIds.Assembling_machine_3,
    productIconId: FactorioIconIds.Advanced_circuit,
    count: 1,
    rateSeconds: 2.5,
  },
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const IconRatioComposite: Story = {};
