const $form = document.getElementById('form');
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData($form)
    const title = data.get('title')
    console.log(title)
    }

$form.addEventListener('submit',handleSubmit)
