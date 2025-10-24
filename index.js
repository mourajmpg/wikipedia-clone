document.addEventListener('DOMContentLoaded', () => {

    const amountButtons = document.querySelectorAll('.amount-btn');
    //Seleciona o botão principal de "Doe agora"
    const donateButton = document.querySelector('.donate-btn-main');

    let selectedAmount = null;

    //ADICIONA UM eventlistener PARA CADA BOTÃO DE VALOR
    amountButtons.forEach(button => {
        button.addEventListener('click', () => {
            amountButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedAmount = button.dataset.amount; 
            
            console.log(`Valor selecionado: ${selectedAmount}`);
        });
    });

    donateButton.addEventListener('click', () => {
        //"Doe agora" é clicado

        if (selectedAmount) {
            if (selectedAmount === 'other') {
                const customAmount = prompt("Por favor, digite o valor que deseja doar:");
                if (customAmount && !isNaN(customAmount)) {
                     alert(`Obrigado pela sua doação de R$ ${customAmount}!`);
                } else if(customAmount) {
                    alert("Por favor, insira um valor numérico válido.");
                }
            } else {
                alert(`Obrigado pela sua doação de R$ ${selectedAmount}!`);
            }
        } else {
            alert("Por favor, selecione um valor para doar antes de continuar.");
        }
    });

});