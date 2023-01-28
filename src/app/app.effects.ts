import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {
  changeUpdatedAt,
  clear,
  decrease,
  increase,
  updatedAtSelector,
} from './reducers/counter';

@Injectable()
export class AppEffects {
  apdatedAt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increase, decrease, clear),
      map(() => changeUpdatedAt({ updatedAt: Date.now() }))
    )
  );
  constructor(private actions$: Actions) {}
}
