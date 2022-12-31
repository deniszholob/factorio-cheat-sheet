import { NgModule } from '@angular/core';
import { FooterModule } from './footer/footer.module';
import { IntroModule } from './intro/intro.module';
import { MainModule } from './main/main.module';
import { NavModule } from './nav/nav.module';
import { OverviewModule } from './overview/overview.module';

@NgModule({
  exports: [FooterModule, MainModule, IntroModule, NavModule, OverviewModule],
})
export class LayoutModule {}
