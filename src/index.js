function handleSubmit(e) {
  e.preventDefault()
  let userInput = document.querySelector('#input').value
  let identicon = new Identicon(userInput);
  this.reset()
  updateDOM(identicon)

}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
