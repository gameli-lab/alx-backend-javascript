function getResponseFromAPI() {
	return new Promise((settled, rejected) => {
		setTimeout(() => {
			const success = true;

			if (success)
				settled("API responded");
			else
				rejected("API failed");
		}, 1000);
	});
}
