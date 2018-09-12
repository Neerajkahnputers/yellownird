import { Injectable } from '@angular/core';
@Injectable()
export class NotificationService {
  constructor() { }
  success(message) {
    alert(message);
  }
  error(message) {
    alert(message);
  }
}
