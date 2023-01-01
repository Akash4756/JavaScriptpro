$(document).ready(function () {

    $("#btnSubmit").click(function () {
        var isValid = true
        isValid = requireTextField("Name", "your Name", null,20)
        if (!isValid) { return isValid }

        isValid = requireTextField("Email", "your Email Address","email")
        if (!isValid) { return isValid }

        isValid = requireTextField("Mobile", "your Mobile Number", "mobile")
        if (!isValid) { return isValid }

        isValid = requireSelectField("Gender", "gender")
        if (!isValid) { return isValid }

        isValid = requireTextField("Password", "password","password")
        if (!isValid) { return isValid }

        isValid = requireTextField("ConfirmPassword", "confirm password")
        if (!isValid) { return isValid }

        isValid = requireTextField("PinCode", "pin code","pincode")
        if (!isValid) { return isValid }

        isValid = requireTextField("Address", "address", "address")
        if (!isValid) { return isValid }

        console.log(isValid)
    })
})

$("#txtName").keyup(function () {
    isValid = requireTextField("Name", " your Name", null,20)
    if (!isValid) { return isValid }
})

$("#txtEmail").keyup(function () {
    isValid = requireTextField("Email", " your email address","email")
    if (!isValid) { return isValid }
})

$("#txtMobile").keyup(function () {
    isValid = requireTextField("Mobile", " your Mobile Number","mobile")
    if (!isValid) { return isValid }
})

$("#ddlGender").change(function () {
    isValid = requireSelectField("Gender", "gender")
    if (!isValid) { return isValid }
})

$("#txtPassword").keyup(function () {
    isValid = requireTextField("Password", "password", "password")
    if (!isValid) { return isValid }
})

$("#txtConfirmPassword").keyup(function () {
    isValid = requireTextField("ConfirmPassword", "confirm password")
    if (!isValid) { return isValid }
})

$("#txtPinCode").keyup(function () {
    isValid = requireTextField("PinCode", "pin code","pincode")
    if (!isValid) { return isValid }
})

$("#txtAddress").keyup(function () {
    isValid = requireTextField("Address", "address","address")
    if (!isValid) { return isValid }
})

