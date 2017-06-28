import { Component, OnInit } from '@angular/core';

import '@ngrx/core/add/operator/select';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as userSelectors from '../../state/user/selectors';
import { State } from '../../state/state';

@Component({
  selector: 'ttd-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  profile: Observable<Object>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.profile = this.store.select(userSelectors.profile);
  }

}
