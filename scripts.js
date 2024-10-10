document.getElementById("fun-button").addEventListener("click", function() {
    const facts = [
        "Did you know? Potatoes were the first food to be grown in space!",
        "Fun fact: Potatoes can be used to generate electricity in simple science experiments.",
        "Potatoes are 80% water!",
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fun-fact").innerText = randomFact;
});
