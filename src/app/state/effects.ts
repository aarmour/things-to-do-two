import { EffectsModule } from '@ngrx/effects';

import { EventsEffects } from './events/effects';
import { UserEffects } from './user/effects';

export const effects = [
  EffectsModule.run(EventsEffects),
  EffectsModule.run(UserEffects)
];
