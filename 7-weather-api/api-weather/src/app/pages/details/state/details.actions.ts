import { createAction, props } from '@ngrx/store';

import { CityDailyWeather } from '../../../shared/models/weather.model';

export const loadCurrentWeather = createAction(
  '[Home] Load Current Weather',
  props<{ query: string}>(),
);

export const loadWeatherDetails = createAction('[Details] Load Weather Details');

export const loadWeatherDetailsSuccess = createAction(
  '[Details] Load Weather Details Success',
  props<{ entity: CityDailyWeather }>(),
);

export const loadWeatherDetailsFailed = createAction('[Details] Load Weather Details Failed');
