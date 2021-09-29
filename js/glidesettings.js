new Glide(".glide", {
	type: "carousel",
	gap: 0,
	startAt: 0,
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
