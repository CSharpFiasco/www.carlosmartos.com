import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from "../greeting/greeting";
import { Skills } from "../skills/skills";
import { Education } from "../education/education";
import { WorkExperience } from "../work-experience/work-experience";
import { Achievement } from "../achievement/achievement";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Greeting, Skills, Education, WorkExperience, Achievement],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'www.carlosmartos.com.2';
}
