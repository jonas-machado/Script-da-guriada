//mudar para manutenção
function mudarpm() {
    document.getElementById("apm").classList.add("active")
    document.getElementById("ape").classList.remove("active")
    document.getElementById("aco").classList.remove("active")
    document.getElementById("avpl").classList.remove("active")
    var mudarvpl = document.getElementById("vpl")
    var mudarpm = document.getElementById("pm")
    var mudarco = document.getElementById("co")
    var mudarpe = document.getElementById("pe")
    mudarpm.style.display = "flex"
    mudarpe.style.display = "none"
    mudarco.style.display = "none"
    mudarvpl.style.display = "none"
}
//mudar para e-mail
function mudarpe() {
    var mudarpe = document.getElementById("pe")
    document.getElementById("apm").classList.remove("active")
    document.getElementById("ape").classList.add("active")
    document.getElementById("aco").classList.remove("active")
    document.getElementById("avpl").classList.remove("active")
    var mudarvpl = document.getElementById("vpl")
    var mudarco = document.getElementById("co")
    var mudarpm = document.getElementById("pm")
    mudarpm.style.display = "none"
    mudarpe.style.display = "flex"
    mudarco.style.display = "none"
    mudarvpl.style.display = "none"
}
//mudar para comandos olt
function mudarco() {
    var mudarpe = document.getElementById("pe")
    document.getElementById("apm").classList.remove("active")
    document.getElementById("ape").classList.remove("active")
    document.getElementById("aco").classList.add("active")
    document.getElementById("avpl").classList.remove("active")
    var mudarvpl = document.getElementById("vpl")
    var mudarco = document.getElementById("co")
    var mudarpm = document.getElementById("pm")
    mudarpm.style.display = "none"
    mudarpe.style.display = "none"
    mudarco.style.display = "flex"
    mudarvpl.style.display = "none"
}
//mudar para verificar posição livre
function mudarvpl() {
    document.getElementById("apm").classList.remove("active")
    document.getElementById("ape").classList.remove("active")
    document.getElementById("aco").classList.remove("active")
    document.getElementById("avpl").classList.add("active")
    var mudarvpl = document.getElementById("vpl")
    var mudarco = document.getElementById("co")
    var mudarpm = document.getElementById("pm")
    var mudarpe = document.getElementById("pe")
    mudarpm.style.display = "none"
    mudarpe.style.display = "none"
    mudarco.style.display = "none"
    mudarvpl.style.display = "flex"
}

var numberOfCda = 1

function addcda() {
    numberOfCda++
    let addCda = document.getElementById("addCda")
    addCda.innerHTML += '<div id="numberOfCda' + numberOfCda + '" class="input-group mb-3"><span class="input-group-text" id="basic-addon1">CDA</span><input id="cda' + numberOfCda + '" type="text" class="form-control" placeholder="PON, CDA e OLT" aria-label="Username"aria-describedby="basic-addon1"></div><div id="numberOfLocal' + numberOfCda + '" class="input-group mb-3"><span class="input-group-text" id="basic-addon1">LOCALIZAÇÃO</span><input id="local' + numberOfCda + '" type="text" class="form-control" placeholder="xx.xxxxxx,xx.xxxxxx" aria-label="Username" aria-describedby="basic-addon1"></div>'

}

function excCda() {
    let addCda = document.getElementById("addCda")
    let excCda = document.getElementById("numberOfCda" + numberOfCda)
    let excLocal = document.getElementById("numberOfLocal" + numberOfCda)
    addCda.removeChild(excCda)
    addCda.removeChild(excLocal)
    numberOfCda--
}

