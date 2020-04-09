import { Component } from '@angular/core';

@Component({
  selector: 'root-component',
  template: `
    <div class="view-container">
      <div class="ng-view"></div>
    </div>
  `,
})
export default class RootComponent {}
