(()=>{"use strict";function e(e,t,a){var c=document.createElement("div");return c.className="border task",c.textContent=a,c.style.backgroundColor=e,c.style.margin="5px 0",c.style.width="".concat(100*t,"%"),c}function t(e,t,a){document.querySelector("#".concat(t,">div:nth-child(").concat(a+1,")")).append(e)}t(e("blue",1.5,"ma tache"),"row3",2),t(e("green",2.5,"ma tache3"),"row1",1);var a=e("purple",3.5,"la tache de val"),c=e("green",2.5,"la deuxieme tache de val");t(a,"row2",1),t(c,"row2",1)})();