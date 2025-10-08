import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type counterState = {
  counter: number;
  step: number;
};

export const counterStore = signalStore(
  withState<counterState>({
    counter: 0,
    step: 1,
  }),
  withMethods((state) => ({
    setStep: (stepBy: number) => patchState(state, { step: stepBy }),
    increment: () =>
      patchState(state, { counter: state.counter() + state.step() }),
    decrement: () =>
      patchState(state, { counter: state.counter() - state.step() }),
  })),
);