//gera o script manutenção
function gerarScriptpm() {
    numberOfCda
    let base = document.getElementById("inputGroupSelect03").value
    let protocolo2 = document.getElementById("protocolo2").value
    let motivo = document.getElementById("motivo").value
    let test1 = document.getElementById("exampleRadios1")
    let test2 = document.getElementById("exampleRadios2")
    let cdaS = []
    let locais = []
    for (let i = 1; i <= numberOfCda; i++) {
        let cdaI = document.getElementById("cda" + i).value
        let localI = document.getElementById("local" + i).value
        cdaS.push(cdaI)
        locais.push(localI)
    }
    var buscar = ""
    var indice = cdaS.indexOf(buscar)
    var indice2 = locais.indexOf(buscar)

    while (indice >= 0) {
        cdaS.splice(indice, 1);
        locais.splice(indice, 1);
        var indice = cdaS.indexOf(buscar);
        var indice2 = locais.indexOf(buscar)
    }
    var indice = cdaS.indexOf(buscar);
    var indice2 = locais.indexOf(buscar)
    if (test1.checked || test2.checked) {
        if (base == "OT") {
            var baseat = "OT 30060 Manutenção Preventiva Fibra"
        }
        if (base == "VOU") {
            var baseat = "VOU 19970 Manutenção de Redes"
        }
        if (base == "ATELE") {
            var baseat = "ATELE 46219 Manutenção de Redes"
        }

        var listaCdaTo = []

        for (let i = 0; i < cdaS.length; i++) {
            let listaCda = cdaS[i] + "\n" + locais[i] + "\n"
            listaCdaTo.push(listaCda)
            document.getElementById("scriptarea2").value = "Protocolo: " + protocolo2 + "\n" +
                "Motivo: " + motivo + "\n" +
                listaCdaTo.join("") +
                "Chamado aberto: " + baseat + "." + "\n" +
                "\n" +
                motivo + "\n" +
                "\n" +
                listaCdaTo.join("");
        }
    }
    else { alert("Por favor selecione se foi ou não verificado rompimento de fibra.") }
}
//gera o script e-mail
function gerarScriptpe() {
    let base = document.getElementById("inputGroupSelect01").value
    let cliente = document.getElementById("cliente").value
    let protocolo = document.getElementById("protocolo").value.replace(/ /g, "")
    let endereco = document.getElementById("endereco").value
    let sla = document.getElementById("inputGroupSelect02").value
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    var usuarioat = localStorage.getItem("usuario")
    if (usuarioat == "Jonas") {
        var usuarioatualizado = "Jonas Machado"
    }
    if (usuarioat == "Thalles") {
        var usuarioatualizado = "Thalles Fouly"
    }
    if (usuarioat == "Otavio") {
        var usuarioatualizado = "Otávio Amboni"
    }
    if (usuarioat == "Otavio Wiemes") {
        var usuarioatualizado = "Otávio Wiemes"
    }
    if (usuarioat == "Juliano") {
        var usuarioatualizado = "Juliano Ramos"
    }
    if (usuarioat == "Gambeta") {
        var usuarioatualizado = "Gabriel Gambeta"
    }

    if (usuarioat == "Heryan") {
        var usuarioatualizado = "Heryan"
    }

    if (usuarioat == "Adria") {
        var usuarioatualizado = "Adria"
    }

    if (usuarioat != "Luquinhas") {
        document.getElementById("scriptarea").value = "Chamado Aberto: " + base + " " + cliente + " - SLA " + sla + "\n" +
            "\n" +
            "Cliente: " + base + " " + cliente + "\n" +
            "Protocolo: " + protocolo + "\n" +
            "Endereço: " + endereco + "\n" +
            "SLA: " + sla + "\n" +
            "Responsável pelo atendimento: " + nome + " // " + telefone + "\n" +
            "\n" +
            "Qualquer dúvida entrar em contato." + "\n" +
            "Mais informações na O.S." + "\n" +
            "\n" +
            "att," + "\n" +
            "\n" +
            usuarioatualizado + "."
    }

    if (usuarioat == "Luquinhas") {
        document.getElementById("scriptarea").value = "Chamado Aberto: " + cliente + " - SLA " + sla + "\n" +
            "\n" +
            "Cliente: " + cliente + " " + base + "\n" +
            "Protocolo: " + protocolo + "\n" +
            "Endereço: " + endereco + "\n" +
            "SLA: " + sla + "\n" +
            "Responsável pelo atendimento: " + nome + " // " + telefone + "\n" +
            "\n"
    }
}

//para atualizar informações do verificar posição livre
var ponvpl = document.getElementById("phpon").value
var apndc = document.getElementById("apndc")
var slced = document.getElementById("slced").value

var divComand = document.createElement("div")
divComand.classList.add("commandVpl")
var p = document.createElement("p")
p.classList.add("pcmd")
p.setAttribute("id", "pcmd")
p.textContent = "show run interface gpon-olt_x/x/x \nshow gpon onu state gpon-olt_x/x/x"

