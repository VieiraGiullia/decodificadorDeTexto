document.addEventListener('DOMContentLoaded', function() {
    // Função para criptografar a mensagem
    function criptografarTexto(mensagem) {
        mensagem = mensagem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        mensagem = mensagem.replace(/[^a-z ]/g, '');

        return mensagem
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    // Função para descriptografar a mensagem
    function descriptografarTexto(mensagem) {
        return mensagem
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    // Função para copiar o texto
    function copiarTexto() {
        const mensagemFinal = document.querySelector('.mensagemFinal');
        navigator.clipboard.writeText(mensagemFinal.value).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(err => {
            alert('Erro ao copiar o texto.');
        });
    }

    // Event Listener para o botão "Criptografar"
    document.querySelector('.botaoCriptografar').addEventListener('click', () => {
        const mensagemInicial = document.querySelector('.mensagemInicial');
        const entradaValor = mensagemInicial.value;
        if (!/^[a-z ]+$/.test(entradaValor)) {
            alert("Por favor, digite apenas letras minúsculas e espaços.");  
            return;
        }

        const mensagemCriptografada = criptografarTexto(entradaValor);
        const mensagemFinal = document.querySelector('.mensagemFinal');
        const imagem = document.querySelector('.img_msgnaoidentificada');
        const texto = document.querySelector('.msgnaoidentificada');

        mensagemFinal.value = mensagemCriptografada;
        imagem.style.display = 'none';
        texto.style.display = 'none';
        mensagemFinal.style.display = 'flex';
        mensagemFinal.style.justifyContent = 'space-between';
        document.querySelector('.botaoCopiar').style.display = 'block';

        mensagemInicial.value = "";
    });

    // Event Listener para o botão "Descriptografar"
    document.querySelector('.botaoDescriptografar').addEventListener('click', () => {
        const mensagemInicial = document.querySelector('.mensagemInicial');
        const entradaValor = mensagemInicial.value;
        if (!/^[a-z ]+$/.test(entradaValor)) {
            alert("Por favor, digite apenas letras minúsculas e espaços.");  
            return;
        }

        const mensagemDescriptografada = descriptografarTexto(entradaValor);
        const mensagemFinal = document.querySelector('.mensagemFinal');
        const imagem = document.querySelector('.img_msgnaoidentificada');
        const texto = document.querySelector('.msgnaoidentificada');

        mensagemFinal.value = mensagemDescriptografada;
        imagem.style.display = 'none';
        texto.style.display = 'none';
        mensagemFinal.style.display = 'flex';
        mensagemFinal.style.justifyContent = 'space-between';
        document.querySelector('.botaoCopiar').style.display = 'block';

        mensagemInicial.value = ""; 
    });

    // Event Listener para o botão "Copiar"
    document.querySelector('.botaoCopiar').addEventListener("click", copiarTexto);
});
