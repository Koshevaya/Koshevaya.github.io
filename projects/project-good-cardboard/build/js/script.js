var navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle");navMain.classList.remove("main-nav--nojs"),navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))});var link=document.querySelector(".button-request-call"),close=(popup=document.querySelector(".modal-content")).querySelector(".modal-content__button-close"),overlay=document.querySelector(".modal-overlay");link.addEventListener("click",function(o){o.preventDefault(),overlay.classList.add("modal-overlay-show"),popup.classList.add("modal-content-show");var e=localStorage.getItem("login");console.log(e),e?(login.value=e,password.focus()):login.focus()}),close.addEventListener("click",function(o){o.preventDefault(),overlay.classList.remove("modal-overlay-show"),popup.classList.remove("modal-content-show"),popup.classList.remove("modal-content-error")}),overlay.addEventListener("click",function(o){popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"),overlay.classList.remove("modal-overlay-show"),popup.classList.remove("modal-content-error"))});var popup,links=document.querySelector(".button-request-call2");close=(popup=document.querySelector(".modal-content")).querySelector(".modal-content__button-close"),overlay=document.querySelector(".modal-overlay");links.addEventListener("click",function(o){o.preventDefault(),overlay.classList.add("modal-overlay-show"),popup.classList.add("modal-content-show");var e=localStorage.getItem("login");console.log(e),e?(login.value=e,password.focus()):login.focus()}),close.addEventListener("click",function(o){o.preventDefault(),overlay.classList.remove("modal-overlay-show"),popup.classList.remove("modal-content-show"),popup.classList.remove("modal-content-error")}),overlay.addEventListener("click",function(o){popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"),overlay.classList.remove("modal-overlay-show"),popup.classList.remove("modal-content-error"))});var productButton=document.querySelector(".products__button-info"),productPopup=document.querySelector(".popup-hint"),productClose=productPopup.querySelector(".popup-hint__button-close");overlay=document.querySelector(".modal-overlay");productButton.addEventListener("click",function(o){o.preventDefault(),productPopup.style.display="block",overlay.classList.add("modal-overlay-show"),productPopup.classList.add("popup-hint-show")}),productClose.addEventListener("click",function(o){o.preventDefault(),productPopup.style.display="none",overlay.classList.remove("modal-overlay-show"),productPopup.classList.remove("popup-hint-show"),productPopup.classList.remove("popup-hint-error")}),overlay.addEventListener("click",function(o){productPopup.classList.contains("popup-hint-show")&&(productPopup.classList.remove("popup-hint-show"),overlay.classList.remove("modal-overlay-show"),productPopup.style.display="none",productPopup.classList.remove("popup-hint-error"))});var productButtontwo=document.querySelector(".products__button-info--item-two"),productPopuptwo=document.querySelector(".popup-hint--item-two"),productClosetwo=productPopuptwo.querySelector(".popup-hint__button-close--item-two");overlay=document.querySelector(".modal-overlay");productButtontwo.addEventListener("click",function(o){o.preventDefault(),productPopuptwo.style.display="block",overlay.classList.add("modal-overlay-show"),productPopuptwo.classList.add("popup-hint-show")}),productClosetwo.addEventListener("click",function(o){o.preventDefault(),productPopuptwo.style.display="none",overlay.classList.remove("modal-overlay-show"),productPopuptwo.classList.remove("popup-hint-show"),productPopuptwo.classList.remove("popup-hint-error")}),overlay.addEventListener("click",function(o){productPopuptwo.classList.contains("popup-hint-show")&&(productPopuptwo.classList.remove("popup-hint-show"),overlay.classList.remove("modal-overlay-show"),productPopuptwo.style.display="none",productPopuptwo.classList.remove("popup-hint-error"))});var productButtonthree=document.querySelector(".products__button-info--item-three"),productPopupthree=document.querySelector(".popup-hint--item-three"),productClosethree=productPopupthree.querySelector(".popup-hint__button-close--item-three");overlay=document.querySelector(".modal-overlay");productButtonthree.addEventListener("click",function(o){o.preventDefault(),productPopupthree.style.display="block",overlay.classList.add("modal-overlay-show"),productPopupthree.classList.add("popup-hint-show")}),productClosethree.addEventListener("click",function(o){o.preventDefault(),productPopupthree.style.display="none",overlay.classList.remove("modal-overlay-show"),productPopupthree.classList.remove("popup-hint-show"),productPopupthree.classList.remove("popup-hint-error")}),overlay.addEventListener("click",function(o){productPopupthree.classList.contains("popup-hint-show")&&(productPopupthree.classList.remove("popup-hint-show"),overlay.classList.remove("modal-overlay-show"),productPopupthree.style.display="none",productPopupthree.classList.remove("popup-hint-error"))});var productButtonfour=document.querySelector(".products__button-info--item-four"),productPopupfour=document.querySelector(".popup-hint--item-four"),productClosefour=productPopupfour.querySelector(".popup-hint__button-close--item-four");overlay=document.querySelector(".modal-overlay");productButtonfour.addEventListener("click",function(o){o.preventDefault(),productPopupfour.style.display="block",overlay.classList.add("modal-overlay-show"),productPopupfour.classList.add("popup-hint-show")}),productClosefour.addEventListener("click",function(o){o.preventDefault(),productPopupfour.style.display="none",overlay.classList.remove("modal-overlay-show"),productPopupfour.classList.remove("popup-hint-show"),productPopupfour.classList.remove("popup-hint-error")}),overlay.addEventListener("click",function(o){productPopupfour.classList.contains("popup-hint-show")&&(productPopupfour.classList.remove("popup-hint-show"),overlay.classList.remove("modal-overlay-show"),productPopupfour.style.display="none",productPopupfour.classList.remove("popup-hint-error"))});