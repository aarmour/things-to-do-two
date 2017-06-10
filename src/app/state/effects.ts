import { EffectsModule } from '@ngrx/effects';

import { EventsEffects } from './events/effects';
import { FirebaseEffects } from './firebase/effects';
import { UserEffects } from './user/effects';

export const effects = [
  EffectsModule.run(EventsEffects),
  EffectsModule.run(FirebaseEffects),
  EffectsModule.run(UserEffects)
];
