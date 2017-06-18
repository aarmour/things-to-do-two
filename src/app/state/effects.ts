import { EventsEffects } from './events/effects';
import { FirebaseEffects } from './firebase/effects';
import { UserEffects } from './user/effects';

export const effects = [
  EventsEffects,
  FirebaseEffects,
  UserEffects
];