divComand.appendChild(p);
document.getElementById("apndc").appendChild(divComand);
function attComando() {
    var ponvpl = document.getElementById("phpon").value
    var apndc = document.getElementById("apndc")
    var slced = document.getElementById("slced").value
    var pcmd = document.getElementById("pcmd")
    if (slced == "zte" && ponvpl.length !== 0) {
        var p = document.createElement("p")
        p.classList.add("pcmd")
        p.setAttribute("id", "pcmd")
        var pcmd = document.getElementById("pcmd")
        p.textContent = "show run interface gpon-olt_" + ponvpl + "\nshow gpon onu state gpon-olt_" + ponvpl;
        divComand.removeChild(pcmd)
        divComand.appendChild(p);
    }
    if (slced == "datacom" && ponvpl.length !== 0) {
        var p = document.createElement("p")
        p.classList.add("pcmd")
        p.setAttribute("id", "pcmd")
        var pcmd = document.getElementById("pcmd")
        p.textContent = "do show interface gpon " + ponvpl + " onu ";
        divComand.removeChild(pcmd)
        divComand.appendChild(p);
    }
    if (slced == "zte" && ponvpl.length === 0) {
        var p = document.createElement("p")
        p.classList.add("pcmd")
        p.setAttribute("id", "pcmd")
        var pcmd = document.getElementById("pcmd")
        p.textContent = "show run interface gpon-olt_x/x/x \nshow gpon onu state gpon-olt_x/x/x"
        divComand.removeChild(pcmd)
        divComand.appendChild(p);
    }
    if (slced == "datacom" && ponvpl.length === 0) {
        var p = document.createElement("p")
        p.classList.add("pcmd")
        p.setAttribute("id", "pcmd")
        var pcmd = document.getElementById("pcmd")
        p.textContent = "do show interface gpon x/x/x onu "
        divComand.removeChild(pcmd)
        divComand.appendChild(p);
    }
}
//gerar o verificar posição livre
function gerarScriptvpl() {
    document.getElementById("vpl5").value = ""
    document.getElementById("noonus").innerHTML = ""
    document.getElementById("noonus").innerHTML = "<p class='tobldonu' id='titleonu'>SELECIONE A ONU PARA EXCLUIR: </p><div class='d-grid gap-2'><button onclick='deSelect()' id='btnonu' class='btn btn-dark vp' type='button'>LIMPAR</button></div>"
    document.getElementById("ddod").value = ""
    document.getElementById("ddod2").value = ""
    var noonul = document.getElementById("noonus")
    var titleonu = document.getElementById("titleonu")
    var copiartr = document.getElementById("copiartr")
    var btnonu = document.getElementById("btnonu")
    var pl = document.getElementById("vpl2").value = ""
    var pl5 = document.getElementById("vpl5")
    var ddod = document.getElementById("ddod")
    var slced = document.getElementById("slced").value
    titleonu.style.display = "block"
    pl5.style.display = "block"
    copiartr.style.display = "block"
    btnonu.style.display = "block"
    noonul.style.border = "solid black 0.15em"
    noonul.style.borderRadius = "0.30em"

    if (slced == "zte") {
        var copiartr = document.getElementById("copiartr")
        var titleonu = document.getElementById("titleonu")
        var pl5 = document.getElementById("vpl5")
        var onuntr = []
        var onun = []
        var onuc = []
        var ldo = document.getElementById("ldo").value.split("\n")
        var ldoTrue = document.getElementById("ldo").value
        var ldofqp = document.getElementById("ldo").value.split("\n")
        var buscar = ""
        var indice = ldofqp.indexOf(buscar)
        while (indice >= 0) {
            ldofqp.splice(indice, 1);
            var indice = ldofqp.indexOf(buscar);
        }
        var indice = ldofqp.indexOf(buscar);
        var qdp = []
        var qdp2 = []
        var onulivre = 128 - ldofqp.length
        for (let i = 0; i < ldo.length; i++) {
            if (ldo[i].includes("working")) {
                qdp.push(ldo[i])
                var qdpa = qdp.length
            }
            if (ldo[i].includes("disable")) {
                qdp2.push(ldo[i])
                var qdpa2 = qdp2.length
            }
        }
        document.getElementById("vpl3").value = ldofqp.length + " ONUs configuradas \n" + onulivre + " ONUs livres \n" + qdpa + " ONUs ativas \n" + qdpa2 + " ONUs down"


        for (let p = 1; p <= 128; p++) {
            onun.push(p)
        }
        for (let i = 0; i < ldofqp.length; i++) {

            var ldo2 = ldo[i].split(" ")
            var ldo3 = ldo2[0].split(":")
            var ldo4 = ldo3[0].split("_")
            var ldo5 = "gpon-onu_" + ldo4[1] + ":" + onun[i]

            if (ldofqp[i].includes(" onu ")) {
                titleonu.style.display = "none"
                pl5.style.display = "none"
                copiartr.style.display = "none"
                btnonu.style.display = "none"
                noonul.style.border = "transparent"
                noonul.style.borderRadius = "0.30em"
                document.getElementById("vpl3").value = ldofqp.length + " ONUs configuradas \n" + onulivre + " ONUs livres"
                //if (!ldo[i].includes("onu " + onun[i] + " ")) { }
            }
        }
        for (let i = 0; i < 128; i++) {
            let verificarOnuState = !ldoTrue.includes(" onu ");
            let verificarOnuInterface = ldoTrue.includes(" onu ");
            if (verificarOnuState) {
                if (!ldoTrue.includes(":" + onun[i] + " ")) {
                    let posicaoLivre = document.getElementById("vpl2").value += `ONU ${onun[i]} // `;
                }
                else if (ldofqp.length >= 128) {
                    document.getElementById("vpl2").value = "LOTADA"
                }
            }
            else if (verificarOnuInterface) {
                if (!ldoTrue.includes("onu " + onun[i] + " ")) {
                    let posicaoLivre = document.getElementById("vpl2").value += `ONU ${onun[i]} // `;
                }
                else if (ldofqp.length >= 128) {
                    document.getElementById("vpl2").value = "LOTADA"
                }
            }
        }

        if (document.getElementById("vpl2").value != "LOTADA") {
            document.getElementById("vpl2").value = document.getElementById("vpl2").value.slice(0, -3)
        }

        for (let i = 0; i < ldofqp.length; i++) {
            var ldo2 = ldo[i].split(" ")
            var ldo3 = ldo2[0].split(":")
            var ldo4 = ldo3[0].split("_")
            onuc.push(ldo3[1])
            if (ldo4[0] == "gpon-onu") {
                var ldo6 = ldo2[0]
                document.getElementById("ddod2").value += "show gpon onu detail-info " + ldo6 + "\n \n";
                if (ldo[i].includes("disable")) {
                    onuntr.push(ldo3[1])
                    document.getElementById("ddod").value += "show gpon onu detail-info " + ldo6 + "\n \n";
                }
            }
            else if (ldo[i].includes("onu ")) {
                document.getElementById("ddod2").value = "";

            }
            else {
                var ldo6 = ldo2[0]
                document.getElementById("ddod2").value += "show gpon onu detail-info gpon-onu_" + ldo6 + "\n \n";
                if (ldo[i].includes("disable")) {
                    onuntr.push(ldo3[1])
                    document.getElementById("ddod").value += "show gpon onu detail-info gpon-onu_" + ldo6 + "\n \n";
                }
            }
        }
        for (let i = 0; i < onuntr.length; i++) {
            document.getElementById("noonus").innerHTML += "<div class='col'> <input onclick='verificaronu()' class='form-check-input' type='checkbox' value='" + onuntr[i] + "' id='flexCheckDefault" + [i] + "'>" +
                "<label class='form-check-label noonus' id='testandof' for='flexCheckDefault'>" +
                " ONU " + onuntr[i] +
                "</label> </div>"
        }
    }
    if (slced == "datacom") {
        var copiartr = document.getElementById("copiartr")
        var titleonu = document.getElementById("titleonu")
        var btnonu = document.getElementById("btnonu")
        var noonul = document.getElementById("noonus")
        var pl5 = document.getElementById("vpl5")
        titleonu.style.display = "none"
        pl5.style.display = "none"
        copiartr.style.display = "none"
        btnonu.style.display = "none"
        noonul.style.border = "transparent"
        noonul.style.borderRadius = "0.30em"
        var onun = []
        var ldo = document.getElementById("ldo").value.split("\n")
        var ldo2 = document.getElementById("ldo").value.split("\n")
        var ldoTrueDatacom = document.getElementById("ldo").value;
        var buscar = ""
        var indice = ldo2.indexOf(buscar)
        while (indice >= 0) {
            ldo2.splice(indice, 1);
            var indice = ldo2.indexOf(buscar);
        }
        var indice = ldo2.indexOf(buscar);
        for (let p = 1; p <= 128; p++) {
            onun.push(p)
        }
        var qdp = []
        var qdp2 = []


        /*for (let i = 0; i < ldo.length; i++) {
            var ldod = ldo[i].split(" ")
            var buscar = ""
            var indice = ldod.indexOf(buscar)
            while (indice >= 0) {
                ldod.splice(indice, 1);
                var indice = ldod.indexOf(buscar);
            }
            var indice = ldod.indexOf(buscar);
            if (ldod[1] != onun[i] && onun[i] < 128) {
                document.getElementById("vpl2").value = "ONU " + onun[i];
                break
            }
            if (onun[i] > 127) {
                document.getElementById("vpl2").value = "LOTADA"
            }
        }*/

        for (let i = 0; i < 127; i++) {
            if (!ldoTrueDatacom.includes(" " + onun[i] + " ")) {
                let posicaoLivre = document.getElementById("vpl2").value += `ONU ${onun[i]} // `;
            }
            else if (ldo2.length >= 127) {
                document.getElementById("vpl2").value = "LOTADA"
            }

        }

        if (document.getElementById("vpl2").value != "LOTADA") {
            document.getElementById("vpl2").value = document.getElementById("vpl2").value.slice(0, -3)
        }

        for (let i = 0; i < ldo2.length; i++) {

            if (ldo2[i].includes("Up")) {
                qdp.push(ldo2[i])
                var qdpa = qdp.length
            }
            if (ldo2[i].includes("Down")) {
                qdp2.push(ldo2[i])
                var qdpa2 = qdp2.length
            }

        }
        var onulivre = 127 - ldo2.length
        document.getElementById("vpl3").value = ldo2.length + " ONUs configuradas \n" + onulivre + " ONUs livres \n" + qdpa + " ONUs ativas \n" + qdpa2 + " ONUs down"
        for (let i = 0; i < ldo2.length; i++) {
            var ldod = ldo[i].split(" ")
            var buscar = ""
            var indice = ldod.indexOf(buscar)
            while (indice >= 0) {
                ldod.splice(indice, 1);
                var indice = ldod.indexOf(buscar);
            }
            var indice = ldod.indexOf(buscar);
            document.getElementById("ddod2").value += "do show interface gpon " + ldod[0] + " onu " + ldod[1] + "\n \n";
            if (ldod[3] == "Down") {
                document.getElementById("ddod").value += "do show interface gpon " + ldod[0] + " onu " + ldod[1] + "\n \n";

            }
        }
    }
}

