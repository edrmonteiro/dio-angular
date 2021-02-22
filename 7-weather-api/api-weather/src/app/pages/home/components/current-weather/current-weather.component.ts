import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityWeather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'erm-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent{


  @Input() cityWeather: CityWeather;
  @Output() toggleBookmark = new EventEmitter();

  get cityName():string {
    return `${this.cityWeather.city.name}, ${this.cityWeather.city.country}`;

  }

  constructor() { }


  onToggleBookmark() {
    this.toggleBookmark.emit();
  }

}
