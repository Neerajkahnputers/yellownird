import { Injectable } from '@angular/core';
import { CustomeHttpService } from '../../Common/custome-http.service';

@Injectable()
export class TemplateService {

  constructor(private customeHttpService: CustomeHttpService) { }
  GetAllTemplates() {
    return this.customeHttpService.createGeneralGetRequestArgForAttributeRoute(null, 'api/Templates/GetTemplates');
  }
}
