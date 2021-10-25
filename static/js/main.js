// create viloyat
let create_viloyat = document.querySelector("#create_viloyat");
if (create_viloyat != undefined) {
    create_viloyat.addEventListener('click', (event) => {
        let reqBody = {
            name: document.querySelector("#viloyat_nomi").value,
            turar_joy_soni: document.querySelector("#jurar_joy_soni").value,
            aholi_soni: document.querySelector("#aholi_soni").value,
        }
        request = $.ajax({
            url: "/admin/viloyat_create",
            type: "post",
            data: reqBody
        });
        request.done(function(response, textStatus, jqXHR) {
            console.log("Hooray, it worked!" + " topildi: " + response);
            location.reload();
        });
        request.fail(function(jqXHR, textStatus, errorThrown) {
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
            alert("Malumotlarni kiritishda xatolikka yo'l qo'ydingiz!")
        });
        request.always(function() {
            let $form = $('.modal');
            let $inputs = $form.find("input, select, button, textarea");
            $inputs.prop("disabled", false);
        });
    });
}

// create tuman
let create_tuman = document.querySelector("#create_tuman");
if (create_tuman != undefined) {
    create_tuman.addEventListener('click', (event) => {
        let reqBody = {
            viloyat_id: document.querySelector("#viloyat_id").value,
            name: document.querySelector("#tuman_nomi").value,
            turar_joy_soni: document.querySelector("#jurar_joy_soni").value,
            aholi_soni: document.querySelector("#aholi_soni").value,
        }
        request = $.ajax({
            url: "/admin/tuman_create",
            type: "post",
            data: reqBody
        });
        request.done(function(response, textStatus, jqXHR) {
            console.log("Hooray, it worked!" + " topildi: " + response);
            alert("Malumotlar muvoffaqiyatli saqlandi");
            location.reload();
        });
        request.fail(function(jqXHR, textStatus, errorThrown) {
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
            alert("Malumotlarni kiritishda xatolikka yo'l qo'ydingiz!")
        });
        request.always(function() {
            let $form = $('.modal');
            let $inputs = $form.find("input, select, button, textarea");
            $inputs.prop("disabled", false);
        });
    });
}

// create qishloq
let create_qishloq = document.querySelector("#create_qishloq");
if (create_qishloq != undefined) {
    create_qishloq.addEventListener('click', (event) => {
        let reqBody = {
            viloyat_id: document.querySelector("#viloyat_id").value,
            tuman_id: document.querySelector("#tuman_id").value,
            name: document.querySelector("#qishloq_nomi").value,
            turar_joy_soni: document.querySelector("#jurar_joy_soni").value,
            aholi_soni: document.querySelector("#aholi_soni").value,
        }
        request = $.ajax({
            url: "/admin/qishloq_create",
            type: "post",
            data: reqBody
        });
        request.done(function(response, textStatus, jqXHR) {
            console.log("Hooray, it worked!" + " topildi: " + response);
            alert("Malumotlar muvoffaqiyatli saqlandi");
            location.reload();
        });
        request.fail(function(jqXHR, textStatus, errorThrown) {
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
            alert("Malumotlarni kiritishda xatolikka yo'l qo'ydingiz!")
        });
        request.always(function() {
            let $form = $('.modal');
            let $inputs = $form.find("input, select, button, textarea");
            $inputs.prop("disabled", false);
        });
    });
}

// create mahalla
let create_mahalla = document.querySelector("#create_mahalla");
if (create_mahalla != undefined) {
    create_mahalla.addEventListener('click', (event) => {
        let reqBody = {
            viloyat_id: document.querySelector("#viloyat_id").value,
            tuman_id: document.querySelector("#tuman_id").value,
            qishloq_id: document.querySelector("#qishloq_id").value,
            name: document.querySelector("#mahalla_nomi").value,
            turar_joy_soni: document.querySelector("#jurar_joy_soni").value,
            aholi_soni: document.querySelector("#aholi_soni").value,
        }
        request = $.ajax({
            url: "/admin/mahalla_create",
            type: "post",
            data: reqBody
        });
        request.done(function(response, textStatus, jqXHR) {
            console.log("Hooray, it worked!" + " topildi: " + response);
            alert("Malumotlar muvoffaqiyatli saqlandi");
            location.reload();
        });
        request.fail(function(jqXHR, textStatus, errorThrown) {
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
            alert("Malumotlarni kiritishda xatolikka yo'l qo'ydingiz!")
        });
        request.always(function() {
            let $form = $('.modal');
            let $inputs = $form.find("input, select, button, textarea");
            $inputs.prop("disabled", false);
        });
    });
}

