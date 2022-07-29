for (let i = 0; i < 16 * 16; ++i) {
	let div = document.createElement('div');
	div.style = "background-color: grey; margin: 1px;"
	div.addEventListener("mouseover", () => {
		div.style = "background-color: black; margin: 1px;"
	})
	document.querySelector(".sketch-container").appendChild(div);
}