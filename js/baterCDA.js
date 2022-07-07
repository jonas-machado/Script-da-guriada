
$("#inputGroupSelect01").change(function () {
    $("#pon").val("")
    $("#conteudo1").css("display", "block")
    $("#conteudo2").css("display", "block")
    $("#conteudo3").css("display", "block")
    $("#conteudo4").css("display", "block")
    $("#btngerar").css("display", "block")
    if ($("#inputGroupSelect01").val() == 2) {
        $("#antigo").add("#novo").text("show gpon onu state gpon-olt_x/x/x")
        $("#mac2").text("show mac gpon olt gpon-olt_x/x/x")
        $("#conteudo1").css("display", "block")
        $("#conteudo2").css("display", "block")
        $("#conteudo3").css("display", "none")
        $("#conteudo4").css("display", "block")
        $("#btngerar").css("display", "block")
        $("#pon").keyup(function () {
            $("#antigo").add("#novo").text("show gpon onu state gpon-olt_" + $("#pon").val())
            $("#mac2").text("show mac gpon olt gpon-olt_" + $("#pon").val())
            if ($("#pon").val() == "") {
                $("#antigo").add("#novo").text("show gpon onu state gpon-olt_x/x/x")
                $("#mac2").text("show mac gpon olt gpon-olt_x/x/x")
            }
        })
    }

    if ($("#inputGroupSelect01").val() == 3) {
        $("#antigo").add("#novo").text("onu inventory 1/x ")
        $("#mac2").text("bridge showall")
        $("#pon").attr("placeholder", "x");
        $("#conteudo1").css("display", "block")
        $("#conteudo2").css("display", "block")
        $("#conteudo3").css("display", "none")
        $("#conteudo4").css("display", "block")
        $("#btngerar").css("display", "block")
        $("#pon").keyup(function () {
            $("#antigo").add("#novo").text("onu inventory 1/" + $("#pon").val())
            $("#mac2").text("bridge showall")
            if ($("#pon").val() == "") {
                $("#antigo").add("#novo").text("onu inventory 1/x ")
                $("#mac2").text("bridge showall")
            }
        })

    }

    if ($("#inputGroupSelect01").val() == 1) {
        $("#antigo").add("#novo").text("do show interface gpon x/x/x onu")
        $("#mac").text("show service-port gpon x/x/x")
        $("#mac2").text("do show mac-address-table vlan " + 10 + "x")
        $("#pon").keyup(function () {
            $("#antigo").add("#novo").text("do show interface gpon " + $("#pon").val() + " onu")
            $("#mac").text("show service-port gpon " + $("#pon").val())
            var poA = $("#pon").val()[4] + $("#pon").val()[5]
            if ($("#pon").val().length > 4) {
                $("#mac2").text("do show mac-address-table vlan " + 10 + $("#pon").val()[4])
                if (poA > 9) {
                    $("#mac2").text("do show mac-address-table vlan " + 1 + $("#pon").val()[4] + $("#pon").val()[5])
                }
            }
            if($("#pon").val() == ""){
                $("#antigo").add("#novo").text("do show interface gpon x/x/x onu")
                $("#mac").text("show service-port gpon x/x/x")
                $("#mac2").text("do show mac-address-table vlan " + 10 + "x")
            }
        })



    }
})

