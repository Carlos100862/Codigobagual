<script>
    function saudacao() {
        alert("♣ Bem-vindo ao site dos Indígenas!! ♥");
        }

    function solicitarNome() {
            var nome = prompt("Qual é o nome do indígena?");
    if (nome != null && nome !== "") {
        alert("Olá, " + nome + "!");
            } else {
        alert("Você não inseriu seu nome de indígena.");
            }
        }

    function saida() {
        alert("♣ Muito obrigado por comparecer ao site sobre as linguagens de programação!! ♥");
        }

    function startQuiz() {
            var questions = [
    {
        question: "Qual linguagem é amplamente utilizada em ciência de dados?",
    answer: "python"
                },
    {
        question: "Qual é a linguagem principal para desenvolvimento web?",
    answer: "javascript"
                },
    {
        question: "Qual linguagem é recomendada para desenvolvimento Android?",
    answer: "java"
                },
    {
        question: "Qual é a principal engine de jogos que utiliza C#?",
    answer: "Unity"
                },
    {
        question: "Qual é a linguagem usada frequentemente para desenvolvimento de sistemas operacionais e jogos?",
    answer: "C++"
                }
    ];

    for (var i = 0; i < questions.length; i++) {
                var userAnswer = prompt(questions[i].question);
    if (userAnswer != null && userAnswer.trim() !== "") {
                    if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
        alert("Correto!");
                    } else {
        alert("Errado! A resposta correta é: " + questions[i].answer);
                    }
                } else {
        alert("Você não inseriu sua resposta.");
                }
            }
        }
</script>