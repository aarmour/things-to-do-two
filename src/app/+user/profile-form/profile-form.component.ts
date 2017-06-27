import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import * as form from '../../state/form/actions';
import { USER_PROFILE_FORM } from '../../state/form/constants';
import { form as selectors } from '../../state/selectors';
import { State } from '../../state/state';

@Component({
  selector: 'ttd-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnDestroy, OnInit {

  @ViewChild(NgForm)
  ngForm: NgForm;

  formValueSubscription: Subscription;
  profileFormSubscription: Subscription;
  genderOptions = [{ code: 1, name: 'Female' }, { code: 2, name: 'Male' }, { code: 3, name: 'I\'d rather not say' }];
  profileForm: {
    birthdate?: Date,
    gender?: number,
  } = { };

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new form.FetchFormAction({ key: USER_PROFILE_FORM }));

    this.profileFormSubscription = this.store.select(selectors.profileForm)
      .subscribe((profileForm) => this.profileForm = profileForm);

    this.formValueSubscription = this.ngForm.valueChanges
      .debounceTime(1000)
      .subscribe(formValues => {
        if (this.ngForm.pristine) {
          return;
        }
        this.store.dispatch(new form.SaveFormAction({ key: USER_PROFILE_FORM, value: formValues }));
      });
  }

  ngOnDestroy() {
    this.formValueSubscription.unsubscribe();
    this.profileFormSubscription.unsubscribe();
  }

}
