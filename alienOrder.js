function alianWord(words) {
	const adj = {};

	// Get the unique words
	for (let word of words) {
		for (l of word) {
			adj[l] = new Set();
		}
	}

	// If the current word and next word has same prifix
	// But the current word length is greater
	for (let i = 0; i < words.length - 1; i++) {
		const current = words[i];
		const next = words[i + 1];
		const minLength = Math.min(current.length, next.length);

		if (
			current.length > next.length &&
			current.substring(0, minLength) === next.substring(0, minLength)
		) {
			return "";
		}

		for(let j = 0; j < minLength; j++) {
			if(current[j] !== next[j]) {
				adj[current[j]].add(next[j]);
				break;
			}
		}
	}

	const visit = {};
	const res = [];


	const dfs = (c) => {
		// Chcek if character is already visited 
		if(c in visit) {
			return visit[c];
		}
		visit[c] = true;

		for(nei of adj[c]) {
			if(dfs(nei)) {
				return true;
			}
		}
		visit[c] = false;
		res.push(c);
	}
	

	for(c in adj) {
		if(dfs(c)) {
			console.log("empty", dfs(c))
			return "";
		}
	}

	return res.reverse().join("");
}

const words = ["wrt", "wrf", "er", "ett", "rftt"];
const result = alianWord(words);
console.log("result", result)




