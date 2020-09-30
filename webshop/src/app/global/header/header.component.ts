import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn = true;

  constructor(private translate: TranslateService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(userChanged => {
      this.loggedIn = !!userChanged;
    })
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  onLogout() {
    this.authService.logout();
  }
}