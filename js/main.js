// Courses Page Accordion Javascript Animated
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// End of Courses Page Accordion Javascript Animated

// 1 Choice Restriction For Radio/Checkbox on Contact Form 
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('c-gender')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
// End of 1 Choice Restriction For Radio/Checkbox on Contact Form 

// Form Checking to Validate and Prompt SweetAlert2 popups for UX feedback
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
})


function validateEmail() {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let y = document.forms["myForm"]["c-email"].value;
    if (y.match(mailFormat)) {
        return (true)
    }
    return (false)
}

function validateForm() {
    let x = document.forms["myForm"]["c-name"].value;
    if (x == "" || validateEmail() == false) {
        return false;
    }
}


function acknowledgement() {
    if (validateForm() == false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Name and Email is REQUIRED!',
            footer: 'Kindly check Email Format'
        });
    } else {
        Swal.fire(
            'Thank You!',
            'We will be contacting you soon!',
            'success'
        )
    }
}
// End of Form Checking and Prompting