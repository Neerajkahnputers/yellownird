import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'safeImage'
})
export class SafeImagePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}
