import { Pipe, PipeTransform } from '@angular/core';

// Created using the following ng cli command: ng g pipe duration

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1: return 'Half Hour'
      case 2: return 'One Hour'
      case 3: return 'Half Day'
      case 4: return 'Full Day'
      default: return value.toString()
    }
  }

}
