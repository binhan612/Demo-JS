document.addEventListener("DOMContentLoaded", function () {
    Validator({
        form: "#logIn",
        formGroupSelector: ".form-group",
        errorSelector: ".form-message",
        rules: [
            Validator.isRequired("#name", "Vui lòng nhập tên đầy đủ của bạn"),
            Validator.isRequired("#phone"),
            Validator.isPhone("#phone"),
        ],
        onSubmit: function (data) {
            console.log("file: logIn_register.js > line 26 > data", data);
        }
    });
});

