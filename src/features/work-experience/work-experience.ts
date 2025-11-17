import { Component } from '@angular/core';
import { RgbPipe } from '../../pipes/rgb-pipe';

@Component({
  selector: 'app-work-experience',
  imports: [RgbPipe],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss'
})
export class WorkExperience {
  protected readonly workExperiences = [
    {
      role: 'Software Developer',
      company: 'Hogan Assessments',
      companyLogo: '/images/hogan-logo.svg',
      date: 'March 2023 – Current',
      desc: '.NET 8/Cosmos DB/Angular',
      descBullets: [
        'Microservices',
        'Event-driven architecture',
        'API development (.NET/GraphQL)',
        'E2E Tests (Cypress/Playwright)',
        'Unit Tests (Jasmine/xUnit)',
        'Front-end development (Angular)',
        'Redux (NgRx)',
        'Storybook',
        'Azure DevOps',
      ],
      backgroundColor: [4, 4, 4],
    },
    {
      role: 'Software Developer II',
      company: 'QuikTrip',
      companyLogo: '/images/quiktrip-logo.svg',
      date: 'March 2021 – March 2023',
      desc: '.NET 6/MSSQL/Angular',
      descBullets: [
        'API development (OData/EF Core/Swagger)',
        'Database design (SQL Server)',
        'Front-end development (Angular)',
        'Unit Tests (xUnit/Jasmine)',
        'ETL (SSIS)',
        'Mobile development (Angular/Ionic)',
        'Azure DevOps',
        'IBM DB2',
        'JD Edwards E1',
        'JD Edwards E1 Orchestrator',
        'Claris FileMaker',
      ],
      backgroundColor: [9, 6, 6],
    },
    {
      role: 'Technical Lead',
      company: 'Techsico',
      companyLogo: '/images/techsico-logo.svg',
      date: 'August 2020 – March 2021',
      desc: '.NET Core/MSSQL/ReactJS/Tailwind CSS',
      descBullets: [
        'Head of Web Development',
        'Maintained legacy internal management VB.NET system',
        'Train junior developers in ReactJS and .NET Core',
        'Maintained policies for AWS IAM',
        'Managed public DNS names to load balancers via Route53',
        'Maintained .NET Core API',
        'Managed relational database including architecture and security',
        "Product owner for Techsico's code infrastructure",
        'DocuSign integration',
      ],
      backgroundColor: [20, 52, 116],
    },
    {
      role: 'Fullstack Developer',
      company: 'Spherexx',
      companyLogo: '/images/SpherexxLogo.webp',
      date: 'September 2017 – August 2020',
      desc: 'Classic ASP/.NET Framework/MSSQL/jQuery',
      descBullets: [
        'Custom site builds for property management companies',
        'Content management systems in Classic ASP and ASP.NET',
        'Dashboards in .NET Framework with Vue frontend',
        'Maintained multi-company beer distribution systems',
        'Developer and Project Lead',
        'Moved projects to version control (TFS)',
        "Payment gateway with Square's Payment API",
      ],
      backgroundColor: [4, 12, 36],
    },
    {
      role: 'Student Researcher',
      company: 'University of Tulsa',
      companyLogo: '/images/the-university-of-tulsa.svg',
      date: 'September 2015 – April 2016',
      desc: '',
      descBullets: [
        'Research involved utilizing information foraging techniques to better understand how to improve human-information interaction in source code repositories by MATLAB and App Inventor',
        'Published in the 2016 IEEE Symposium on Visual Languages and Human-Centric Computing',
      ],
      backgroundColor: [4, 12, 36],
    },
  ] as const;

}
