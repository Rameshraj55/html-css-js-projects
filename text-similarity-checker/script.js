//Input and result elements
const text1Input = document.getElementById("first-text");
const text2Input = document.getElementById("second-text");
const result = document.getElementById("result");
const calculateButton = document.getElementById("calculate-btn");

// CalculateSimilarity 
let calculateSimilarity = (text1Input, text2Input) => {
    // Tokenize input texts 
    const token1 = text1Input.split(" ");
    const token2 = text2Input.split(" ");

    //create sets from the tokens to remove duplicates
    const set1 = new Set(token1);
    const set2 = new Set(token2);

    //Calculate  the intersection of the sets
    const intersection = new Set([...set1].filter((x) => set2.has(x)));

    //Calculate  the union of the sets
    const union = new Set([...set1, ...set2]);

    //Calculate  the Jaccard similarity
    const similarity = (intersection.size / union.size) *100;

    return similarity;
};

//Add click event listener to the calculate button

calculateButton.addEventListener("click", ()=>{
    const text1 = text1Input.value;
    const text2 = text2Input.value;

    const similarity = calculateSimilarity(text1,text2);
    result.textContent = similarity.toFixed(2);
})