import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from "../greeting/greeting";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Greeting],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'www.carlosmartos.com.2';
}
