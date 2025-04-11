export function formatDate(date: Date): string {
    return Intl.DateTimeFormat("en-US", {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(date);
}
