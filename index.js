const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.getElementById("div");

button.addEventListener("click", () => {
	SendAndCreat(input.value);
});

async function SendAndCreat(URL) {
	fetch(URL)
		.then((response) => response.json())
		.then((json) => Creat(json));
}

function Creat(JSON) {
	console.log(JSON);
	let tag = 1;
	let AllKey = getAllKeys(JSON[tag]);
	let MainDiv = document.createElement("div");
	console.log(AllKey);
	for (let index = 0; index < AllKey.length; index++) {
		let P2 = document.createElement("p");
		P2.innerHTML = AllKey[index];
		let P1 = document.createElement("p");
		console.log(JSON[tag]);
		P1.innerHTML = JSON[tag].AllKey[index];
		MainDiv.appendChild(P2);
		MainDiv.appendChild(P1);
	}
	div.appendChild(MainDiv);
}

function getAllKeys(obj) {
	let keys = [];
	for (let key in obj) {
		keys.push(key);
		if (typeof obj[key] === "object" && obj[key] !== null) {
			keys = keys.concat(getAllKeys(obj[key]));
		}
	}
	return keys;
}
