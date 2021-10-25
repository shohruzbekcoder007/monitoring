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
        }
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