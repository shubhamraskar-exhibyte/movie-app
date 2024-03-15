import { Component } from "@angular/core";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MovieService } from "../../service/movie.service";
import { BG_IMG } from "../../constants/constants";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
})
export class SidebarComponent {
  link = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Browse",
      link: "/browse",
    },
    {
      label: "Trend",
      link: "/trend",
    },
    {
      label: "Saved",
      link: "/saved",
    },
  ];
  constructor(private router: Router, private bgDefault: MovieService) {}

  link2 = [
    {
      label: "Setting",
      link: "/setting",
    },
  ];

  navigation() {
    // this.router.navigate([`${type}`]);
    this.bgDefault.setDefaultImage(BG_IMG);
  }
}
