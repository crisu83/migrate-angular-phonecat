import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  bootstrap: [RootComponent],
  declarations: [RootComponent],
})
export class Ng2AppModule {
  constructor(@Inject(UpgradeModule) public upgrade: UpgradeModule) {}
}
