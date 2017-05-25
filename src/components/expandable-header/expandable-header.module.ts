import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpandableHeaderComponent } from './expandable-header';

@NgModule({
  declarations: [
    ExpandableHeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(ExpandableHeaderComponent),
  ],
  exports: [
    ExpandableHeaderComponent
  ]
})
export class ExpandableHeaderComponentModule {}
