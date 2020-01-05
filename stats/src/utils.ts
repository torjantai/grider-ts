export const dateStringToDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split('/').map((s) => parseInt(s, 10));
    return new Date(year, month - 1, day);
}

export const identity = <T>(s: T): T => s;

export const parseInt10 = (s: string) => parseInt(s, 10);