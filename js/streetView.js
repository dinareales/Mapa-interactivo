streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView

  function inicializar () {
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'),{
        position: mapa.center,
      })
        /*la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */

  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        /* la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */
    panorama.setPosition(ubicacion);
    mapa.streetView(panorama);
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
