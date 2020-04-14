import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { Ng1AppModule } from './app.module.ajs';

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class Ng2AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [Ng1AppModule.name]);
  }
}
