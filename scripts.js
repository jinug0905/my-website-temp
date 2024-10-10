document.getElementById("fun-button").addEventListener("click", function() {
    const facts = [
        "제가 그 유미쒸 핫걸이에유",
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fun-fact").innerText = randomFact;
});
