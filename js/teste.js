window.onload = setTimeout(function(){livre()}, 1600) + setTimeout(function(){
  console.log("funcionando")
  $('#login-button').fadeOut("slow",function(){
    $("#container").fadeIn();
    TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
  });
  }, 1000);

$("#login").click(function(){
  TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
  TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
  $("#container, #forgotten-container").fadeOut(800, function(){
    $("#login-button").fadeIn(800);
  });
});

$("#login").click(function(){
  event.preventDefault();
  var usuario = document.getElementById("usuario");
  var senha = document.getElementById("senha")
  console.log(usuario)


  if(usuario.value == "tomio" && senha.value == "1234" || usuario.value == "Adria" && senha.value == "1234" || usuario.value == "Thalles" && senha.value == "1234" || usuario.value == "Otavio" && senha.value == "1234" || usuario.value == "Luquinhas" && senha.value == "1234" || usuario.value == "Jonas" && senha.value == "1234" || usuario.value == "Hallan" && senha.value == "1234" || usuario.value == "Gambeta" && senha.value == "1234" || usuario.value == "Juliano" && senha.value == "1234" || usuario.value == "Heryan" && senha.value == "1234" || usuario.value == "Adriano" && senha.value == "1234" || usuario.value == "Otavio Wiemes" && senha.value == "1234" || usuario.value == "Data" && senha.value == "1234"){
    setTimeout(function(){
    localStorage.setItem("acesso", true)
    localStorage.setItem("usuario", usuario.value)

   window.location.href = "script.html"
   var alertat = document.getElementById("mes")
   var usuarioat = document.getElementById("usuario")
   alertat.innerHTML = usuarioat.value
    console.log(usuario)
    }, 800)
  }
  else{
    setTimeout(function(){
      console.log("funcionando")
      $('#login-button').fadeOut("slow",function(){
        $("#container").fadeIn();
        TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
        TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
      });
    }, 1000);
  }
  })

  function livre(){
    var usuarioat = localStorage.getItem("usuario")
    if(usuarioat != undefined){
      window.location.href = "script.html"
    }
  }