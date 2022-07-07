window.onload = alerta() + setTimeout(function () {
   var usuarioat = localStorage.getItem("usuario")
   /*if (usuarioat == "Otavio") {
      alert("")
   }*/
}, 2000)


$("#sair").click(function () {
   event.preventDefault()
   localStorage.clear()
   window.location.href = "index.html"
})

// TIRAR ESPAÇO ANTES E DEPOIS DENTRO DOS INPUTS

let serial = document.getElementById("serial")
let pon = document.getElementById("pon")
let posicao = document.getElementById("posicao")

serial.addEventListener("keyup", function () {
   document.getElementById("serial").value = document.getElementById("serial").value.trim()
})

pon.addEventListener("keyup", function () {
   document.getElementById("pon").value = document.getElementById("pon").value.trim()
})

posicao.addEventListener("keyup", function () {
   document.getElementById("posicao").value = document.getElementById("posicao").value.trim()
})


function alerta() {

   var alertat = document.getElementById("mes")
   var usuarioat = localStorage.getItem("usuario")
   if (usuarioat == null) {
      alert("Você não está logado")
      window.location.href = "index.html"
   } else {
      if (usuarioat == "Otavio") {
         var usuarioat = "Otávio"
      }
      else if (usuarioat == "Otavio Wiemes") {
         var usuarioat = "Otávio Wiemes"
      }
      else if (usuarioat == "tomio") {
         var usuarioat = "Tomio"
      }
      alertat.innerHTML = usuarioat

   }

}


function home() {
   document.location.reload(true);
}

//FUNÇÃO QUE VERIFICA SERIAL E VOLTA A OLT

function verificarSerial() {
   var sn = document.getElementById("serial").value.replace(/ /g, "")
   var vScript = document.getElementById("inputGroupSelect02").value


   if (sn.substring(0, 4) == "ZTEG" && vScript == "ZTE/INTELBRAS" || sn.substring(0, 4) == "CMSZ" && vScript == "ZTE/INTELBRAS") {
      var arr = ["Selecione", "BS02", "BRV04", "ITAPOA", "ITAPOA2", "ITINGA", "JOINVILLE", "MIRANDA", "ITACOLOMI", "PENHA", "PIÇARRAS", "SAGUAÇU", "VIAPIANA_NEW", "VILA_DA_GLORIA", "VILA_NOVA", "NOVA_BRASILIA"];
   }

   else if (vScript == "DATACOM") {
      var arr = ["Selecione", "ARAQUARI", "BS1", "ITAPOCU", "SNL101"];
   }

   else if (sn.length <= 8) {
      var arr = ["Selecione", "GARUVA_ITBS", "GARUVA_ZNTS", "SFS_ITBS", "SFS_ZNTS", "PICARRAS_ITBS", "PICARRAS_ZNTS", "ERVINO"];
   }

   else {
      var arr = ["Selecione", "BS02", "BRV04", "ITAPOA", "ITAPOA2", "ITINGA", "JOINVILLE", "MIRANDA", "ITACOLOMI", "PENHA", "PIÇARRAS", "SAGUAÇU", "VIAPIANA_NEW", "VILA_DA_GLORIA", "VILA_NOVA", "NOVA_BRASILIA"];
   }

   var string;

   //FOR PARA VOLTAR A ARRAY E CRIAR AS OPÇÕES NO SELECT

   for (i = 0; i < arr.length; i++) {
      string = string + "<option value=" + arr[i] + ">" + arr[i] + "</option>";
      document.getElementById("inputGroupSelect01").innerHTML = string;
   }

}

//FUNÇÃO PARA MODIFICAR INPUTS CASO O SERIAL NÃO SEJA UMA ZTE OU CMSZ

