let view = document.querySelector("#pageView")
let cost = document.querySelector("#cost")
let cost2 = document.querySelector("#cost2")
let priceSlider = document.querySelector("#priceSlider")
let toggle = document.querySelector("#toggle")
let isYearly = false

let pageViews = [
    "10k", "50k", "100k", "500k", "1M"
]

let perMonth = [8, 12, 16, 24, 36]


priceSlider.addEventListener("input", () => {
    updateValue()
    view.innerHTML = pageViews[priceSlider.value]


    let value = priceSlider.value * 25

    priceSlider.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`;


})





toggle.addEventListener("change", () => {
    if (!isYearly) {
        isYearly = true
    } else {
        isYearly = false

    }
    updateValue()
})


function updateValue() {
    if (isYearly) {
        cost.innerHTML = perMonth[priceSlider.value] * 0.75
        cost2.innerHTML = perMonth[priceSlider.value] * 0.75
    } else {
        cost.innerHTML = perMonth[priceSlider.value]
        cost2.innerHTML = perMonth[priceSlider.value]

    }
}