type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export const formatDate = (date: string, dateStyle: DateStyle = 'medium', locales = 'en') =>
	new Intl.DateTimeFormat(locales, { dateStyle }).format(new Date(date));