// create uchastka
let create_uchastka = document.querySelector("#create_uchastka");
if (create_uchastka != undefined) {
    create_uchastka.addEventListener('click', (event) => {
        let reqBody = {
            viloyat_id: document.querySelector("#viloyat_id").value,
            tuman_id: document.querySelector("#tuman_id").value,
            qishloq_id: document.querySelector("#qishloq_id").value,
            mahalla_id: document.querySelector("#mahalla_id").value,
            name: document.querySelector("#uchastka_nomi").value,
            turar_joy_soni: document.querySelector("#jurar_joy_soni").value,
            aholi_soni: document.querySelector("#aholi_soni").value,
        }
        request = $.ajax({
            url: "/admin/uchastka_create",
            type: "post",
            data: reqBody
        });
        request.done(function(response, textStatus, jqXHR) {
            console.log("Hooray, it worked!" + " topildi: " + response);
            alert("Malumotlar muvoffaqiyatli saqlandi");
            location.reload();
        });
        request.fail(function(jqXHR, textStatus, errorThrown) {
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
            alert("Malumotlarni kiritishda xatolikka yo'l qo'ydingiz!")
        });
        request.always(function() {
            let $form = $('.modal');
            let $inputs = $form.find("input, select, button, textarea");
            $inputs.prop("disabled", false);
        });
    });
}

// create staff
let create_staff = document.querySelector("#create_staff");
if (create_staff != undefined) {
    create_staff.addEventListener('click', (event) => {
        const staff = document.querySelector(".staff");
        let reqBody = {
            report_id: staff.value,
            status: staff.getAttribute("staff-status"),
            user_name: document.querySelector("#user_name").value,
            password: document.querySelector("#password").value,
            full_name: document.querySelector("#full_name").value
        }
        request = $.ajax({
            url: "/admin/staff_create",
            type: "post",
            data: reqBody
        });
        request.done(function(response, textStatus, jqXHR) {
            console.log("Hooray, it worked!" + " topildi: " + response);
            alert("Malumotlar muvoffaqiyatli saqlandi");
            location.reload();
        });
        request.fail(function(jqXHR, textStatus, errorThrown) {
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
            alert("Malumotlarni kiritishda xatolikka yo'l qo'ydingiz!")
        });
        request.always(function() {
            let $form = $('.modal');
            let $inputs = $form.find("input, select, button, textarea");
            $inputs.prop("disabled", false);
        });
    });
}

// update report
let update_report = document.querySelector("#submit-report");
if (update_report != undefined) {
    update_report.addEventListener('click', (event) => {
        const report_id = document.querySelector("#submit-report").getAttribute('target-report');
        let reqBody = {
                report_id: report_id,
                turar_joy_soni: document.querySelector("#report_turar_joy").value,
                aholi_soni: document.querySelector("#report_aholi").value,
                vaqtincha: document.querySelector("#report_vaqtincha").value,
            }
            // console.log(reqBody);
        request = $.ajax({
            url: "/staff/staff_update",
            type: "put",
            data: reqBody
        });
        request.done(function(response, textStatus, jqXHR) {
            console.log("Hooray, it worked!" + " topildi: " + response);
            alert("Malumotlar muvoffaqiyatli saqlandi");
            location.reload();
        });
        request.fail(function(jqXHR, textStatus, errorThrown) {
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
            alert("Malumotlarni kiritishda xatolikka yo'l qo'ydingiz!")
        });
        request.always(function() {
            let $form = $('.modal');
            let $inputs = $form.find("input, select, button, textarea");
            $inputs.prop("disabled", false);
        });
    });
}

//viloyat
const getViloyat = (viloyat) => {
    request = $.ajax({
        url: "/positions/allviloyat",
        type: "get",
        data: {}
    });
    request.done(function(response, textStatus, jqXHR) {
        response.forEach(elem => {
            $(viloyat).append(`
                <option value=${elem._id} id=${elem._id}>${elem.name}</option>
            `)
        });
    });
    request.fail(function(jqXHR, textStatus, errorThrown) {
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
    });
    request.always(function() {
        let $form = $('.modal');
        let $inputs = $form.find("input, select, button, textarea");
        $inputs.prop("disabled", false);
    });
}

