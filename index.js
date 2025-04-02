const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.getElementById("div");

button.addEventListener("click", () => {
	SendAndCreat(input.value);
});

async function SendAndCreat(URL) {
	fetch(URL)
		.then((response) => response.json())
		.then((json) => create(json));
}

function create(jsonData) {
	for (let tag = 0; tag < jsonData.length; tag++) {
		let MainDiv = document.createElement("div");
		if (jsonData[tag]) {
			let allKeys = Object.keys(jsonData[tag]);
			for (let index = 0; index < allKeys.length; index++) {
				let P2 = document.createElement("p");
				P2.innerHTML = [allKeys[index]];
				let P1 = document.createElement("p");
				P1.innerHTML = jsonData[tag][allKeys[index]];
				MainDiv.appendChild(P2);
				MainDiv.appendChild(P1);
			}
			div.appendChild(MainDiv);
		} else {
			console.log("L'index spécifié n'existe pas dans l'objet JSON.");
		}
	}
}
