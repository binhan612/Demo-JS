document.addEventListener("DOMContentLoaded", function () {
    $("label[for='url']").children()[0].remove();
    Validator({
        form: "#register",
        formGroupSelector: ".form-group",
        errorSelector: ".form-message",
        rules: [
            Validator.isRequired("#name", "Vui lòng nhập tên đầy đủ của bạn"),
            Validator.isRequired("#phone"),
            Validator.isPhone("#phone"),
            Validator.isRequired("#email"),
            Validator.isEmail("#email"),
            Validator.isRequired("#password"),
            Validator.minLength("#password", 6),
            Validator.isConfirmed('#password_confirmation', function getComfirmedValue () {
                return $('#register #password').value;
              }, 'Mật khẩu nhập lại không chính xác'),
        ],
        onSubmit: function (data) {
            console.log("file: logIn_register.js > line 26 > data", data);
        },
    });
});
