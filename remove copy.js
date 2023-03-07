function alianWord(words) {
	// Save the adjes
	const adj = {};

	// Create the map for each unique letter
	const uniqueLetter = new Set([...words.join("")]);

	for (let l of uniqueLetter) {
		adj[l] = new Set();
	}

	for (let i = 0; i < words.length - 1; i++) {
		const curr = words[i];
		const next = words[i + 1];
		const minLength = Math.min(curr.length, next.length);

		if (
			curr > minLength &&
			curr.substring(0, minLength) === next.substring(0, minLength)
		) {
			return "";
		}

		for(let j = 0; j < minLength; j++) {
			if(curr[j] !== next[j]) {
				adj[curr[j]].add(next[j]);
			}
		}
	}

	const visisted = {};
	const res = [];

	const dfs = (c) => {
		if(c in visisted) {
			return visisted[c];
		}

		visisted[c] = true;

		for(let nei of adj[c]) {
			if(dfs(nei)) {
				return true;
			}
		}
		visisted[c] = false;
		res.push(c);
	}

	for(let c in adj) {
		if(dfs(c)) {
			return "";
		}
	}

	return res.reverse().join("");
}

const words = ["wrt", "wrf", "er", "ett", "rftt"];
const result = alianWord(words);
console.log("result", result);