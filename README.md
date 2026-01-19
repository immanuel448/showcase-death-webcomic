# 🎭 Showcase: Death
### *“Una exposición sobre el fin y lo que dejamos en el lienzo.”*

**Showcase: Death** es una historieta digital / webcomic experimental creada como parte de una narrativa visual inspirada en la relación entre el arte, la memoria y la muerte.  
Cada escena combina ilustración, texto y ambientación sonora para construir una experiencia introspectiva.  
El primer acto, **“El trazo detenido | Recuerdo”**, relata la historia de **Vincent**, un pintor que confronta sus recuerdos de infancia y los demonios de su pasado artístico.

---

## 🧩 Estructura del proyecto
```text
showcase-death-webcomic/
│
├── index.html                    # Página principal del cómic
│
├── capitulos/                    # Cada acto (capítulo) del webcómic
│   ├── base.html                 # Plantilla base
│   ├── PrimerActo.html
│   ├── SegundoActo.html
│   ├── ...
│
├── assets/
│   ├── audio/
│   │   └── lluvia.mp3           # Efectos de sonido
│   │
│   ├── img/
│   │   ├── cap1/                # Imágenes del Acto 1
│   │   ├── cap2/                # Imágenes del Acto 2
│   │   ├── ...
│   │
│   ├── actos.webp               # Portada lista de actos
│   ├── fondo.webp               # Fondo general del sitio               
│   └── fondo2.webp                
│
├── css/
│   └── estilos.css              # Estilos principales (tema oscuro + blur)
│
├── js/
│   ├── acceso.js                # Control de acceso (si aplica)
│   └── audio.js                 # Control del sonido ambiente
│
└── README.md
```
---

## 🧠 Tecnologías utilizadas
- **HTML5** – estructura y narrativa del cómic  
- **CSS3 (modo oscuro con blur y transparencias)** – ambientación visual  
- **JavaScript / GSAP** – animaciones suaves entre escenas  
- **AOS (Animate On Scroll)** – efectos de entrada sincronizados con scroll  
- **Howler.js** – control de audio ambiental  
- **GitHub Pages** – despliegue web gratuito  

---

## 🎨 Dirección artística
- Paleta visual basada en **tonos oscuros y violetas suaves** (`#C97CC9`, `#A26D9B`, `#CFCFCF`)  
- Fondo texturizado con degradado tenue  
- Tipografía principal: *Playfair Display* (títulos) + *Quicksand* (texto)  
- Estilo narrativo: introspectivo, melancólico, inspirado en la figura del artista y la culpa creativa  

---

## 🚀 Cómo visualizarlo localmente
1. Clona el repositorio:
   ```bash
   git clone https://github.com/immanuel448/showcase-death-webcomic.git
   cd showcase-death-webcomic

2. Inicia un servidor local (por ejemplo, con la extensión Live Server de VS Code).

3. Abre en tu navegador:
http://127.0.0.1:5500/index.html

🕯️ Créditos

Autor: Immanuel L.

Diseño, ilustración y desarrollo web: autor del proyecto

Música y efectos: sonidos ambientales libres de derechos

⚖️ Licencia

Este proyecto es de carácter personal y no comercial.
El contenido visual y narrativo pertenece a su autor y no puede ser redistribuido ni modificado sin permiso.

🌐 Demo en línea

El proyecto está publicado mediante GitHub Pages, accede desde:
🔗 https://immanuel448.github.io/showcase-death-webcomic/

