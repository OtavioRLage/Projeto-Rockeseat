function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light") /*forma reduzida */

  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Mayke Brito, usando oculos escuro, jaqueta preta com uma camisa preta por baixo, fundo roxo e azul"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Mayke Brito, usando oculos e camisa preta, barba e fundo amarelo"
    )
  }
}
