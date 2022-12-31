import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntroComponent } from './intro.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IntroComponent],
  exports: [IntroComponent],
})
export class IntroModule {}
