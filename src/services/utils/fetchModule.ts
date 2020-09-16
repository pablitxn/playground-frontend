type IFetchModule = (
	url: string,
	token: string,
	method?: string,
	payload?: any,
	json?: boolean
) => any;

export const fetchModule: IFetchModule = async (
	url,
	token,
	method,
	payload,
	json
) => {
	// Setting headers
	const contentType = {
		json: "application/json",
		encoded: "application/x-www-form-urlencoded;charset=UTF-8"
	};
	const requestOptions = {
		crossDomain: true,
		method: method ?? "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": json ? contentType.json : contentType.encoded,
			"X-Auth-Token": token
		},
		body: payload
	};
	// Request
	try {
		const response = await fetch(url, requestOptions);
		const { data } = await response.json();
		return { response, data };
	} catch (err) {
		console.log(`fetchModule error -> ${err}`);
	}
};
