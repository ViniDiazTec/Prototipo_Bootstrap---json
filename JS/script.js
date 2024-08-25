document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(event.target);
    const data = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        dataEntrada: formData.get('dataEntrada'),
        dataSaida: formData.get('dataSaida'),
        observacoes: formData.get('observacoes'),
        adultos: parseInt(formData.get('adultos')),
        criancas: parseInt(formData.get('criancas'))
    };

    fetch('http://localhost:3000/reservas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Reserva enviada:', data);
        alert('Reserva enviada com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar reserva:', error);
        alert('Erro ao enviar reserva.');
    });
});
