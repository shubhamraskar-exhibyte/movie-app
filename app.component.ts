import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BG_IMG, LOGO_URL } from './contants/contants';
import { SidebarComponent } from './component/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netflix-clone';
  logo = LOGO_URL
  bgImage = BG_IMG
}
