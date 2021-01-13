(function () {
	var setting = {
			"height": 300,
			"width": 600,
			"zoom": 17,
			"queryString": "12 Rue Frédéric Bellanger, Le Havre, France",
			"place_id": "ChIJ5S_uUS4v4EcRNhUqTpLlCvE",
			"satellite": false,
			"centerCoord": [49.49556661859054, 0.09522945000002281],
			"cid": "0xf10ae5924e2a1536",
			"lang": "fr",
			"cityUrl": "/france/cabourg-12930",
			"cityAnchorText": "Carte de Cabourg, Normandie, France",
			"id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
			"embed_id": "345685"
		};
			var d = document;
			var s = d.createElement('script');
			s.src = 'https://1map.com/js/script-for-user.js?embed_id=345685';
			s.async = true;
			s.onload = function (e) {
			window.OneMap.initMap(setting)
		};
	var to = d.getElementsByTagName('script')[0];
	to.parentNode.insertBefore(s, to);
})();