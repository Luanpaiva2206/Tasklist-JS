let count = (localStorage.getItem('countStorage') != null || localStorage.getItem('countStorage') == 0) ? localStorage.getItem('countStorage') : 1

window.onload = function () {

    let countStorage = Number(localStorage.getItem('countStorage'))
    this.document.body.style.backgroundColor = localStorage.getItem('colorBackground')
    const div = document.getElementById('circles-color4')
    const colorBackground = (localStorage.getItem('colorBackground') == null) ? '#3B2061' : localStorage.getItem('colorBackground')
    div.style.backgroundColor = colorBackground
    div.title = `Random color (${colorBackground})`

    for (let i = 1; i < countStorage; i++) {
        let checked = '';
        if (localStorage.getItem(`taskStorage${i}`) != null) {
            if (localStorage.getItem(`className${i}`) == 'list-group-item list-group-item-action list-group-item-success') {
                checked = ' checked'
            }
            const listGroup = document.getElementById('list-group')
            const li = document.createElement('li')
            li.className = localStorage.getItem(`className${i}`)
            li.id = `id-task${i}`
            li.innerHTML = `<label for="checkbox${i}"><input type="checkbox" name="checkbox${i}" id="checkbox${i}" onclick="checkboxClick()" ${checked}> - #${i} ${localStorage.getItem(`taskStorage${i}`).toUpperCase()} </label>`
            listGroup.appendChild(li)
        }
    }
}

function addTask() {

    if (document.getElementById('new-task').value.length == 0) {
        window.alert('Preenchimento Obrigatório!')
    } else {
        const newTask = document.getElementById('new-task').value
        localStorage.setItem(`taskStorage${count}`, newTask)
        const listGroup = document.getElementById('list-group')
        const li = document.createElement('li')
        li.className = 'list-group-item list-group-item-action'
        localStorage.setItem(`className${count}`, li.className)
        li.id = `id-task${count}`
        li.innerHTML = `<label for="checkbox${count}"><input type="checkbox" name="checkbox${count}" id="checkbox${count}" onclick="checkboxClick()"> - #${count} ${newTask.toUpperCase()}</label>`
        listGroup.appendChild(li)

        document.getElementById('new-task').value = ''
        count++
        localStorage.setItem('countStorage', count)
    }
}

function checkboxClick() {
    let countStorage = Number(localStorage.getItem('countStorage'))

    for (let i = 1; i < countStorage; i++) {
        if (document.getElementById(`checkbox${i}`) != null) {
            if (document.getElementById(`checkbox${i}`).checked == true) {
                let li = document.getElementById(`id-task${i}`)
                li.className = `list-group-item list-group-item-action list-group-item-success`
                localStorage.setItem(`className${i}`, li.className)
            } else if (document.getElementById(`checkbox${i}`).checked == false) {
                let li = document.getElementById(`id-task${i}`)
                li.className = `list-group-item list-group-item-action`
                localStorage.setItem(`className${i}`, li.className)
            }
        }
    }
}

function cleanTask() {
    let countStorage = Number(localStorage.getItem('countStorage'))
    for (let i = 1; i < countStorage; i++) {
        localStorage.removeItem(`taskStorage${i}`)
        localStorage.removeItem(`className${i}`)
    }
    localStorage.setItem('countStorage', 1)
    window.location.reload()
}

function deleteTask() {
    let countStorage = Number(localStorage.getItem('countStorage'))
    const listGroup = document.getElementById('list-group')

    for (let i = 1; i < countStorage; i++) {
        if (document.getElementById(`checkbox${i}`) != null) {
            if (document.getElementById(`checkbox${i}`).checked == true) {
                let li = document.getElementById(`id-task${i}`)
                localStorage.removeItem(`taskStorage${i}`)
                localStorage.removeItem(`className${i}`)
                listGroup.removeChild(li)
                window.alert('Tarefa deletada com sucesso!')
            }
        }
    }
}

function colorGenerator() {
    let hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Color0() {
    let color = '#A993BF'
    setColor(color)
}

function Color1() {
    let color = '#6A36D9'
    setColor(color)
}

function Color2() {
    let color = '#762EA6'
    setColor(color)
}

function Color3() {
    let color = '#5B2A8C'
    setColor(color)
}

function Color4() {
    let color = colorGenerator()
    document.body.style.backgroundColor = color
    let div = document.getElementById('circles-color4')
    div.style.backgroundColor = color
    div.title = `Random color (${color})`
    localStorage.setItem('colorBackground', color)
}

function setColor(color) {
    document.body.style.backgroundColor = color
    localStorage.setItem('colorBackground', color)
}