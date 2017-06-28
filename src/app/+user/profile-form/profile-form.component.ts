import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';

import 'rxjs/add/operator/withLatestFrom';
import { Subscription } from 'rxjs/Subscription';

import * as form from '../../state/form/actions';
import * as formSelectors from '../../state/form/selectors';
import * as snackBar from '../../state/snack-bar/actions';
import { USER_PROFILE_FORM } from '../../state/form/constants';
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
    bio?: string
  } = { };

  errors: any = { };

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.profileFormSubscription = this.store.select(formSelectors.profileForm)
      .subscribe((profileForm) => this.profileForm = profileForm);

    this.formValueSubscription = this.ngForm.valueChanges
      .debounceTime(1000)
      .subscribe((formValues) => {
        if (this.ngForm.pristine) {
          return;
        }
        if (this.ngForm.invalid) {
          this.store.dispatch(new snackBar.PushMessageAction({ message: 'Unable to save profile' }));
          return;
        }
        this.store.dispatch(new form.SaveFormAction({ key: USER_PROFILE_FORM, value: formValues }));
      });

    this.store.dispatch(new form.FetchFormAction({ key: USER_PROFILE_FORM }));
  }

  ngOnDestroy() {
    this.formValueSubscription.unsubscribe();
    this.profileFormSubscription.unsubscribe();
  }

}
