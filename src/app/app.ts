import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from "../features/greeting/greeting";
import { Skills } from "../features/skills/skills";
import { Education } from "../features/education/education";
import { WorkExperience } from "../features/work-experience/work-experience";
import { Achievement } from "../features/achievement/achievement";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Greeting, Skills, Education, WorkExperience, Achievement],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'www.carlosmartos.com';
}
