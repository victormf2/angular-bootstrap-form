import { Component } from '@angular/core';
import { AppToastsService } from './app-toasts/app-toasts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootstrap-form';
  user = new User()
  
  constructor(public toastsService: AppToastsService) {
    
  }

  onSubmit() {
    this.toastsService.show(JSON.stringify(this.user))
  }
}

class User {
  name: string
  email: string
  password: string
}
