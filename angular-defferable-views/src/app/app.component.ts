import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public controlFlowOperators: any[]= [
    {
      title: "@if, @else-if and @else",
      link: "if"
    },
    {
      title: "@for",
      link: "for"
    },
    {
      title: "@switch",
      link: "switch"
    },
    {
      title: "@defer",
      link: "defer"
    },
    {
      title: "@back to home",
      link: ""
    }
  ]
}
