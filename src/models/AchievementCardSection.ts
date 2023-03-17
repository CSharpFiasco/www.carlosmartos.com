export type FooterLink = {
    name: string;
    url: string;
};

export type AchievementCardInfo = {
    title: string;
    subtitle: string;
    image: string;
    footerLink: FooterLink[];
};

export type AchievementCardSection = {
    title: string;
    subtitle: string | null;
    achievementsCards: AchievementCardInfo[];
};