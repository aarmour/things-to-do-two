import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { Store } from '@ngrx/store';

import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';

import * as selectors from './state/selectors';
import * as snackBar from './state/snack-bar/actions';
import { State } from './state/state';

@Component({
  selector: 'ttd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<State>, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.store.select(selectors.snackBar.messages)
      .subscribe((messages: string[]) => {
        messages.forEach(message => {
          this.snackBar.open(message, null, { duration: 1500 });
          this.store.dispatch(new snackBar.PopMessageAction());
        });
      });
  }

}
