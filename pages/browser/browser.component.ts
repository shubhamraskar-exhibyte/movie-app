import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-browser',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.scss'
})
export class BrowserComponent {

}
