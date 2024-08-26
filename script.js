function encriptar() {
    const texto = document.getElementById('inputTexto').value;
    if (texto.trim() === "") {
        alert("Por favor, ingresa un texto para encriptar.");
        return;
    }

    const textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    const texto = document.getElementById('inputTexto').value;
    if (texto.trim() === "") {
        alert("Por favor, ingresa un texto para desencriptar.");
        return;
    }

    const textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    document.getElementById('outputTexto').value = texto;
    document.getElementById('outputTexto').style.display = "block";
    document.getElementById('copyButton').style.display = "block";
    document.getElementById('placeholderImage').style.display = "none";
    document.getElementById('placeholderText').style.display = "none";
}

function copiarTexto() {
    const texto = document.getElementById('outputTexto');
    texto.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
