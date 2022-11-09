import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./services/weather.service";
import {WeatherData} from "./models/weather.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {
  }

  cityName: string = 'Lodz'
  /*countryName: string = 'Poland'*/
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName/*, this.countryName*/);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName/*, this.countryName*/);
    this.cityName = '';
    /*this.countryName = '';*/
  }

  private getWeatherData(cityName: string/*, countryName: string*/) {
    this.weatherService.getWeatherData(cityName/*, countryName*/)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
        }
      })
  }
}
