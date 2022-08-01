const form = document.querySelector('.online-form')
const input = document.querySelector('#input-form')
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (input.value) {
        let data = input.value
        // console.log(data)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tel: data })
        }
        const res = await fetch('/phonenumber', options)
        const text = await res.text()
        // console.log(text)
        if (res.status === 200) {
            alert(text)
            window.location = '/stoic'
        } else {
            alert(text)
            input.value = ''
        }
    }
})