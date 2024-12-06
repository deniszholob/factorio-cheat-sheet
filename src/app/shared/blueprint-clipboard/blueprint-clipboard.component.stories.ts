import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ClipboardService } from 'app/services';

import { BlueprintClipboardComponent } from './blueprint-clipboard.component';

type ComponentWithCustomControls = BlueprintClipboardComponent;

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Shared/Blueprint Clipboard',
  component: BlueprintClipboardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, HttpClientModule, NgbTooltipModule],
      declarations: [BlueprintClipboardComponent],
      providers: [ClipboardService],
    }),
  ],
  argTypes: {},
  args: {
    url: 'https://raw.githubusercontent.com/deniszholob/factorio-blueprints/master/blueprint-data/bp-train-station-colors.txt',
    tooltipPlacement: 'auto',
  },
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const BlueprintClipboard: Story = {};
