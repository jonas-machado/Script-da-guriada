

$("#inputGroupSelect05").add("#pon").add("#posicao").change(function(){
    $("#diferente").empty()

if($("#inputGroupSelect05").val() == 1){

    if($("#pon").val()){
    if($("#pon").val().length < 5 || $("#pon").val().length > 6){
        alert("PON deve ter 3 números entre barra. \nExemplo: 1/1/1.")
        $("#pon").val("x/x/x")
    }
    }

    if(!$("#pon").val()){
        $("#pon").val("")
        $("#pon").val("x/x/x")
    }
    if(!$("#posicao").val()){
        $("#posicao").val("")
        $("#posicao").val("x")
    }
    var vlan = 10 + $("#pon").val()[4]
    var vlanc = $("#pon").val()[4] + $("#pon").val()[5]
    if(vlanc > 9){
        var vlan = 1 + vlanc
    }

    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "CONFIGURAR ONU:" + "</p>");
    $("#diferente").append("<p id='dif2'>" + "Ver ONUs disponíveis para configurar:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "do show interface gpon discovered-onus " + "</p>");
    $("#diferente").append("<p id='dif2'>" + "Ver todas as onus cadastradas na PON:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "do show interface gpon " + $("#pon").val() + " onu " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "IDENTIFICAR CLIENTE PELO MAC-ADDRESS:" + "</p>");
    $("#diferente").append("<p id='dif2'>" + "Ver tabela de MAC address geral ou por PON/VLAN:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "do show mac-address-table " + "</p>");
    $("#diferente").append("<p id='dif'>" + "do show mac-address-table vlan " + vlan + " " + "</p>");
    $("#diferente").append("<p id='dif2'>" + "Ver pon e posição pelo service-port:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "do show running-config service-port xxx " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Ver sinal da ONU:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "do show interface gpon " + $("#pon").val() + " onu " + $("#posicao").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");

    $("#diferente").append("<p id='dif2'>" + "Ver velocidade da porta ethernet da ONU:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "do show interface gpon " + $("#pon").val() + " onu " + $("#posicao").val() + " eth 1 " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");

    $("#diferente").append("<p id='dif2'>" + "Ver alarmes das ONUs na OLT:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "do show alarm " + "</p>");

    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Ver todas as onus cadastradas na OLT:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "do show interface gpon onu " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Ver tabela de MAC address de cliente especifico:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "do show mac-address-table interface service-port-xxx " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Ver tráfego nas portas UPLINK:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "do show interface utilization " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Ver os tranceivers e potencia de saida:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "do show interface transceivers " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Ver PPPOES na PON:" + "</p>");
    
    $("#diferente").append("<p id='dif'>" + "show pppoe intermediate-agent sessions interface gpon" + $("#pon").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Buscar ONU pelo nome do cliente:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "show configuration running interface gpon onu name nome_do_cliente " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Lista os service-port da PON:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "show service-port gpon "  + $("#pon").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Ver SFP PON:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "do show interface gpon " + $("#pon").val() + " brief " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Rebootar onu:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "interface gpon " + $("#pon").val() + " onu-reset onu " + $("#posicao").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "PARA CLIENTE COM IP ESTATICO" + "</p>");
    $("#diferente").append("<p id='dif'>" + "anti-ip-spoofing" + "</p>");
    $("#diferente").append("<p id='dif'>" + "interface service-port-X (X é service-port do cliente)" + "</p>");
    $("#diferente").append("<p id='dif'>" + "allowed-ip all" + "</p>");
    $("#diferente").append("<p id='dif'>" + "commit" + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
}

if($("#inputGroupSelect05").val() == 2){

    if($("#pon").val()){
    if($("#pon").val().length < 5 || $("#pon").val().length > 6){
        alert("PON deve ter 3 números entre barra. \nExemplo: 1/1/1.")
        $("#pon").val("x/x/x")
    }
    }    

    if(!$("#pon").val()){
        $("#pon").val("")
        $("#pon").val("x/x/x")
    }
    if(!$("#posicao").val()){
        $("#posicao").val("")
        $("#posicao").val("x")
    }
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "CONFIGURAR ONU:" + "</p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra todas as Onus Disponíveis para configuração" + "</p>");

    $("#diferente").append("<p id='dif'>" + "show gpon onu uncfg " + "</p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra todas onus configuradas na PON para encontrar uma posição livre:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "show run interface gpon-olt_" + $("#pon").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Detalha histórico da ONU:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "show gpon onu detail-info gpon-onu_" + $("#pon").val() + ":" + $("#posicao").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Ver sinal da ONU:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "show pon power onu-rx gpon-onu_" + $("#pon").val() + ":" + $("#posicao").val() +  " (Mostra sinal da onu especifica)" + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + " Mostra sinal de todas as onus da PON:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "show pon power onu-rx gpon-olt_" + $("#pon").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra sinal e atenuação da ONU:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "show pon power attenuation gpon-onu_" + $("#pon").val() + ":" + $("#posicao").val() +  " " + "</p>");

    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra o status de todas as onus da PON:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "show gpon onu state gpon-olt_" + $("#pon").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra informações da onu:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "show gpon remote-onu equip gpon-onu_" + $("#pon").val() + ":" + $("#posicao").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra a configuração da ONU específica:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "show run interface gpon-onu_" + $("#pon").val() + ":" + $("#posicao").val() + " " + "</p>");

    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra status da lan da ONU:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "show gpon remote-onu interface eth gpon-onu_" + $("#pon").val() + ":" + $("#posicao").val() + " " + "</p>");

    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Reinicia onu do cliente:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "pon-onu-mng gpon-onu_" + $("#pon").val() + ":" + $("#posicao").val() + " // enter // reboot " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra mac aprendido na onu:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "show mac gpon onu gpon-onu_" + $("#pon").val() + ":" + $("#posicao").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra a posição que o serial está configurado:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "show gpon onu by sn xxxxxxxxxxxx" + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra a posicão da onu que esse mac foi aprendido:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "show mac xxxx.xxxx.xxxx" + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Informações sobre o slot:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "show card slot x" + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
}


if($("#inputGroupSelect05").val() == 3){
    
    if($("#pon").val()){
        if($("#pon").val().length > 1){
            alert("PON deve ter apenas 1 numero")
            $("#pon").val("x")
    }
    }

    if(!$("#pon").val()){
        $("#pon").val("")
        $("#pon").val("x")
        }
        if(!$("#posicao").val()){
        $("#posicao").val("")
        $("#posicao").val("x")
        }
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "CONFIGURAR ONU:" + "</p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra todas as Onus Disponíveis para configuração em todas as PONs ou por PON e posição livre:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "onu show " + "</p>");
    $("#diferente").append("<p id='dif'>" + "onu show gpon " + $("#pon").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra a lista das onus na pon:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "onu inventory gpon " + $("#pon").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra todas as onus que estão com sinal:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "onu status gpon " + $("#pon").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra a descrição de todas as onus:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "onu description show gpon " + $("#pon").val() + " (Mostra a descrição de todas as onus)" + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra mac aprendido na onu:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "bridge show mac gpon " + $("#pon").val() + " onu " + $("#posicao").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra todos os macs aprendidos na olt:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "bridge show mac all " + $("#pon").val() + " onu " + $("#posicao").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Deleta configuração da onu:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "onu delete gpon " + $("#pon").val() + " onu " + $("#posicao").val() + " // yes // no // yes " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Reinicia a onu:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "onu reboot gpon " + $("#pon").val() + " onu " + $("#posicao").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra status das onus de toda olt:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "bridge show onu " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Procura pon e posição pelo serial:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "onu find fsan xxxxxxxx " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra status das portas da olt:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "olt show port " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    
}

if($("#inputGroupSelect05").val() == 4){

    if($("#pon").val()){
    if($("#pon").val().length > 1){
        alert("PON deve ter apenas 1 numero")
        $("#pon").val("x")
    }
    }

    if(!$("#pon").val()){
        $("#pon").val("")
        $("#pon").val("x")
        }
        if(!$("#posicao").val()){
        $("#posicao").val("")
        $("#posicao").val("x")
        }
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "CONFIGURAR ONU:" + "</p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra todas as Onus Disponíveis para configuração em todas as PONs ou na PON específicada e posição livre:" + "</p>");
    $("#diferente").append("<p id='dif'>" + "onu show " + "</p>");
    $("#diferente").append("<p id='dif'>" + "onu show 1/" + $("#pon").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Procura pon e posição pelo serial:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "onu find fsan xxxxxxxx " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Verifica sinal da onu:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "onu power show 1-1-" + $("#pon").val() + "-" + $("#posicao").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra a lista das onus na pon e o sinal delas:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "onu inventory 1/" + $("#pon").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Lista qual a onu que o mac foi aprendido:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "bridge show mac xx:xx:xx:xx:xx:xx " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Lista todos os macs aprendidos na olt:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "bridge showall " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Lista a descrição de todas as portas da pon:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "port description list 1/1/" + $("#pon").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
        $("#diferente").append("<p id='dif2'>" + "Lista todos os macs aprendidos na olt:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "onu delete 1-1-" + $("#pon").val() + "-" + $("#posicao").val() + " // yes // no // yes  " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Reinicia onu - se ela estiver no ar:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "onu reboot 1-1-" + $("#pon").val() + "-" + $("#posicao").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra status das portas da olt:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "olt status (Mostra status das portas da olt)" + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Mostra status da olt:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "shelfctrl monitor " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Bridge show blk:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "bridge show blk" + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
    $("#diferente").append("<p id='dif2'>" + "Modifica a descrição da onu:" + "</p>");

    $("#diferente").append("<p id='dif'>" + "port description modify 1-1-" + $("#pon").val() + "-" + $("#posicao").val() + " " + "</p>");
    $("#diferente").append("<p class='divisoria'></p>");
}

})