function copiarTexto() {
    let textoCopiado = document.getElementById("ddod");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function copiarTexto2() {
    let textoCopiado = document.getElementById("ddod2");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function copiarTextotr() {
    let textoCopiado = document.getElementById("vpl5");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function verificaronu() {
    var ldo = document.getElementById("ldo").value.split("\n")
    var buscar = ""
    var indice = ldo.indexOf(buscar)
    while (indice >= 0) {
        ldo.splice(indice, 1);
        var indice = ldo.indexOf(buscar);
    }
    var indice = ldo.indexOf(buscar);
    for (let i = 0; i < ldo.length; i++) {
        var ldo2 = ldo[i].split(" ")
        var ldo3 = ldo2[0].split(":")
        var ldo4 = ldo3[0].split("_")
        if (ldo4[0] == "gpon-onu") {
            var pontrr = ldo4[1]
        }
        else {
            var pontrr = ldo3[0]
        }
    }
    document.getElementById("vpl5").value = ""
    document.getElementById("vpl5").value = "conf t \ninterface gpon-olt_" + pontrr + " \n"
    for (var i = 0; i < 129; i++) {
        var onutr = document.getElementById("flexCheckDefault" + [i])
        if (onutr.checked) {
            document.getElementById("vpl5").value += "no onu " + onutr.value + " \n"
        }
    }
}


function deSelect() {
    for (var i = 0; i < 129; i++) {
        var onutr = document.getElementById("flexCheckDefault" + [i])
        if (onutr.checked) {
            document.getElementById("vpl5").value = ""
            onutr.checked = false
        }
    }
}
