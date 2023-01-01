
function requireTextField(controlId, errorMessage,validationType="all",length=500) {

    var Id = "#txt" + controlId
    var formGroup = "#formGroup" + controlId
    var errorField = "#err" + controlId
    $(Id).attr("maxlength", length)

    var txtVal = $(Id).val()
    if (txtVal == "" || txtVal == undefined || txtVal == null) {
        $(formGroup).addClass("error-control")
        $(errorField).addClass("error-control")
        $(errorField).html("Please enter " + errorMessage)
        $(Id).focus()
        return false
    }
    else {
        if (!getValidationType(validationType).test(txtVal)) {
            $(formGroup).addClass("error-control")
            $(errorField).addClass("error-control")
            $(errorField).html("Please valid " + errorMessage)
            $(Id).focus()
            return false
        }
        else {
            $(formGroup).removeClass("error-control")
            $(errorField).removeClass("error-control")
            $(errorField).html("")
            return true
        }
    }

}

function requireSelectField(controlId, errorMessage) {

    var Id = "#ddl" + controlId
    var formGroup = "#formGroup" + controlId
    var errorField = "#err" + controlId

    var ddlVal = $(Id).val()
    if (ddlVal == "-1" || ddlVal == undefined || ddlVal == null || ddlVal==0) {
        $(formGroup).addClass("error-control")
        $(errorField).addClass("error-control")
        $(errorField).html("Please Select" + errorMessage)
        $(Id).focus()
        return false
    }
    else {
        $(formGroup).removeClass("error-control")
        $(errorField).removeClass("error-control")
        $(errorField).html("")
        return true

    }

}

function getValidationType(ValidationType) {
    var regx = ""
    switch (ValidationType) {

        case "email":
            regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            break;
        case "mobile":
            regx = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/
            break;
        case "gender":
            regx = ""
            break;
        case "password":
            regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            break;
        case "confirmpassword":
            regx = ""
            break;
        case "pincode":
            regx = /^(?=[0-9]*$)(?:.{4}|.{6})$/
            break;
        case "address":
            regx = /^\s*\S+(?:\s+\S+){2}/
            break;
        default:
            regx = /.*/
            break;
    }
    return regx;
}