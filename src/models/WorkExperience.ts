export type WorkExperience = {
  role: string;
  company: string;
  companyLogo: string;
  date: string;
  desc: string;
  descBullets: readonly string[];
  backgroundColor: readonly [number, number, number]
};
export type WorkExperienceSection = {
  viewExperiences: boolean;
  experience: readonly WorkExperience[];
};
