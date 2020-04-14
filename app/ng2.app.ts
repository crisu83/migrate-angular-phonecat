import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { RootComponent } from './root/root.component';
import { Ng1AppModule } from './ng1.app';

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  bootstrap: [RootComponent],
  declarations: [RootComponent],
})
export class Ng2AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [Ng1AppModule.name]);
  }
}
