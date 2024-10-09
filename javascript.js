const button = document.getElementById("Converte-button")
const select = document.getElementById("currency-select")

const dolar = 5.4
const euro = 5.9
const Bitcoin = 0.3

const convertValues = () => {
  const inputReais = document.getElementById("input-real").value
  const realValueText = document.getElementById("real-value-text")
  const currencyValueText = document.getElementById("currency-value-text")

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais)

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar)
  }

  if (select.value === "Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro)
  }

  if (select.value === "Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat("BTC", {
      style: "currency",
      currency: "BTC",
    }).format(inputReais / Bitcoin)
  }
  
}

  const changeCurrency = () => {
  const currencyname = document.getElementById("currency-name")
  const currencyimg = document.getElementById("currency-img")

  if (select.value === "US$ Dólar americano") {
    currencyname.innerHTML = "Dólar americano"
    currencyimg.src = "./imagens/estados-unidos (1) 1.png"
  }

  if (select.value ==="Bitcoin") {
    currencyname.innerHTML = "Bitcoin"
    currencyimg.src = "./imagens/Design sem nome (1) 1.png"
  }


  if (select.value ==="€ Euro") {
    currencyname.innerHTML = "Euro"
    currencyimg.src = "./imagens/Design sem nome 1.png"
  }

  convertValues()

}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)

