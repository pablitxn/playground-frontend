import { DEFAULT_LANGUAGE } from "utils/constants"

export function formateNumber(number: number) {
	// const language = navigator.language || DEFAULT_LANGUAGE;
	const language =  DEFAULT_LANGUAGE;
	return new Intl.NumberFormat(language).format(number);
}
