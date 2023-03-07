// Time O(h), Spade N(1)
function inorderSuccessor(root, p) {
	let sucessor = null;

	while(root) {
		if(p.val >= root.val) {
			root = root.right;
		} else {
			sucessor = root;
			root = root.left;
		}
	}
	return sucessor;
}