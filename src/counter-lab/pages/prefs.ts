import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <h3>Select Increment/Decrement Value</h3>
      <button (click)="setPreference(1)">Count by 1</button>
      <button (click)="setPreference(3)">Count by 3</button>
      <button (click)="setPreference(5)">Count by 5</button>
    </div>
  `,
  styles: ``,
})
export class Prefs {
  setPreference(value: number) {}
}
