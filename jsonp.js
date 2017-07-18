(function() {

	var Jsonp = {
		count: 0, // 回调函数序号
		prefix: "jsonp_callback_", // 回调函数名前缀
		
		get: function(url, data, success) {
			var cbName,
				match = url.match(/callback=(\w+)/);

			if (match && match[1]) {
				cbName = match[1];
			} else {
				cbName = this.prefix + Date.now() + this.count++;
				if (match) {
					url += cbName;
				} else {
					url += (url.indexOf("?") > -1 ? "&" : "?") + "callback=" + cbName;
				}
			}
			window[cbName] = function(rspData) {
				success(rspData);
			}

			if (typeof data === "string") {
				url += "&" + data.replace(/^\?|^&/, "");
			} else if (typeof data === "object") {
				for (var i in data) {
					url += "&" + i + "=" + data[i];
				}
			}

			this.createScript(url);
		},

		createScript: function(url) {
			var script = document.createElement("script");
			script.src = url;
			document.head.appendChild(script);
			document.head.removeChild(script);
		}
	};

	window.Jsonp = {
		get: Jsonp.get.bind(Jsonp)
	};

}());