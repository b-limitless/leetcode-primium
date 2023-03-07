
function wallsAndGates(rooms) {
	const [ROWS, COLS] = [rooms.length, rooms[0].length];
	const visit = new Set();
	const q = [];


	const addRom = (r, c) => {
		const key = `${r}-${c}`;

		if(r < 0 || r === ROWS || 
		   c < 0 || c === COLS ||
		   visit.has(key) ||
		   rooms[r][c] !== Infinity) {
			return;
		}
		visit.add(key);
		q.push([r,c]);
	}

	// Lets create key and value for 0 room
	for(let r = 0; r < ROWS; r++) {
		for(let c = 0; c < COLS; c++){
			if(rooms[r][c] === 0) {
				const key = `${r}-${c}`;
				visit.add(key);
				q.push([r, c]);
			}
		}
	}

	console.log(visit); // {'0-2', '3-0'}
	console.log(q) // [[0-2], [3-0]]

	let dist = 0;

	while(q.length > 0) {
		const qLength = q.length;

		for(let i = 0; i < qLength; i++) {
			const [r,c] = q.shift();

			rooms[r][c] = dist;

			addRom(r + 1, c);
			addRom(r - 1, c);
			addRom(r, c + 1);
			addRom(r, c - 1);

		}
		dist++;
	}


	

}

const rooms = [
	[Infinity, -1, 0, Infinity],
	[Infinity, Infinity, Infinity, -1],
	[Infinity, -1, Infinity, -1],
	[0, -1, Infinity, Infinity],
];

console.log(wallsAndGates(rooms));

console.log(rooms);