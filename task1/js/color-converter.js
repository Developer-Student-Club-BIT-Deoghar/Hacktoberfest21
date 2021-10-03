let timer;
const rgbInput = document.querySelector("#rgb")
const hexInput = document.querySelector("#hex")

const elemToHex = (c) => {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
	return ("#" + elemToHex(parseInt(r)) + elemToHex(parseInt(g)) + elemToHex(parseInt(b))).toUpperCase();
}

const hexToRgb = (hex) => {
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

const rgbToHexUtil = (string) => {
	const regexp = /^rgb\(\s?(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),\s?(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),\s?(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\s?\)$/g;
	const matches = string.matchAll(regexp);
	if(regexp.test(string)){
		for (const match of matches) {
			return rgbToHex(match[1],match[2],match[3])
		}
	}
	return false;
}

document.addEventListener('input', e => {
	const el = e.target;

	if (el.matches('[data-color]')) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
		}, 100)
	}
})

hexInput.addEventListener("input",e=>{
	let value = e.target.value;
	let res = hexToRgb(value);
	if(res!==null){
		console.log(res)
		rgbInput.value = `rgb(${res.r}, ${res.g}, ${res.b})`;
		document.querySelector("#demo").style.backgroundColor = value;
	}
})

rgbInput.addEventListener("input", e => {
	let value = e.target.value;
	let res = rgbToHexUtil(value)
	if(res){
		hexInput.value = res;
		document.querySelector("#demo").style.backgroundColor=res;
	}
})