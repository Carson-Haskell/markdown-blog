type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export const formatDate = (date: string, dateStyle: DateStyle = 'long', locales = 'en') => {
	const parsedDate = new Date(date);

	if (isNaN(parsedDate.getTime())) {
		throw new RangeError('Inavlid date value');
	}

	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(parsedDate);
};
