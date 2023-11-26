export type WorkExperience = {
  role: string;
  company: string;
  companylogo: string;
  date: string;
  desc: string;
  descBullets: readonly string[];
};
export type WorkExperienceSection = {
  viewExperiences: boolean;
  experience: readonly WorkExperience[];
};
