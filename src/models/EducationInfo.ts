export type School = {
  schoolName: string;
  logo: string;
  subHeader: string;
  duration: string;
  desc: string;
  descBullets: readonly string[];
};
export type EducationInfo = {
  display: boolean;
  schools: School[];
};
