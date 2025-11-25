function generarArchivo() {
    const texto = document.getElementById("texto").value;
    const dias = parseInt(document.getElementById("dias").value);

    if (!texto) {
        alert("Escribe un texto antes.");
        return;
    }

    const fechaActual = new Date();
    const fechaDesbloqueo = new Date(fechaActual.getTime() + dias * 24 * 60 * 60 * 1000);

    const config = {
        unlockDate: fechaDesbloqueo.toISOString(),
        file: "content/secret.txt"
    };

    // Descargar JSON
    const blobConfig = new Blob([JSON.stringify(config, null, 4)], { type: "application/json" });
    const enlaceConfig = document.createElement("a");
    enlaceConfig.href = URL.createObjectURL(blobConfig);
    enlaceConfig.download = "config.json";
    enlaceConfig.click();

    // Descargar archivo TXT
    const blobTexto = new Blob([texto], { type: "text/plain" });
    const enlaceTexto = document.createElement("a");
    enlaceTexto.href = URL.createObjectURL(blobTexto);
    enlaceTexto.download = "secret.txt";
    enlaceTexto.click();

    document.getElementById("mensaje").innerText =
        "Archivos generados: súbelos a GitHub (config.json y content/secret.txt).";
}