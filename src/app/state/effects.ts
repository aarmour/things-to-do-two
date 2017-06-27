import { EffectsModule } from '@ngrx/effects';

import { EventsEffects } from './events/effects';
import { FirebaseEffects } from './firebase/effects';
import { FormEffects } from './form/effects';
import { UserEffects } from './user/effects';

export const effects = [
  EffectsModule.run(EventsEffects),
  EffectsModule.run(FirebaseEffects),
  EffectsModule.run(FormEffects),
  EffectsModule.run(UserEffects)
];
