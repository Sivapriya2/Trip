const scriptURL = 'https://script.google.com/macros/s/AKfycbx2IrZXRfErk-9L2rfVaFUW6rhprutEoRPPQ_8xIp3uQp_Wp5jiGG9s4ArmS70kaGWK/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg");
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML=""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
