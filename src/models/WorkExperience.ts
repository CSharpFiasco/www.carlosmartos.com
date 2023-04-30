export type WorkExperience = {
  role: string;
  company: string;
  companylogo: string;
  date: string;
  desc: string;
  descBullets: string[];
};
export type WorkExperienceSection = {
  viewExperiences: boolean;
  experience: WorkExperience[];
};
