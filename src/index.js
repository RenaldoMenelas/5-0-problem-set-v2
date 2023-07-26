const func = () => {
    const h1Tag = document.createElement('h1')
    h1Tag.setAttribute('id', 'main-heading')
    h1Tag.textContent = 'Hello World!'
    document.body.appendChild(h1Tag)

}

func()



const pTag = () => {

    const pTag = document.createElement('p')
    pTag.setAttribute('class', 'boring-text')
    pTag.setAttribute('id', 'main-text')
    pTag.textContent = "Look, I'm some text!"
    document.body.appendChild(pTag)
}

pTag()
