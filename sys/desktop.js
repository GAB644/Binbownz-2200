document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".desktopicon");

    const windowManager = {
        minimize: (windowId) => {
           const windowElement = document.getElementById(windowId);
            if (windowElement) {
            windowElement.classList.remove('show'); // Add this
            windowElement.style.display = "none";
         }
        },

// not required for the time being.
//        close: (windowId) => {
//            const windowElement = document.getElementById(windowId);
//            if (windowElement) {
//               windowElement.style.display = "none";
//            }
//        },
        
        bringToFront: (windowId) => {
            const allWindows = document.querySelectorAll(".window-container");
            allWindows.forEach(win => {
                win.style.zIndex = "1";
            });
            const windowElement = document.getElementById(windowId);
            if (windowElement) {
                windowElement.style.zIndex = "10";
            }
        }
    };

    icons.forEach(icon => {
        icon.addEventListener("dblclick", () => {
            const label = icon.querySelector(".label").innerText.trim();
            const windowMap = {
                "Internet Iframed": "internetwindow",
                // me will add these later when i wake up. :)
                //"My Computer": "PCwindow",
                //"Recycle Bin": "RBinwindow",
                //"Network Thingy": "NetWindow",
                //"My Documents": "DocsWindow"
            };

    if (windowMap[label]) {
        const windowId = windowMap[label];
        const windowElement = document.getElementById(windowId);
        if (windowElement) {
                windowElement.classList.add('show');
                windowElement.style.display = "block";
                windowManager.bringToFront(windowId);
            }
        }
        });
    });
    
    window.windowManager = windowManager;
});