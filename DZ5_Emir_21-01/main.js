const input = document.getElementById('input')
const createButton = document.getElementById('create_todo')
const todoList = document.getElementById('todo_list')

const createTodo = function () {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const edit = document.createElement('button')
        const remove = document.createElement('button')

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        edit.setAttribute('class', 'edit')
        remove.setAttribute('class', 'remove')

        edit.innerText = 'Edit'
        remove.innerText = 'Remove'

        text.innerText = input.value.trim()
        div.append(text)
        todoList.append(div)

        div.append(edit)
        div.append(remove)

        edit.addEventListener("click", (e) => {
            const editedText = document.createElement('h3')

            editedText.setAttribute('class', 'edited_text')
            editedText.innerText = prompt()

            text.innerText = editedText.innerText
        })

        remove.addEventListener("click", (e) => {div.remove()})
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)


// createButton.onclick = () => {
//     if (input.value.trim() === '') return false
//     const div = document.createElement('div')
//     const text = document.createElement('h3')
//
//     div.setAttribute('class', 'block_text')
//     text.setAttribute('class','text')
//
//     text.innerText = input.value.trim()
//     div.append(text)
//     todoList.append(div)
//
//     input.value = ''
// }