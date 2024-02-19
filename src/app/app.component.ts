import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly http = inject(HttpClient);

  //server side rendering
  links$ = this.http.get<any>("https://bsite.net/metalflap/link");
  guias$ = this.http.get<any>("https://bsite.net/metalflap/gj_juegos");

  //client side rendering
  getData() {
    this.links$ = this.http.get<any>("https://bsite.net/metalflap/link");
  }
}
