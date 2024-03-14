import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  link = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'Browse',
      link: '/browse',
    },
    {
      label: 'Trend',
      link: '/trend',
    },
    {
      label: 'Saved',
      link: '/saved',
    },
    {
      label: 'Playlist',
      link: '/playlist',
    },
  ];

  link2 = [
    {
      label: 'Setting',
      link: '/setting',
    },
    // {
    //   label: 'My Profile',
    //   link: '/profile',
    // },
  ];
}
