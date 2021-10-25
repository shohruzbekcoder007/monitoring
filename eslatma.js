let arrayTuman = document.querySelector(".tumanlar-malumoti").getAttribute("data_array")
let arrayQishloq = [];
let arrayMahalla = [];

const setTuman = (array) => {
    console.log("1")
    arrayTuman = array;
}

$('#viloyat_id').change((event) => {
    console.log(event.target.value);
    let qiymat = event.target.value;
    // if(qiymat )
    let yangi = [];
    // arrayTuman.forEach((elem, index) => {
    //     if (elem == qiymat) {
    //         yangi[index] = elem;
    //     }
    // });
    console.log(yangi, arrayTuman);
})

$(document).ready(() => {
    // alert("salom")
});