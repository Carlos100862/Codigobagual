<script>
        function saudacao() {
            alert("♣ Bem-vindo ao site sobre Desenvolvimento Web!! ♥");
        }

        function solicitarNome() {
            var nome = prompt("Qual é o seu nome?");
            if (nome != null && nome !== "") {
                alert("Olá, " + nome + "!");
            } else {
                alert("Você não inseriu seu nome.");
            }
        }

        function saida() {
            alert("♣ Muito obrigado por visitar nosso site sobre Desenvolvimento Web!! ♥");
        }

        function startQuiz() {
            var questions = [
                {
                    question: "Qual é a linguagem dominante para desenvolvimento frontend?",
                    answer: "JavaScript"
                },
                {
                    question: "Qual framework é mantido pelo Facebook para construir interfaces?",
                    answer: "React"
                },
                {
                    question: "Qual linguagem é um superset do JavaScript que adiciona tipagem estática?",
                    answer: "TypeScript"
                },
                {
                    question: "Qual framework é conhecido por seu uso em aplicativos robustos e escaláveis em Java?",
                    answer: "Spring Boot"
                },
                {
                    question: "Qual é um framework PHP moderno e expressivo?",
                    answer: "Laravel"
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