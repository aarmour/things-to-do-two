import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as form from '../../state/form/actions';
import { USER_PROFILE_FORM } from '../../state/form/constants';
import { State } from '../../state/state';

@Component({
  selector: 'ttd-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  @ViewChild(NgForm)
  ngForm: NgForm;

  genderOptions = [{ code: 0, name: 'Female' }, { code: 1, name: 'Male' }, { code: 3, name: 'I\'d rather not say' }];
  profileForm: {
    birthday?: Date,
    gender?: number,
  } = { };

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.ngForm.valueChanges.debounceTime(0)
      .subscribe(formValues => this.store.dispatch(new form.SaveFormAction({ key: USER_PROFILE_FORM, value: formValues })));
  }

}
