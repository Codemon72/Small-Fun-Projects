const pace = () => setInterval(setClock, 1000)

const hourHand = document.querySelector('#hour-hand')
const minuteHand = document.querySelector('#minute-hand')
const secondHand = document.querySelector('#second-hand')

const setClock = () => {
  const Time = new Date();
  const secondDeg = Time.getSeconds() / 60;
  const minuteDeg = (secondDeg + Time.getMinutes()) / 60;
  const hourDeg = (minuteDeg + Time.getHours()) / 12;

  handsDegs(hourHand, hourDeg);
  handsDegs(minuteHand, minuteDeg);
  handsDegs(secondHand, secondDeg);
}

const handsDegs = (element, rotationRatio) => {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

pace()
setClock()