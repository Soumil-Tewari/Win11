var window_edge=document.getElementsByClassName('window')[0];
        var window_settings=document.getElementsByClassName('window')[2];
        var window_fileexplorer=document.getElementsByClassName('window')[1];
        var day = new Date();
        var time = document.getElementById("time");
        var startmenu = document.getElementById("start");
        var taskbar = document.getElementById("taskbar");
        var styleStart = startmenu.style.bottom;
        function clickedStartButton() {
            if (startmenu.style.bottom == "-700px") {
                startmenu.style.bottom = "47px"
            }
            else {
                startmenu.style.bottom = "-700px";
            }
        }
        time.innerHTML = day.getHours() + ":" + day.getMinutes();
        clickedStartButton();
        function clickedsettings(element){
            if(element.classList[0]=="windows-buttons"){
                window_settings.style.width="0%";
                window_settings.style.display="none"
            }
            else{
            window_settings.style.width="100%";
            window_settings.style.display="inline";}
        }
        displayRed=(element)=>{
            element.style.background="red";
        }
        displayBack=(element)=>{
            element.style.background="transparent";
        }
        function clickedMSedge(element){
            if(element.classList[0]=="windows-buttons"){
                window_edge.style.width="0%";
                window_edge.style.display="none"
            }
            else{
            window_edge.style.width="100%";
            window_edge.style.display="inline";}
        }
        function clickedFileExplorer(element){
            if(element.classList[0]=="windows-buttons"){
                window_fileexplorer.style.width="0%";
                window_fileexplorer.style.display="none"
            }
            else{
            window_fileexplorer.style.width="100%";
            window_fileexplorer.style.display="inline";}}
        