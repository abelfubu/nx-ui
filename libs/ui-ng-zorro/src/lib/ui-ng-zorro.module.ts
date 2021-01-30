import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgZorroModule } from '@ng-zorro';

@NgModule({
  imports: [CommonModule, NgZorroModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
})
export class UiNgZorroModule {}
