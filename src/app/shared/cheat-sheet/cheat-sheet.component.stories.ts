import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DataService, SheetCollapseToggleService } from 'app/services';
import { AdSenseComponent } from '../ad-sense/ad-sense.component';
import { AdSenseModule } from '../ad-sense/ad-sense.module';
import { FactorioIconComponent } from '../factorio-icon/factorio-icon.component';
import {
  FactorioIcon as Icon,
  FactorioIconIds,
} from '../factorio-icon/factorio-icon.model';
import { CheatSheetComponent } from './cheat-sheet.component';
import { CheatSheet as Sheet } from './cheat-sheet.model';

const dataService = new DataService();

type ComponentWithCustomControls = CheatSheetComponent &
  Sheet & { iconId: FactorioIconIds; content: string };

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Shared/Cheat Sheet',
  component: CheatSheetComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, AdSenseModule, NgbCollapseModule],
      declarations: [FactorioIconComponent],
      providers: [SheetCollapseToggleService],
    }),
  ],
  argTypes: {
    iconId: {
      options: FactorioIconIds,
      control: { type: 'select' },
    },
    cheatSheet: {
      control: { disable: true },
      // table: { disable: true },
    },
    collapseSub: {
      control: { disable: true },
    },
  },
  args: {
    iconId: FactorioIconIds.Advanced_circuit,
    title: 'Title',
    isCollapsed: false,
    content: 'Cheat Sheet Contents',
    cheatSheet: new Sheet(new Icon(''), ''),
  },
  render(args) {
    args.cheatSheet = dataService.getCheatSheet({
      title: args.title,
      icon: args.iconId,
    });
    return {
      props: args,
      // template: `<app-cheat-sheet cheatSheet="cheatSheet">${args.content}</app-cheat-sheet>`,
    };
  },
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const CheatSheet: Story = {};
