// ==============================
// audioIndex.js — Reproduce SOLO UNA VEZ y luego se "apaga"
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("toggleAudio");
  if (!boton) return;

  const sonido = new Howl({
    src: ["../assets/audio/showcase.mp3"], // sonido especial para index
    loop: false,    // ❌ NO repetir
    volume: 0.5,
    html5: true
  });

  let estaReproduciendo = false;

  boton.addEventListener("click", () => {
    if (estaReproduciendo) return; // ⛔ evita que se vuelva a reproducir

    sonido.play();
    boton.textContent = "🔊";
    estaReproduciendo = true;

    // Cuando termina → volver al ícono apagado
    sonido.once("end", () => {
      boton.textContent = "🔈";
      estaReproduciendo = false;
    });
  });
});
