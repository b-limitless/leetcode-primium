function validTree(n, edges) {
   // write your code here
   if(!n) {
      return true;
   }

   const adj = {};

   for(let i = 0; i < n; i++) {
      adj[i] = [];
   }

   // Let iterate through the nodes add add to list 
   edges.forEach(([n1, n2]) => {
      adj[n1].push(n2);
      adj[n2].push(n1);
   });

   console.log(adj)

   const visited = new Set();

   const dfs = (i, prev) => {
      // Check that node is already visited
      if(visited.has(i)) {
         return false;
      }

      // Add the i to visited 
      visited.add(i);

      for(let j of adj[i]) {
         if(j === prev) {
             continue;
         }
         // Check its dfs for the i and j
         if(!dfs(j, i)) {
            return false;
         }
      }
      return true;

   }

   return dfs(0, -1) && n === visited.size;
}

let edges = [[0,1],[0,2],[0,3],[1,4]];
let n = 5;

edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
//Output: false.

console.log(validTree(n, edges));