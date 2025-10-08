import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { counterStore } from '../services/counterstore';
@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  providers: [counterStore],
  template: `
    <div>
      <button
        class="btn btn-primary"
        (click)="decrement()"
        [disabled]="decrementDisabled()"
      >
        -
      </button>
      <span>{{ counter() }}</span>
      <button class="btn btn-primary" (click)="increment()">+</button>
    </div>
    <div class="mt-4">
      <div *ngIf="fizzBuzz() === 'Fizz'" class="alert alert-info border-dashed">
        Fizz
      </div>
      <div
        *ngIf="fizzBuzz() === 'Buzz'"
        class="alert alert-warning border-dashed"
      >
        Buzz
      </div>
      <div
        *ngIf="fizzBuzz() === 'FizzBuzz'"
        class="alert alert-success border-dashed"
      >
        FizzBuzz
      </div>
    </div>
  `,
  styles: ``,
})
export class Ui {
  counter = signal(0);

  increment() {
    this.counter.update((c) => c + 1);
  }
  decrement() {
    this.counter.update((c) => c - 1);
  }

  decrementDisabled = computed(() => this.counter() == 0);

  fizzBuzz = computed(() => {
    if (this.counter() === 0) {
      return '';
    }
    if (this.counter() % 3 === 0 && this.counter() % 5 === 0) {
      return 'FizzBuzz';
    }
    if (this.counter() % 3 === 0) {
      return 'Fizz';
    }
    if (this.counter() % 5 === 0) {
      return 'Buzz';
    }
    return '';
  });
}