$("#btngerar2").click(function () {
    if ($("#inputGroupSelect01").val() == 1) {
        $("#selecao").add("#selecao2").css("display", "block")
        $("#conteudo1").css("display", "block")
        $("#conteudo2").css("display", "block")
        $("#conteudo3").css("display", "block")
        $("#conteudo4").css("display", "block")
        $("#btngerar").css("display", "block")
        $("#conteudo5").css("display", "none")
        $("#btngerar2").css("display", "none")
        $("#conteudo6").css("display", "none")
        $("#conteudo7").css("display", "none")
    }
    if ($("#inputGroupSelect01").val() == 2) {
        $("#selecao").add("#selecao2").css("display", "block")
        $("#conteudo1").css("display", "block")
        $("#conteudo2").css("display", "block")
        $("#conteudo3").css("display", "none")
        $("#conteudo4").css("display", "block")
        $("#btngerar").css("display", "block")
        $("#conteudo5").css("display", "none")
        $("#btngerar2").css("display", "none")
        $("#conteudo6").css("display", "none")
        $("#conteudo7").css("display", "none")
    }
    if ($("#inputGroupSelect01").val() == 3) {
        $("#selecao").add("#selecao2").css("display", "block")
        $("#conteudo1").css("display", "block")
        $("#conteudo2").css("display", "block")
        $("#conteudo3").css("display", "none")
        $("#conteudo4").css("display", "block")
        $("#btngerar").css("display", "block")
        $("#conteudo5").css("display", "none")
        $("#btngerar2").css("display", "none")
        $("#conteudo6").css("display", "none")
        $("#conteudo7").css("display", "none")
    }
})

