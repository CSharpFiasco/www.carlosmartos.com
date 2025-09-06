import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from "../features/greeting/greeting";
import { Skills } from "../features/skills/skills";
import { Education } from "../features/education/education";
import { WorkExperience } from "../features/work-experience/work-experience";
import { Achievement } from "../features/achievement/achievement";
import { Title, Meta } from '@angular/platform-browser';
import { type WithContext, type ProfilePage } from 'schema-dts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Greeting, Skills, Education, WorkExperience, Achievement],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://carlosmartos.com/',
    mainEntity: {
      '@id': '#main-author',
      '@type': 'Person',
      name: 'Carlos Martos',
      sameAs: ['https://www.linkedin.com/in/carlos-k-martos', 'https://github.com/csharpfiasco'],
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          '@id': 'https://utulsa.edu/',
          name: 'The University of Tulsa',
        },
        {
          '@type': 'Corporation',
          name: 'QuikTrip Corporation',
        },
      ],
      worksFor: {
        '@type': 'Corporation',
        name: 'Hogan Assessments',
        url: 'https://www.hoganassessments.com/',
      },
      jobTitle: 'Software Engineer',
      knowsAbout: [
        'https://en.wikipedia.org/wiki/TypeScript',
        'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
        'https://en.wikipedia.org/wiki/JavaScript',
        'https://en.wikipedia.org/wiki/HTML',
        'https://en.wikipedia.org/wiki/CSS',
        'https://en.wikipedia.org/wiki/Angular_(web_framework)',
        'https://en.wikipedia.org/wiki/.NET',
        'https://en.wikipedia.org/wiki/Microsoft_SQL_Server',
        'https://en.wikipedia.org/wiki/Query_plan',
        'https://en.wikipedia.org/wiki/Cosmos_DB',
        'https://en.wikipedia.org/wiki/GraphQL',
        'https://en.wikipedia.org/wiki/Azure_DevOps_Server',
        'https://en.wikipedia.org/wiki/Microsoft_Azure',
        'https://en.wikipedia.org/wiki/CI/CD',
        'https://en.wikipedia.org/wiki/Agile_software_development',
        'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)',
        'https://en.wikipedia.org/wiki/Unit_testing',
        'https://en.wikipedia.org/wiki/Swagger_(software)',
        'https://en.wikipedia.org/wiki/Cypress_(software)',
        'https://en.wikipedia.org/wiki/Entity_Framework',
        'https://en.wikipedia.org/wiki/Visual_Studio',
        'https://en.wikipedia.org/wiki/Visual_Studio_Code',
        'https://en.wikipedia.org/wiki/IBM_Db2',
      ],
    },
    dateModified: new Date().toISOString(),
  } as const satisfies WithContext<ProfilePage>;

  private readonly indexPageDescription =
  'I am a software Developer experienced in .NET and SQL Server development as well as Angular. I focus on web app refactoring and query tuning.';

  constructor() {
    const titleService = inject(Title);
    const metaService = inject(Meta);

    titleService.setTitle('Carlos Martos Portfolio');
    metaService.addTag(
      { name: 'description', content: this.indexPageDescription }
    )

  }

  ngOnInit(): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(this.profilePageSchema);
    document.head.appendChild(script);
  }
}
