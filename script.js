
document.getElementById('enviarPedido').addEventListener('click', function () {
    const formData = new FormData(document.getElementById('pedidoForm'));
    const pedido = [];
    
    formData.forEach((value, key) => {
        pedido.push(`${key}: ${value}`);
    });
    
    const mensaje = `Hola, quiero pedir lo siguiente: \n${pedido.join("\n")}`;
    const url = `https://wa.me/50584751878?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});
