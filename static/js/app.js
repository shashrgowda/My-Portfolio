let form = document.querySelector('#contactForm');
let respPara = document.querySelector('#resp');

function submitForm(e) {
    e.preventDefault();

    let data = {
        name: document.querySelector('input[name=name]').value,
        email: document.querySelector('input[name=email]').value,
        mobile: document.querySelector('input[name=mobile]').value,
        description: document.querySelector('#message').value
    }
    console.log(data);

    fetch('/contact', {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(respData => {
          console.log('Response data', respData);
          respPara.innerText = respData.message;
          respPara.style.color = 'green';
      }).catch(err => {
          console.log('Error!', err);
          respPara.innerText = `Something went wrong, please try again`;
          respPara.style.color = 'red';
      })

}

form.addEventListener('submit', submitForm);