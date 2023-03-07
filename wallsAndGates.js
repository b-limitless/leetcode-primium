function wallsAndGates(rooms) {
	const ROWS = rooms.length;
	const COLS = rooms[0].length;
	const visit = new Set();
	const q = [];

	const addRoom = (r, c) => {
		const key = `${r}-${c}`;

		if (
			r < 0 ||
			r === ROWS ||
			c < 0 ||
			c === COLS ||
			visit.has(key) ||
			rooms[r][c] !== Infinity
		) {
			return;
		}
		visit.add(key);
		q.push([r, c]);
	};

	for (let r = 0; r < ROWS; r++) {
		for (let c = 0; c < COLS; c++) {
			// If we find the room
			if (rooms[r][c] === 0) {
				const key = `${r}-${c}`;
				q.push([r, c]);
				visit.add(key);
			}
		}
	}

	let dist = 0;

	while (q.length) {
		const qSize = q.length;

		for (let i = 0; i < qSize; i++) {
			const [r, c] = q.shift();

			rooms[r][c] = dist;

			addRoom(r + 1, c);
			addRoom(r - 1, c);
			addRoom(r, c + 1);
			addRoom(r, c - 1);
		}
		dist += 1;
	}
}

const rooms = [
	[Infinity, -1, 0, Infinity],
	[Infinity, Infinity, Infinity, -1],
	[Infinity, -1, Infinity, -1],
	[0, -1, Infinity, Infinity],
];

wallsAndGates(rooms);

console.log(rooms);