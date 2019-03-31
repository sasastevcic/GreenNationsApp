import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from 'src/fw/services/framework-config.service';
import { MenuService } from 'src/fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private fcs: FrameworkConfigService,
    private ms: MenuService
  ) {
    let config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: '../assets/images/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: '../assets/images/social-google-bw.png', alt: 'Google', link: 'http://www.google.com' },
        { imageFile: '../assets/images/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    this.fcs.configure(config);

    this.ms.items = initialMenuItems;
  }
}
