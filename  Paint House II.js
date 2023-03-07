function minCostII(costs) {
    let dp = [0, 0 ,0];

    for(let i = 0; i < costs.length; i++) {
        const dp0 = costs[i][0] + Math.min(dp[1], dp[2]);
        const dp1 = costs[i][1] + Math.min(dp[0], dp[2]);
        const dp2 = costs[i][2] + Math.min(dp[0], dp[1]);

        console.log(dp)
        dp = [dp0, dp1, dp2];


    }
    console.log(dp)
    return Math.min(...dp);
}

const costs = [[14,2,11],[11,14,5],[14,3,10]];

console.log(minCostII(costs))