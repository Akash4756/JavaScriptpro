
var menus = [
    { "item": "Veg Noodles", "price": 150 },
    { "item": "Paneer Noodles", "price": 200 },
    { "item": "Veg Manchurian", "price": 200 },
    { "item": "Paneer Chilly", "price": 250 },
    { "item": "Veg Fried Rice", "price": 150 },
    { "item": "Paneer Fried Rice", "price": 200 },
    { "item": "Veg Rolls", "price": 100 },
    { "item": "Paneer Rolls", "price": 130 }
]


$(document).ready(function () {
    binMenuDDl()
})

function AddItem() {
    var tbl="<table></table>"
}

function binMenuDDl() {
    var op = "<option value='-1'>Select</option>"
    menus.forEach(function (item) {
        op += "<option value='" + item.price + "'>" + item.item + "</option>"
    })
    $("#ddlMenu").html(op)

}
