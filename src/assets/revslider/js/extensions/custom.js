var tpj=jQuery;

var revapi3;
tpj(document).ready(function() {
  if(tpj("#rev_slider_3_1").revolution === undefined){
    revslider_showDoubleJqueryError("#rev_slider_3_1");
  }else{
    revapi3 = tpj("#rev_slider_3_1").show().revolution({
      sliderType:"standard",
      jsFileLocation:"//localhost/revslider-standalone/revslider-standalone/revslider/public/revslider/assets/js/",
      sliderLayout:"fullwidth",
      dottedOverlay:"none",
      delay:9000,
      navigation: {
        onHoverStop:"off",
      },
      visibilityLevels:[1240,1024,778,480],
      gridwidth:1366,
      gridheight:790,
      lazyType:"none",
      parallax: {
        type:"mouse",
        origo:"enterpoint",
        speed:400,
        levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
        type:"mouse",
        disable_onmobile:"on"
      },
      shadow:0,
      spinner:"spinner0",
      stopLoop:"off",
      stopAfterLoops:-1,
      stopAtSlide:-1,
      shuffle:"off",
      autoHeight:"off",
      disableProgressBar:"on",
      hideThumbsOnMobile:"off",
      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      debugMode:false,
      fallbacks: {
        simplifyAll:"off",
        nextSlideOnWindowFocus:"off",
        disableFocusListener:false,
      }
    });
  }
});
