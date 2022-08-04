let mainCOntainer = document.getElementById("mainContainer")


// Naruto Characters

const anime_character_factory = (name, age, power_level, chakara_type, jutsu_color, img) => {
    return {
        name: name,
        age: age,
        power: power_level,
        chakara: chakara_type,
        img: img,
        jutsu: function() {
            document.body.style.backgroundColor = jutsu_color
            alert("WARNING: YOUR ABOUT TO RELEASE A VERY STRONG JUTSU!")
        }
    }
}

let naruto = anime_character_factory("Naruto Uzumaki", 16, 10000000, ["Wind", " Six Paths"], "orange", "images/naruto.jpg")

let jiraya = anime_character_factory("Pervy Sage", 50, 1000000, ["Wind", " Water", " Fire", " Earth"], "gray", "images/jiraya.jpg")

let sasuke = anime_character_factory("Sasuke Uchiha", 16, 9000000, ["Lighting", " Fire"], "purple", "images/sasuke.jpg")

let itachi = anime_character_factory("Itachi Uchiha", 16, 1000000, ["Fire", " Water", " Wind"], "red", "images/itachi.jpg")



let characterArr = [naruto, jiraya, sasuke, itachi]



for (let i = 0; i < characterArr.length; i++) {

    let newDiv = document.createElement("div")

    let header = document.createElement("h1")
    header.innerHTML = characterArr[i].name
    newDiv.appendChild(header)

    let char_img = document.createElement("img")
    char_img.src = characterArr[i].img

    let p_power = document.createElement("p")
    p_power.innerHTML = "Power Level: " + characterArr[i].power

    let p_chakara = document.createElement("p")
    p_chakara.innerHTML = "Chakara type/s: " + characterArr[i].chakara

    let p_age = document.createElement("p")
    p_age,innerHTML = "Age: " + characterArr[i].age

    let new_jutsu = document.createElement("button")
    new_jutsu.innerHTML = "Jutsu"

    new_jutsu.onclick = characterArr[i].jutsu

    newDiv.append(header, char_img, p_power, p_chakara, p_age, new_jutsu)

    mainContainer.appendChild(newDiv)
}


