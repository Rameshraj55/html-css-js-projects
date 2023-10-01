// Initialize scores for team A and team B
let teamAScore = 0, teamBScore = 0;
const RESET_TEAM_SCORE = 0;
const TEAM_A = "teamA", TEAM_B = "teamB";

// Get references to the HTML elements that displays the scores
let teamAScoreValue = document.getElementById("teamAScore");
let teamBScoreValue = document.getElementById("teamBScore");

//Functions to INCREMENT the score for a given team
let incrementScore = (team) => {
    if (team === TEAM_A  ){
        teamAScore++;
        teamAScoreValue.textContent = teamAScore;
    }
    else if (team === TEAM_B){
        teamBScore++;
        teamBScoreValue.textContent = teamBScore;
    }
}
//Functions to DECREMENT the score for a given team
let decrementScore = (team) => {
    if (team === TEAM_A && teamAScore > RESET_TEAM_SCORE) {
        teamAScore--;
        teamAScore.textContent = teamAScore; 
    }
    else if (team === TEAM_B  && teamBScore > RESET_TEAM_SCORE){
        teamBScore--;
        teamBScoreValue.textContent = teamBScore;
    }

}
//Function to RESET both team scores  to 0
let resetScores = () => {
    teamAScore = RESET_TEAM_SCORE, teamBScore = RESET_TEAM_SCORE;
    teamAScoreValue.textContent = teamAScore;
    teamBScoreValue.textContent = teamBScore;
}