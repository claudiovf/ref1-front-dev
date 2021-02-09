

export const formattedPeriod = (teamName: string): string => {
    return teamName.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
};