//tuman
const getTuman = (viloyat_id, tuman) => {
    request = $.ajax({
        url: "/positions/alltuman",
        type: "get",
        data: {}
    });
    request.done(function(response, textStatus, jqXHR) {
        $(tuman).html('');
        $(tuman).append(`
            <option value=${0} id=${0}>Tanlang...</option>
        `)
        response.forEach(elem => {
            if (elem.viloyat_id == viloyat_id) {
                $(tuman).append(`
                    <option value=${elem._id} id=${elem._id}>${elem.name}</option>
                `)
            }
        });
    });
    request.fail(function(jqXHR, textStatus, errorThrown) {
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
    });
    request.always(function() {
        let $form = $('.modal');
        let $inputs = $form.find("input, select, button, textarea");
        $inputs.prop("disabled", false);
    });
}

//qishloq
const getQishloq = (tuman_id, qishloq) => {
    request = $.ajax({
        url: "/positions/allqishloq",
        type: "get",
        data: {}
    });
    request.done(function(response, textStatus, jqXHR) {
        $(qishloq).html('');
        $(qishloq).append(`
            <option value=${0} id=${0}>Tanlang...</option>
        `)
        response.forEach(elem => {
            if (elem.tuman_id == tuman_id) {
                $(qishloq).append(`
                    <option value=${elem._id} id=${elem._id}>${elem.name}</option>
                `)
            }
        });
    });
    request.fail(function(jqXHR, textStatus, errorThrown) {
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
    });
    request.always(function() {
        let $form = $('.modal');
        let $inputs = $form.find("input, select, button, textarea");
        $inputs.prop("disabled", false);
    });
}

//mahalla
const getMahalla = (qishloq_id, mahalla) => {
    request = $.ajax({
        url: "/positions/allmahalla",
        type: "get",
        data: {}
    });
    request.done(function(response, textStatus, jqXHR) {
        $(mahalla).html('');
        $(mahalla).append(`
            <option value=${0} id=${0}>Tanlang...</option>
        `)
        response.forEach(elem => {
            if (elem.qishloq_id == qishloq_id) {
                $(mahalla).append(`
                    <option value=${elem._id} id=${elem._id}>${elem.name}</option>
                `)
            }
        });
    });
    request.fail(function(jqXHR, textStatus, errorThrown) {
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
    });
    request.always(function() {
        let $form = $('.modal');
        let $inputs = $form.find("input, select, button, textarea");
        $inputs.prop("disabled", false);
    });
}

//uchastka
const getUchastka = (mahalla_id, uchastka) => {
    request = $.ajax({
        url: "/positions/alluchastka",
        type: "get",
        data: {}
    });
    request.done(function(response, textStatus, jqXHR) {
        $(uchastka).html('');
        $(uchastka).append(`
            <option value=${0} id=${0}>Tanlang...</option>
        `)
        response.forEach(elem => {
            if (elem.mahalla_id != mahalla_id)
                $(uchastka).append(`
                <option value=${elem._id} id=${elem._id}>${elem.name}</option>
            `)
        });
    });
    request.fail(function(jqXHR, textStatus, errorThrown) {
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
    });
    request.always(function() {
        let $form = $('.modal');
        let $inputs = $form.find("input, select, button, textarea");
        $inputs.prop("disabled", false);
    });
}

$('#viloyat_id').on('change', (event) => {
    getTuman(event.target.value, '#tuman_id');
});

$('#tuman_id').on('change', (event) => {
    getQishloq(event.target.value, '#qishloq_id');
});

$('#qishloq_id').on('change', (event) => {
    getMahalla(event.target.value, '#mahalla_id');
});

$('#mahalla_id').on('change', (event) => {
    getUchastka(event.target.value, '#uchastka_id');
});

$('#staff_viloyat_id').on('change', (event) => {
    getTuman(event.target.value, '#staff_tuman_id');
});

$('#staff_tuman_id').on('change', (event) => {
    getQishloq(event.target.value, '#staff_qishloq_id');
});

$('#staff_qishloq_id').on('change', (event) => {
    getMahalla(event.target.value, '#staff_mahalla_id');
});

$('#staff_mahalla_id').on('change', (event) => {
    getUchastka(event.target.value, '#staff_uchastka_id');
});

$(document).ready(function() {
    getViloyat('#viloyat_id');
    getViloyat('#staff_viloyat_id');
});

function createPDF() {
    var sTable = document.getElementById('tab').innerHTML;

    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    var win = window.open('', '', 'height=700, width=700');
    win.document.write('<html><head>');
    win.document.write('<title>O\'zbekiston Respublikasi Davlat statistika qo\'mitasi</title>');
    win.document.write(style);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(sTable);
    win.document.write('</body></html>');

    win.document.close();

    win.print();
}