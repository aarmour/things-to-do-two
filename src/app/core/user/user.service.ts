import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs/Observable';

import { pickBy } from 'ramda';

export interface UserProfile {
  gender?: number;
  birthdate?: Date;
};

@Injectable()
export class UserService {

  constructor(private auth: AngularFireAuth, private db: AngularFireDatabase) { }

  saveProfile(newProfile: UserProfile): Observable<any> {
    const data: any = pickBy((value) => typeof value !== 'undefined', newProfile);

    if (data.birthdate) {
      data.birthdate = data.birthdate.getTime();
    }

    const uid = this.auth.auth.currentUser.uid;
    const profile = this.db.object(`/user/${uid}/profile`);

    return Observable.fromPromise(profile.set(data));
  }

}