$("#btngerar").click(function () {
    $("#diferente").empty()
    $("#antigo2").empty()
    $("#novo2").empty()

    console.log("funcionando")
    $("#selecao").add("#selecao2").css("display", "none")
    $("#conteudo1").css("display", "none")
    $("#conteudo2").css("display", "block")
    $("#conteudo3").css("display", "none")
    $("#conteudo4").css("display", "none")
    $("#btngerar").css("display", "block")
    $("#conteudo5").css("display", "block")
    $("#btngerar2").css("display", "block")
    $("#conteudo6").css("display", "block")
    $("#conteudo7").css("display", "block")

    var obj1 = document.getElementById("exampleFormControlTextarea5").value.split("\n")
    var obj2 = document.getElementById("exampleFormControlTextarea4").value.split("\n")
    var obj3 = document.getElementById("exampleFormControlTextarea1").value.split("!")
    var obj4 = document.getElementById("exampleFormControlTextarea2").value.split("\n")

    var buscar = ""
    var indice = obj1.indexOf(buscar)
    while (indice >= 0) {
        obj1.splice(indice, 1);
       indice = obj1.indexOf(buscar);
    }

    var buscar = ""
    var indice = obj2.indexOf(buscar)
    while (indice >= 0) {
        obj2.splice(indice, 1);
       indice = obj2.indexOf(buscar);
    }

    if ($("#inputGroupSelect01").val() == 1) {
        for (let i = 0; i < obj1.length; i++) {
            if (obj1[i] == obj2[i]) {
                $("#antigo2").append("<p id='oldg'>" + obj2[i] + "</p>");
                $("#novo2").append("<p id='newg'>" + obj1[i] + "</p>");
            }
            if (obj1[i] != obj2[i]) {
                $("#antigo2").append("<p id='oldg2'>" + obj2[i] + "</p>");
                $("#novo2").append("<p id='newg2'>" + obj1[i] + "</p>");

                var obja = obj1[i].split(" ")
                var buscar = ""
                var indice = obja.indexOf(buscar)
                while (indice >= 0) {
                    obja.splice(indice, 1);
                    var indice = obja.indexOf(buscar);
                }
                var indice = obja.indexOf(buscar);
                console.log(obja)

                $("#diferente").append("<p id='dif'>" + obj1[i].toString() + "</p>");

                for (let i = 0; i < obj3.length; i++) {
                    var objb = obj3[i].split(" ")
                    var buscar = ""
                    var indice = objb.indexOf(buscar)
                    while (indice >= 0) {
                        objb.splice(indice, 1);
                        var indice = objb.indexOf(buscar);
                    }
                    var indice = objb.indexOf(buscar);
                    console.log(objb)
                    if (objb[5] == obja[1]) {

                        $("#diferente").append("<p id='difserv'>" + obj3[i] + "</p>");
                        var dif = obj3[i]
                        var difspl = dif.split("\n")
                        var diful = difspl[1].replace(/ /g, "-");
                        if (obj3[i] == obj3[0]) {
                            var dif = "\n" + obj3[i]
                            var difspl = dif.split("\n")
                            var diful = difspl[1].replace(/ /g, "-");
                        }
                        for (let i = 0; i < obj4.length; i++) {
                            if (obj4[i].split(" ")[0] == diful) {
                                $("#diferente").append("<p id='difservul'>" + obj4[i] + "</p>");
                                $("#diferente").append("<p class='divisoria'></p>");
                                console.log($("#diferente").length)
                            }
                        }
                    }
                }
            }
        }
    }
    if ($("#inputGroupSelect01").val() == 2) {
        console.log("funcionando")
        for (let i = 0; i < obj1.length; i++) {
            if (obj1[i] == obj2[i]) {
                $("#antigo2").append("<p id='oldg'>" + obj2[i] + "</p>");
                $("#novo2").append("<p id='newg'>" + obj1[i] + "</p>");
            }
            if (obj1[i] != obj2[i]) {
                $("#antigo2").append("<p id='oldg2'>" + obj2[i] + "</p>");
                $("#novo2").append("<p id='newg2'>" + obj1[i] + "</p>");
                $("#diferente").append("<p id='dif'>" + obj1[i] + "</p>");
                var difz = obj1[i].split(" ")
                var difzt = difz[0] + " "
                console.log(difz)
                console.log(obj4[i])
                console.log(difzt)

                for (let i = 0; i < obj4.length; i++) {
                    if (obj4[i].includes(difzt)) {
                        $("#diferente").append("<p id='difzte'>" + obj4[i] + "</p>");
                        var mac = obj4[i].split(" ")
                        var maczt = mac[0].toString()
                        var maczte = maczt.substr(0, 2) + ":" + maczt.substr(2, 2) + ":" + maczt.substr(5, 2) + ":" + maczt.substr(7, 2) + ":" + maczt.substr(10, 2) + ":" + maczt.substr(12, 2)
                        $("#diferente").append("<p>" + "MAC: " + maczte + "</p>");
                        $("#diferente").append("<p class='divisoria'></p>");


                    }
                }
            }
        }

    }

    if ($("#inputGroupSelect01").val() == 3) {
        for (let i = 0; i < obj1.length; i++) {
            if (obj1[i] == obj2[i]) {
                $("#antigo2").append("<p id='oldg'>" + obj2[i] + "</p>");
                $("#novo2").append("<p id='newg'>" + obj1[i] + "</p>");
            }
            if (obj1[i] != obj2[i]) {
                $("#antigo2").append("<p id='oldg2'>" + obj2[i] + "</p>");
                $("#novo2").append("<p id='newg2'>" + obj1[i] + "</p>");
                var obja = obj1[i].split(" ")
                var buscar = ""
                var indice = obja.indexOf(buscar)
                while (indice >= 0) {
                    obja.splice(indice, 1);
                    var indice = obja.indexOf(buscar);
                }
                var objat = obja[1].replace(/-/g, "/") + "/gpononu"

                $("#diferente").append("<p id='dif'>" + obj1[i] + "</p>");
                for (let i = 0; i < obj4.length; i++) {
                    if (obj4[i].includes(objat)) {
                        $("#diferente").append("<p id='dif2'>" + obj4[i] + "</p>");
                        $("#diferente").append("<p class='divisoria'></p>");
                    }
                }
            }
        }
    }
    if ($("#diferente").is(":empty")) {
        $("#diferente").append("<p id='igual'>" + "NÃO FOI LOCALIZADA UMA LINHA DIFERENTE ENTRE O ANTIGO E O NOVO" + "</p>");
        $("#diferente").append("<p class='divisoria'></p>");
        console.log($("#diferente").length)
    }
})