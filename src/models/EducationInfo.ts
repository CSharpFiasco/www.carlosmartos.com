export type School = {
    schoolName: string;
    logo: string;
    subHeader: string;
    duration: string;
    desc: string;
    descBullets: string[];
};
export type EducationInfo = {
    display: boolean;
    schools: School[];
}