const pwd= document.getElementById("pwd");
const btn = document.getElementById("btn");
const range=document.getElementById("range");
const rangeValue = document.getElementById("range_val");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");
const copy= document.getElementById("copy");

copy.addEventListener("click", (e) => {
    pwd.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});

rangeValue.innerText = range.value;
range.addEventListener("input", (e) => {
    
    rangeValue.innerText = e.target.value;
});

btn.addEventListener("click", (e) => {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    let length = range.value;

    // let source = upper + lower + numbers + symbols;
    if (upperCase.checked) {
        password += upper;
    }
    if (lowerCase.checked) {
        password += lower;
    }
    if (number.checked) {
        password += numbers;
    }
    if (symbol.checked) {
        password += symbols;
    }
    if (password === "") {
        pwd.textContent = "Please select at least one option";
        return;
    }
    let source = password;
    password = "";

    for (let i = 0; i < length; i++) {
        let random =Math.random() * source.length;
        random = Math.floor(random);
        console.log(random);
        
        password += source.charAt(random);
    }
    pwd.value = password;
    // pwd.textContent ="New password";
});