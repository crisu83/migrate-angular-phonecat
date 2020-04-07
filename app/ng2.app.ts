import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { RootComponent } from './root/root.component';
import { CoreNgModule } from './core/core.module';
import { PhoneNgModule } from './core/phone/phone.module';
import { PhoneDetailNgModule } from './phone-detail/phone-detail.module';
import { PhoneListNgModule } from './phone-list/phone-list.module';

@NgModule({
  imports: [BrowserModule, UpgradeModule, CoreNgModule, PhoneNgModule, PhoneDetailNgModule, PhoneListNgModule],
  bootstrap: [RootComponent],
  declarations: [RootComponent],
})
export class Ng2AppModule {
  constructor(@Inject(UpgradeModule) public upgrade: UpgradeModule) {}
}
