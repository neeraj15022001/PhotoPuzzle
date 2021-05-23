document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

/*!
devtools-detect
Detect if DevTools is open
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/
(function () {
  "use strict";

  const devtools = {
    isOpen: false,
    orientation: undefined,
  };

  const threshold = 160;

  const emitEvent = (isOpen, orientation) => {
    window.dispatchEvent(
      new CustomEvent("devtoolschange", {
        detail: {
          isOpen,
          orientation,
        },
      })
    );
  };

  const main = ({ emitEvents = true } = {}) => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    const orientation = widthThreshold ? "vertical" : "horizontal";

    if (
      !(heightThreshold && widthThreshold) &&
      ((window.Firebug &&
        window.Firebug.chrome &&
        window.Firebug.chrome.isInitialized) ||
        widthThreshold ||
        heightThreshold)
    ) {
      if (
        (!devtools.isOpen || devtools.orientation !== orientation) &&
        emitEvents
      ) {
        emitEvent(true, orientation);
      }

      devtools.isOpen = true;
      devtools.orientation = orientation;
    } else {
      if (devtools.isOpen && emitEvents) {
        emitEvent(false, undefined);
      }

      devtools.isOpen = false;
      devtools.orientation = undefined;
    }
  };

  main({ emitEvents: false });
  setInterval(main, 500);

  if (typeof module !== "undefined" && module.exports) {
    module.exports = devtools;
  } else {
    window.devtools = devtools;
  }
})();

if (devtools.isOpen) {
  setInterval(() => {
    var $all = document.querySelectorAll("*");

    for (var each of $all) {
      each.classList.add(
        `asdjaljsdliasud8ausdijaisdluasdjasildahjdsk${Math.random()}`
      );
    }
  }, 5);
}

if (devtools.isOpen) {
  while (true) {
    console.log("access denied");
  }
}

document.onmousedown=disableclick
window.oncontextmenu = disableclick
status="Right Click Disabled";
function disableclick(e) {
e.preventDefault()
{
  if(e.button==2){
     return false;	
   }
}
}
