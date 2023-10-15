document.addEventListener("DOMContentLoaded", function () {
const leaderboardData = {
    "Sampath": {
        "match_predicton_score": 33,
        "most_runs_predicton_score": 8,
        "most_wickets_prediction_score": 19
    },
    "Yeswanth": {
        "match_predicton_score": 38,
        "most_runs_predicton_score": 11,
        "most_wickets_prediction_score": 13
    },
    "Charan": {
        "match_predicton_score": 28,
        "most_runs_predicton_score": 13,
        "most_wickets_prediction_score": 18
    },
    "Neeraj": {
        "match_predicton_score": 28,
        "most_runs_predicton_score": 16,
        "most_wickets_prediction_score": 13
    },
    "Manoj": {
        "match_predicton_score": 25,
        "most_runs_predicton_score": 13,
        "most_wickets_prediction_score": 13
    },
    "Laksman": {
        "match_predicton_score": 33,
        "most_runs_predicton_score": 8,
        "most_wickets_prediction_score": 13
    },
    "Durga Raj": {
        "match_predicton_score": 25,
        "most_runs_predicton_score": 5,
        "most_wickets_prediction_score": 13
    },
    "ManiKanta": {
        "match_predicton_score": 33,
        "most_runs_predicton_score": 6,
        "most_wickets_prediction_score": 8
    },
    "Sathvik": {
        "match_predicton_score": 10,
        "most_runs_predicton_score": 3,
        "most_wickets_prediction_score": 5
    }
};


// Sort leaderboardData based on total score in descending order
const sortedLeaderboardData = Object.entries(leaderboardData)
    .sort(([, a], [, b]) => (b.match_predicton_score + b.most_runs_predicton_score + b.most_wickets_prediction_score) - (a.match_predicton_score + a.most_runs_predicton_score + a.most_wickets_prediction_score))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

console.log(sortedLeaderboardData);

    // Calculate total score and sort the leaderboard
    const leaderboardArray = Object.entries(leaderboardData).map(([player, scores]) => {
        const totalScore = scores.match_predicton_score + scores.most_runs_predicton_score + scores.most_wickets_prediction_score;
        return { player, ...scores, totalScore };
    }).sort((a, b) => b.totalScore - a.totalScore);

    // Populate the leaderboard table
    const tableBody = document.querySelector("#leaderboard-table tbody");
    leaderboardArray.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.player}</td>
            <td>${entry.match_predicton_score}</td>
            <td>${entry.most_runs_predicton_score}</td>
            <td>${entry.most_wickets_prediction_score}</td>
            <td>${entry.totalScore}</td>
        `;
        tableBody.appendChild(row);
    });
});