function atualizarIntelbras() {
   var olt = document.getElementById("inputGroupSelect01").value
   var idOnu = document.getElementById("idOculto")
   if (olt == "GARUVA_ITBS" || olt == "GARUVA_ZNTS" || olt == "SFS_ITBS" || olt == "SFS_ZNTS" || olt == "PICARRAS_ITBS" || olt == "PICARRAS_ZNTS") {
      document.getElementsByName("0/0/0")[0].placeholder = "0-0";
      idOnu.style.display = "none"
   }
   else if (olt == "ERVINO") {
      document.getElementsByName("0/0/0")[0].placeholder = "0";
      var idOnu = document.getElementById("idOculto")
      idOnu.style.display = "flex"
   }
   else {
      document.getElementsByName("0/0/0")[0].placeholder = "0/0/0";
      var idOnu = document.getElementById("idOculto")
      idOnu.style.display = "none"
   }
}

//FUNÇÃO PARA GERAR SCRIPT DE ACORDO COM O QUE FOI COLOCADO NOS INPUTS

function generateScript() {
   document.getElementById("containerOculto").style.display = "flex"
   document.getElementById("containerCadas").style.display = "flex"

   var sn = document.getElementById("serial").value.replace(/ /g, "")
   var pon = document.getElementById("pon").value.replace(/ /g, "")
   var posicao = document.getElementById("posicao").value.replace(/ /g, "");
   var nome = document.getElementById("nome").value
   var nomePppoe = document.getElementById("nome").value
   var nomeata = document.getElementById("nome").value.trim().replace(/[ ,-]/g, "_");
   var nomedscr = nomeata.normalize("NFD").replace(/[^a-zA-Zs,_,0-9]/g, "");
   var nomeAt = document.getElementById("nome").value.replace(/ /g, "_");
   var nome_ = nomeAt.normalize("NFD").replace(/[^a-zA-Zs,_,0-9]/g, "");
   var olt = document.getElementById("inputGroupSelect01").value
   var mensagem = document.getElementById("forscriptbox").value.replace("\n", "<br>");
   var vlan;
   var firstVlan = pon[0]
   var midVlan = pon[2]
   var lastVlan = pon[4]
   var lastestVlan = pon[5]
   var vScript = document.getElementById("inputGroupSelect02").value
   var idOnu = document.getElementById("onu").value
   var usuarioat = localStorage.getItem("usuario")
   monName = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12")
   now = new Date
   const verificarStringOnu = sn.substring(0, 4) == "CMSZ" || sn.substring(0, 4) == "XPON"

   // CHIMA OU ZTE
   if (vScript == "ZTE/INTELBRAS" && olt == "BS02") {
      var vlan = 645
      var porCadastro = "BS02 (172.16.87.2)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
   }

   if (vScript == "ZTE/INTELBRAS" && olt == "ITAPOA2") {
      if (pon.substr(0, 3) == "1/1") {
         var vlan = 50 + pon[4]
         var lastv = pon[4] + pon[5]
         if (lastv > 9) {
            vlan = 5 + pon[4] + pon[5]
         }
         console.log(vlan)
      }
      if (pon.substr(0, 3) == "1/2") {
         var vlancont = parseInt(16) + parseInt(pon[4])
         var vlan = "5" + vlancont
         var lastv = pon[4] + pon[5]
         if (lastv > 9) {
            var vlancont = parseInt(16) + parseInt(lastv)
            var vlan = "5" + vlancont
         }
         console.log(vlan)
      }
      var porCadastro = "ITAPOA2 (172.16.47.238)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
   }

   if (vScript == "ZTE/INTELBRAS" && olt == "BRV04") {
      var vlan = firstVlan + midVlan + lastVlan;
      var porCadastro = "BRV04 (172.16.49.50)"
      if (pon == "1/5/1") {
         vlan = 141
      }
      if (pon == "1/5/2") {
         vlan = 132
      }
      if (pon == "1/5/3") {
         vlan = 133
      }
      if (pon == "1/5/4") {
         vlan = 134
      }
      if (pon == "1/5/5") {
         vlan = 135
      }
      if (pon == "1/5/6") {
         vlan = 136
      }
      if (pon == "1/5/7") {
         vlan = 137
      }
      if (pon == "1/5/8") {
         vlan = 138
      }
      if (pon == "1/5/9") {
         vlan = 121
      }

      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="

      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }

   }
   if (vScript == "ZTE/INTELBRAS" && olt == "ITAPOA") {
      var vlan = 2296
      var porCadastro = "ITAPOA (172.16.42.150)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 unicast tcont 2 dir both " + "\n" + "switchport mode trunk vport 1 " + "\n" + "switchport vlan " + vlan + " tag vport 1 " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice type internet gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan-filter-mode iphost 1 tag-filter vid-filter untag-filter discard " + "\n" + "vlan-filter iphost 1 priority 0 vid " + vlan + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "security-mng 1 state enable mode permit " + "\n" + "! ";
   }
   if (vScript == "ZTE/INTELBRAS" && olt == "ITINGA") {
      var vlan = 2241
      var porCadastro = "ITINGA (172.16.61.2)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
   }
   if (vScript == "ZTE/INTELBRAS" && olt == "JOINVILLE") {
      var vlan = firstVlan + midVlan + lastVlan;
      var verVlan = lastVlan + lastestVlan
      if (verVlan > 9) {
         var vlan = firstVlan + midVlan + lastVlan + lastestVlan
      }
      var porCadastro = "JOINVILLE (172.16.40.21)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
   }
   if (vScript == "ZTE/INTELBRAS" && olt == "NOVA_BRASILIA") {
      var vlan = firstVlan + midVlan + lastVlan;
      var verVlan = lastVlan + lastestVlan
      if (verVlan > 9) {
         var vlan = firstVlan + midVlan + lastVlan + lastestVlan
      }
      var porCadastro = "NOVA BRASÍLIA"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu || sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
   }
   if (vScript == "ZTE/INTELBRAS" && olt == "VIAPIANA_NEW") {
      var vlan = firstVlan + midVlan + lastVlan;
      var verVlan = lastVlan + lastestVlan
      if (verVlan > 9) {
         var vlan = firstVlan + midVlan + lastVlan + lastestVlan
      }
      var porCadastro = "VIAPIANA_NEW (172.16.42.206)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
   }
   if (vScript == "ZTE/INTELBRAS" && olt == "MIRANDA") {
      var vlan = 461
      var porCadastro = "MIRANDA (172.16.45.3)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 unicast tcont 2 dir both queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "switchport vlan " + vlan + " tag vport 1 " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 unicast tcont 2 dir both queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "switchport vlan " + vlan + " tag vport 1 " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan-filter-mode iphost 1 tag-filter vid-filter untag-filter discard" + "\n" + "vlan-filter iphost 1 priority 0 vid " + vlan + " " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "security-mng 1 state enable mode permit " + "\n" + "! ";
      }
   }
   if (vScript == "ZTE/INTELBRAS" && olt == "ITACOLOMI") {
      var vlan = 345
      var porCadastro = "ITACOLOMI (172.16.49.30)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
   }
   if (vScript == "ZTE/INTELBRAS" && olt == "PENHA") {
      var vlan = firstVlan + midVlan + lastVlan;
      var verVlan = lastVlan + lastestVlan
      if (verVlan > 9) {
         var vlan = firstVlan + midVlan + lastVlan + lastestVlan
      }
      var porCadastro = "PENHA (192.168.254.58)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
   }
   if (vScript == "ZTE/INTELBRAS" && olt == "PIÇARRAS") {
      var vlan = firstVlan + midVlan + lastVlan;
      var verVlan = lastVlan + lastestVlan
      if (verVlan > 9) {
         var vlan = firstVlan + midVlan + lastVlan + lastestVlan
      }
      var porCadastro = "PIÇARRAS (172.16.49.34)"

      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 unicast tcont 2 dir both " + "\n" + "switchport mode trunk vport 1 " + "\n" + "switchport vlan " + vlan + " tag vport 1 " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 unicast tcont 2 dir both " + "\n" + "switchport mode trunk vport 1 " + "\n" + "switchport vlan " + vlan + " tag vport 1 " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice type internet gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan-filter-mode iphost 1 tag-filter vid-filter untag-filter discard " + "\n" + "vlan-filter iphost 1 priority 0 vid " + vlan + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "security-mng 1 state enable mode permit " + "\n" + "! ";
      }

   }
   if (vScript == "ZTE/INTELBRAS" && olt == "SAGUAÇU") {
      var vlan = 2293
      var porCadastro = "SAGUAÇU (172.16.42.30)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
   }
   if (vScript == "ZTE/INTELBRAS" && olt == "VILA_DA_GLORIA") {
      var vlan = 79
      var porCadastro = "VILA DA GLORIA (172.16.42.46)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 tcont 2 queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "service-port 1 vport 1 user-vlan " + vlan + " vlan " + vlan + " " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
   }
   if (vScript == "ZTE/INTELBRAS" && olt == "VILA_NOVA") {
      var vlan = 2298
      var porCadastro = "VILA NOVA (172.16.42.38)"
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "show pon power attenuation gpon-onu_" + pon + ":" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
      if (verificarStringOnu) {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 unicast tcont 2 dir both queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "switchport vlan " + vlan + " tag vport 1 " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service inter gemport 1 vlan " + vlan + " " + "\n" + "performance ethuni eth_0/1 start " + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "! ";
      }
      if (sn.substring(0, 4) == "ZTEG") {
         document.getElementById("forscriptbox").value = "interface gpon-olt_" + pon + " " + "\n" + "onu " + posicao + " type ZTE-F601 sn " + sn + " " + "\n" + "! " + "\n" + "interface gpon-onu_" + pon + ":" + posicao + " " + "\n" + "description " + nomedscr + " " + "\n" + "tcont 2 name Tcont100M profile OT " + "\n" + "gemport 1 name Gemport1 unicast tcont 2 dir both queue 1 " + "\n" + "switchport mode trunk vport 1 " + "\n" + "switchport vlan " + vlan + " tag vport 1 " + "\n" + "! " + "\n" + "pon-onu-mng gpon-onu_" + pon + ":" + posicao + " " + "\n" + "service dataservice type internet gemport 1 cos 0 vlan " + vlan + " " + "\n" + "switchport-bind switch_0/1 iphost 1 " + "\n" + "vlan-filter-mode iphost 1 tag-filter vid-filter untag-filter discard " + "\n" + "vlan-filter iphost 1 priority 0 vid " + vlan + "\n" + "vlan port eth_0/1 mode tag vlan " + vlan + " " + "\n" + "security-mng 1 state enable mode permit " + "\n" + "! ";
      }
   }



   // INTELBRAS
   if (vScript == "ZTE/INTELBRAS" && olt == "GARUVA_ZNTS" && sn.length <= 8) {
      var vlan = 2215
      var porCadastro = "GARUVA (172.16.42.14)"
      document.getElementById("forscriptbox").value = "onu set 1/" + midVlan + "/" + posicao + " meprof intelbras-110g vendorid ZNTS serno fsan " + sn + " " + "\n" + "bridge add 1-" + pon + "-" + posicao + "/gpononu downlink vlan " + vlan + " tagged eth 1" + "\n" + "port description add 1-" + pon + "-" + posicao + "/gpononu " + nomedscr + " ";
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "onu power show 1-" + pon + "-" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="

   }
   if (vScript == "ZTE/INTELBRAS" && olt == "GARUVA_ITBS" && sn.length <= 8) {
      var vlan = 2215
      var porCadastro = "GARUVA (172.16.42.14)"

      document.getElementById("forscriptbox").value = "onu set 1/" + midVlan + "/" + posicao + " meprof intelbras-110g vendorid ZNTS serno fsan " + sn + " " + "\n" + "create gpon-olt-onu-config 1-" + pon + "-" + posicao + "/gpononu " + "\n" + "set serial-no-vendor-id = ITBS " + "\n" + "commit gpon-olt-onu-config 1-" + pon + "-" + posicao + "/gpononu " + "\n" + "bridge add 1-" + pon + "-" + posicao + "/gpononu downlink vlan " + vlan + " tagged eth 1 " + "\n" + "port description add 1-" + pon + "-" + posicao + "/gpononu " + nomedscr + " ";
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "onu power show 1-" + pon + "-" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="

   }

   if (vScript == "ZTE/INTELBRAS" && olt == "PICARRAS_ITBS" && sn.length <= 8) {
      var vlan = 300
      var porCadastro = "PIÇARRAS (172.16.50.10)"

      document.getElementById("forscriptbox").value = "onu set 1/" + midVlan + "/" + posicao + " meprof intelbras-110g vendorid ZNTS serno fsan " + sn + " " + "\n" + "create gpon-olt-onu-config 1-" + pon + "-" + posicao + "/gpononu " + "\n" + "set serial-no-vendor-id = ITBS " + "\n" + "commit gpon-olt-onu-config 1-" + pon + "-" + posicao + "/gpononu " + "\n" + "bridge add 1-" + pon + "-" + posicao + "/gpononu downlink vlan " + vlan + " tagged eth 1 " + "\n" + "port description add 1-" + pon + "-" + posicao + "/gpononu " + nomedscr + " ";
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "onu power show 1-" + pon + "-" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="

   }
   if (vScript == "ZTE/INTELBRAS" && olt == "PICARRAS_ZNTS" && sn.length <= 8) {
      var vlan = 300
      var porCadastro = "PIÇARRAS (172.16.50.10)"
      document.getElementById("forscriptbox").value = "onu set 1/" + midVlan + "/" + posicao + " meprof intelbras-110g vendorid ZNTS serno fsan " + sn + " " + "\n" + "bridge add 1-" + pon + "-" + posicao + "/gpononu downlink vlan " + vlan + " tagged eth 1" + "\n" + "port description add 1-" + pon + "-" + posicao + "/gpononu " + nomedscr + " ";
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "onu power show 1-" + pon + "-" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="

   }
   if (vScript == "ZTE/INTELBRAS" && olt == "SFS_ITBS" && sn.length <= 8) {
      var vlan = 2218
      var porCadastro = "SFS (172.16.65.2)"

      document.getElementById("forscriptbox").value = "onu set 1/" + midVlan + "/" + posicao + " meprof intelbras-110g vendorid ZNTS serno fsan " + sn + " " + "\n" + "create gpon-olt-onu-config 1-" + pon + "-" + posicao + "/gpononu " + "\n" + "set serial-no-vendor-id = ITBS " + "\n" + "commit gpon-olt-onu-config 1-" + pon + "-" + posicao + "/gpononu " + "\n" + "bridge add 1-" + pon + "-" + posicao + "/gpononu downlink vlan " + vlan + " tagged eth 1 " + "\n" + "port description add 1-" + pon + "-" + posicao + "/gpononu " + nomedscr + " ";
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "onu power show 1-" + pon + "-" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="

   }
   if (vScript == "ZTE/INTELBRAS" && olt == "SFS_ZNTS" && sn.length <= 8) {
      var vlan = 2218
      var porCadastro = "SFS (172.16.65.2)"
      document.getElementById("forscriptbox").value = "onu set 1/" + midVlan + "/" + posicao + " meprof intelbras-110g vendorid ZNTS serno fsan " + sn + " " + "\n" + "bridge add 1-" + pon + "-" + posicao + "/gpononu downlink vlan " + vlan + " tagged eth 1" + "\n" + "port description add 1-" + pon + "-" + posicao + "/gpononu " + nomedscr + " ";
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "onu power show 1-" + pon + "-" + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="

   }
   if (vScript == "ZTE/INTELBRAS" && olt == "ERVINO" && sn.length <= 8) {
      var vlan = 2298
      var porCadastro = "ERVINO (172.16.42.126)"

      document.getElementById("forscriptbox").value = "onu set gpon " + pon + " onu " + posicao + " id " + idOnu + " meprof intelbras-110g " + "\n" + "bridge add gpon " + pon + " onu " + posicao + " downlink vlan 10" + pon + " tagged eth 1 " + "\n" + "onu description add gpon " + pon + " onu " + posicao + " text " + nomedscr + " ";
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "onu status gpon " + pon + " onu " + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="

   }

   // Datacom

   if (olt == "ARAQUARI") {
      var porCadastro = "ARAQUARI (192.168.254.66)"

   }
   if (olt == "BS1") {
      var porCadastro = "BS1 (172.16.88.2)"

   }
   if (olt == "ITAPOCU") {
      var porCadastro = "ITAPOCU (172.16.103.54)"

   }
   if (olt == "SNL101") {
      var porCadastro = "SNL101 (172.16.66.2)"

   }

   if (olt == "BS1" || olt == "ITAPOCU" || olt == "SNL101" || olt == "ARAQUARI" && vScript == "DATACOM") {
      var vlan = "10" + lastVlan
      var verVlan = lastVlan + lastestVlan
      if (verVlan > 9) {
         var vlan = "1" + lastVlan + lastestVlan
      }
      var vlan;
      document.getElementById("forscriptbox").value = "interface gpon " + pon + " " + "\n" + "onu " + posicao + " " + "\n" + "name " + nomedscr + " " + "\n" + "serial-number " + sn + " " + "\n" + "line-profile 1000Mdow1000Mup " + "\n" + "ethernet 1 " + "\n" + "negotiation " + "\n" + "no shutdown " + "\n" + "top " + "\n" + "service-port new " + "\n" + "description " + nomedscr + " " + "\n" + "gpon " + pon + " onu " + posicao + " gem 1 match vlan vlan-id any action vlan add vlan-id " + vlan + " " + "\n" + "commit ";
      document.getElementById("forscriptbox2").value = "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + "\n" + usuarioat + ": " + ("0" + now.getDate()).slice(-2) + "/" + monName[now.getMonth()] + "/" + now.getFullYear() + "\n" + "OLT: " + porCadastro + "\n" + "(PON e ID que o cliente foi cadastrado)" + "\n" + "do show interface gpon " + pon + " onu " + posicao + "\n" + "ONU S/N: " + sn + "\n" + "Sinal: " + "\n" + "CDA: " + "\n" + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="

   }

   var pppoe = nomePppoe.toString().toLowerCase().normalize("NFD").replace(/[^a-zA-Zs," "]/g, "")
   pppoe = pppoe.split(" ")
   var buscar = "de"
   var indice = pppoe.indexOf(buscar)
   while (indice >= 0) {
      pppoe.splice(indice, 1);
      indice = pppoe.indexOf(buscar);
   }

   var buscar = "da"
   var indice = pppoe.indexOf(buscar)
   while (indice >= 0) {
      pppoe.splice(indice, 1);
      indice = pppoe.indexOf(buscar);
   }

   var buscar = "do"
   var indice = pppoe.indexOf(buscar)
   while (indice >= 0) {
      pppoe.splice(indice, 1);
      indice = pppoe.indexOf(buscar);
   }

   var buscar = "das"
   var indice = pppoe.indexOf(buscar)
   while (indice >= 0) {
      pppoe.splice(indice, 1);
      indice = pppoe.indexOf(buscar);
   }

   var buscar = "dos"
   var indice = pppoe.indexOf(buscar)
   while (indice >= 0) {
      pppoe.splice(indice, 1);
      indice = pppoe.indexOf(buscar);
   }

   var buscar = ""
   var indice = pppoe.indexOf(buscar)
   while (indice >= 0) {
      pppoe.splice(indice, 1);
      indice = pppoe.indexOf(buscar);
   }



   if (nomePppoe != " ") {


      if (pppoe.length > 1) {
         document.getElementById("forscriptbox3").value = pppoe[0] + "." + pppoe[1] + "\n" + pppoe[1] + "." + pppoe[0];
         document.getElementById("forscriptbox4").value = "2ponto." + pppoe[0] + "\n" + "2ponto." + pppoe[1];
      }
      if (pppoe.length > 2) {
         document.getElementById("forscriptbox3").value = pppoe[0] + "." + pppoe[1] + "\n" + pppoe[0] + "." + pppoe[2] + "\n" + pppoe[1] + "." + pppoe[0] + "\n" + pppoe[2] + "." + pppoe[0];
         document.getElementById("forscriptbox4").value = "2ponto." + pppoe[0] + "\n" + "2ponto." + pppoe[1] + "\n" + "2ponto." + pppoe[2];

      }

      if (pppoe.length > 3) {
         document.getElementById("forscriptbox3").value = pppoe[0] + "." + pppoe[1] + "\n" + pppoe[0] + "." + pppoe[2] + "\n" + pppoe[0] + "." + pppoe[3] + "\n" + pppoe[1] + "." + pppoe[0] + "\n" + pppoe[2] + "." + pppoe[0] + "\n" + pppoe[3] + "." + pppoe[0];
         document.getElementById("forscriptbox4").value = "2ponto." + pppoe[0] + "\n" + "2ponto." + pppoe[1] + "\n" + "2ponto." + pppoe[2] + "\n" + "2ponto." + pppoe[3];
      }

      if (pppoe.length > 4) {
         document.getElementById("forscriptbox3").value = pppoe[0] + "." + pppoe[1] + "\n" + pppoe[0] + "." + pppoe[2] + "\n" + pppoe[0] + "." + pppoe[3] + "\n" + pppoe[0] + "." + pppoe[4] + "\n" + pppoe[1] + "." + pppoe[0] + "\n" + pppoe[2] + "." + pppoe[0] + "\n" + pppoe[3] + "." + pppoe[0] + "\n" + pppoe[4] + "." + pppoe[0];
         document.getElementById("forscriptbox4").value = "2ponto." + pppoe[0] + "\n" + "2ponto." + pppoe[1] + "\n" + "2ponto." + pppoe[2] + "\n" + "2ponto." + pppoe[3] + "\n" + "2ponto." + pppoe[4];
      }
   }

}


$(document).ready(function () {
   $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
      $(this).toggleClass('open');
   });
});
//login

document.querySelector(".containerDarkMode").addEventListener("click", () => {
   document.querySelector(".sun-logo").classList.toggle("animate-sun");
   document.querySelector(".moon-logo").classList.toggle("animate-moon");
   document.querySelector("#forDarkModeNav").classList.toggle("darkBg");
   document.querySelector("#forDarkModeMain").classList.toggle("darkBg");
   if (document.querySelector("#forDarkModeNav").classList.contains('darkBg')) {
      localStorage.setItem('tema', 'dark')
   } else {
      localStorage.setItem('tema', 'light')
   }
})

if (localStorage.getItem('tema') == 'dark') {
   document.querySelector(".sun-logo").classList.toggle("animate-sun");
   document.querySelector(".moon-logo").classList.toggle("animate-moon");
   document.querySelector("#forDarkModeNav").classList.add("darkBg");
   document.querySelector("#forDarkModeMain").classList.add("darkBg");
}
else {
   document.querySelector("#forDarkModeNav").classList.remove("darkBg");
   document.querySelector("#forDarkModeMain").classList.remove("darkBg");
}