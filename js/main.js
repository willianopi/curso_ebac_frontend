$(document).ready(function () {
    // Inicializa o carrossel
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: true,
        dots: true
    });

    // Aplica máscaras aos campos de entrada
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    // Validação do formulário
    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira seu nome completo.",
            email: "Por favor, insira um endereço de e-mail válido.",
            telefone: "Por favor, insira seu telefone.",
            endereco: "Por favor, insira seu endereço completo.",
            cep: "Por favor, insira seu CEP.",
            cpf: "Por favor, insira seu CPF."
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });
});
