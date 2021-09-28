new Glide(".glide", {
	type: "carousel",
	gap: 20,
	startAt: 1,
	perView: 4,
	breakpoints: {
		1440: {
			perView: 4,
		},
		1200: {
			perView: 3,
		},
		1024: {
			perView: 2,
		},
		600: {
			perView: 1,
		},
	},
}).mount();
