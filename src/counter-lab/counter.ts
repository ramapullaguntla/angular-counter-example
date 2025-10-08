import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: `
    <div>counter stuff goes here</div>
    <div>
      <a class="link" routerLink="ui">UI</a>
      <a calss="link" routerLink="prefs">Prefs</a>
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class Counter {}
