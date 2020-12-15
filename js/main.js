$(document).ready(function(){
                  $("#gotop").click(function(e){

                    TweenMax.to(window,1.5,{scrollTo:0,ease:Expo.easeInOut});
                    var huojian = new TimelineLite();
                    huojian.to("#gotop",1,{rotation:720,scale:0.6,y:"+=40",ease: Power4.easeOut})
                    .to("#gotop",1,{y:-1000,opacity:0,ease: Power4.easeOut},0.6)
                    .to("#gotop",1,{y:0,rotationY:0,opacity:1,scale:1,ease: Expo.easeOut,clearProps:"all"},"1.4");
                  });
})