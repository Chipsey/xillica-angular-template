import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageViewComponent } from '../landing-page/landing-page-view/landing-page-view.component';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';

@NgModule({
  declarations: [LandingPageViewComponent, TruncatePipe],
  imports: [CommonModule, LandingPageRoutingModule],
})
export class LandingPageModule {}
