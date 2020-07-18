/*
-----------------------------------------------
Quick Call Button
Name:     Quick Call Button
Designer: Trương Thành Bắc
----------------------------------------------- */
.call-now-button p.call-text a:link{
    color:#ffffff;
    
}

    
    .quick-call-button{display:none}
    .call-now-button{display:none;z-index:9999;clear:both;margin:0 auto;position:fixed;border-radius:50px}
    .call-now-button div{display:flex}
    .call-now-button div p{color:#fff;display:table;padding:10px;border-radius:21px;height:34px;line-height:14px;font-size:14px;margin:8px 5px 8px 50px;text-transform:uppercase;font-weight:normal;text-align:center;box-sizing:content-box;text-decoration:none!important;box-sizing:border-box}
    .quick-alo-ph-circle{width:100px;height:100px;top:-25px;left:-25px;position:absolute;background-color:transparent;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:5px solid rgba(30,30,30,.4);opacity:1;-webkit-animation:quick-alo-circle-anim 1.2s infinite ease-in-out;-moz-animation:quick-alo-circle-anim 1.2s infinite ease-in-out;-ms-animation:quick-alo-circle-anim 1.2s infinite ease-in-out;-o-animation:quick-alo-circle-anim 1.2s infinite ease-in-out;animation:quick-alo-circle-anim 1.2s infinite ease-in-out;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50%}
    .quick-alo-ph-circle-fill{width:80px;height:80px;top:-28px;left:-27px;position:absolute;background-color:#000;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:2px solid transparent;opacity:1;-webkit-animation:quick-alo-circle-fill-anim 2.3s infinite ease-in-out;-moz-animation:quick-alo-circle-fill-anim 2.3s infinite ease-in-out;-ms-animation:quick-alo-circle-fill-anim 2.3s infinite ease-in-out;-o-animation:quick-alo-circle-fill-anim 2.3s infinite ease-in-out;animation:quick-alo-circle-fill-anim 2.3s infinite ease-in-out;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50%;
        
    }
    
   
    
  
    
     .quick-alo-ph-btn-icon.quick-alo-email-img-circle{
         background:url(quick-call-button-email.png) no-repeat center center;
         background-size: 40px 40px;
     }
         
     .quick-alo-ph-btn-icon.quick-alo-cart-img-circle
    {
        background:url(quick-call-button-cart.png) no-repeat center center;
        background-size: 40px 40px;
    }
      .quick-alo-ph-btn-icon.quick-alo-phone-img-circle
    {
       background:url(quick-call-button-phone.png) no-repeat center center;
        background-size: 40px 40px;
    }
      .quick-alo-ph-btn-icon.quick-alo-facebook-img-circle
    {
       background:url(quick-call-button-facebook.png) no-repeat center center;
        background-size: 40px 40px;
    }
       .quick-alo-ph-btn-icon.quick-alo-messenger-img-circle
    {
       background:url(quick-call-button-messenger.png) no-repeat center center;
        background-size: 40px 40px;
    }
       .quick-alo-ph-btn-icon.quick-alo-zalo-img-circle
    {
       background:url(quick-call-button-zalo.png) no-repeat center center;
        background-size: 40px 40px;
    }
    .quick-alo-ph-btn-icon 
    {
         width:50px;height:50px;top:0;left:0;position:absolute;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:2px solid transparent;opacity:1;
         
         -webkit-animation:quick-alo-circle-img-anim 1s infinite ease-in-out;-moz-animation:quick-alo-circle-img-anim 1s infinite ease-in-out;-ms-animation:quick-alo-circle-img-anim 1s infinite ease-in-out;-o-animation:quick-alo-circle-img-anim 1s infinite ease-in-out;animation:quick-alo-circle-img-anim 1s infinite ease-in-out;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50%;
        
    }
    @-moz-keyframes quick-alo-circle-anim{0%{-moz-transform:rotate(0) scale(.5) skew(1deg);opacity:.1;-moz-opacity:.1;-webkit-opacity:.1;-o-opacity:.1}30%{-moz-transform:rotate(0) scale(.7) skew(1deg);opacity:.5;-moz-opacity:.5;-webkit-opacity:.5;-o-opacity:.5}100%{-moz-transform:rotate(0) scale(1) skew(1deg);opacity:.6;-moz-opacity:.6;-webkit-opacity:.6;-o-opacity:.1}}
    @-webkit-keyframes quick-alo-circle-anim{0%{-webkit-transform:rotate(0) scale(.5) skew(1deg);-webkit-opacity:.1}30%{-webkit-transform:rotate(0) scale(.7) skew(1deg);-webkit-opacity:.5}100%{-webkit-transform:rotate(0) scale(1) skew(1deg);-webkit-opacity:.1}}
    @-o-keyframes quick-alo-circle-anim{0%{-o-transform:rotate(0) kscale(.5) skew(1deg);-o-opacity:.1}30%{-o-transform:rotate(0) scale(.7) skew(1deg);-o-opacity:.5}100%{-o-transform:rotate(0) scale(1) skew(1deg);-o-opacity:.1}}
    @-moz-keyframes quick-alo-circle-fill-anim{0%{-moz-transform:rotate(0) scale(.7) skew(1deg);opacity:.2}50%{-moz-transform:rotate(0) -moz-scale(1) skew(1deg);opacity:.2}100%{-moz-transform:rotate(0) scale(.7) skew(1deg);opacity:.2}}
    @-webkit-keyframes quick-alo-circle-fill-anim{0%{-webkit-transform:rotate(0) scale(.7) skew(1deg);opacity:.2}50%{-webkit-transform:rotate(0) scale(1) skew(1deg);opacity:.2}100%{-webkit-transform:rotate(0) scale(.7) skew(1deg);opacity:.2}}
    @-o-keyframes quick-alo-circle-fill-anim{0%{-o-transform:rotate(0) scale(.7) skew(1deg);opacity:.2}50%{-o-transform:rotate(0) scale(1) skew(1deg);opacity:.2}100%{-o-transform:rotate(0) scale(.7) skew(1deg);opacity:.2}}
    @-moz-keyframes quick-alo-circle-img-anim{10%{transform:rotate(0) scale(1) skew(1deg)}10%{-moz-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-moz-transform:rotate(25deg) scale(1) skew(1deg)}30%{-moz-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-moz-transform:rotate(25deg) scale(1) skew(1deg)}50%{-moz-transform:rotate(0) scale(1) skew(1deg)}100%{-moz-transform:rotate(0) scale(1) skew(1deg)}}
    @-webkit-keyframes quick-alo-circle-img-anim{0%{-webkit-transform:rotate(0) scale(1) skew(1deg)}10%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}30%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}50%{-webkit-transform:rotate(0) scale(1) skew(1deg)}100%{-webkit-transform:rotate(0) scale(1) skew(1deg)}}
    @-o-keyframes quick-alo-circle-img-anim{0%{-o-transform:rotate(0) scale(1) skew(1deg)}10%{-o-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-o-transform:rotate(25deg) scale(1) skew(1deg)}30%{-o-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-o-transform:rotate(25deg) scale(1) skew(1deg)}50%{-o-transform:rotate(0) scale(1) skew(1deg)}100%{-o-transform:rotate(0) scale(1) skew(1deg)}
        
    }
    
 
