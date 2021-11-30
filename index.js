window.onload = () =>  {
    let idNumber = document.querySelector("#number")
    let number = ["J", "Q", "K", "A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let numberRandom = Math.floor(Math.random() * number.length)

    idNumber.innerHTML= `${number[numberRandom]}`

    let idIcons = document.querySelector("#icons")
    let idIconsTwo = document.querySelector("#icons-two")
    let icons = ["♥", "♠", "♦", "♣"]
    let iconsRandom = Math.floor(Math.random() * icons.length)

    idIcons.innerHTML = `${icons[iconsRandom]}`
    idIconsTwo.innerHTML = `${icons[iconsRandom]}`

    if((icons[iconsRandom] === "♦") || (icons[iconsRandom] === "♥")){
        idIcons.style.color = "red";
        idIconsTwo.style.color = "red"
    }

}