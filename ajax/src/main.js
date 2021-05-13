let n = 1;
getCSS.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "/style.css");
	request.onreadystatechange = () => {
		if(request.readyState === 4) {
			if (request.status >= 200 && request.status < 300) {
				const style = document.createElement('style');
				style.innerHTML = request.response;
				document.head.appendChild(style);
			} else {
				alert('加载css失败')
			}
		}
	};
	request.send();
}
getJS.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "/getJS.js");
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			const script = document.createElement('script');
			script.innerHTML = request.response;
			document.body.appendChild(script);
		}
	};
	request.send();
}
getHTML.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "/getHTML.html");
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			const div = document.createElement('div');
			div.innerHTML = request.response;
			document.body.appendChild(div);
		}
	};
	request.send();
}
getXML.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "/getXML.xml");
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			const dom = request.responseXML;
			const text = dom.getElementsByTagName("warning")[0].textContent;
			console.log(text.trim());
		}
	};
	request.send();
}
getJSON.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "/getJSON.json");
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			const obj = JSON.parse(request.response);
			console.log(obj);
		}
	};
	request.send();
}

getPage.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", `/page${n+1}`);
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			const array = JSON.parse(request.response);
			console.log(xxx)
			xxx.innerHTML = "";
			// .empty();
			array.forEach(item => {
				const li = document.createElement("li");
				li.textContent = item.id;
				xxx.appendChild(li);
			});
			n=(n+1)%3;
		}
	};
	request.send();
}
