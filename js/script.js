const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      temptSwitch = body.querySelector(".tempt-switch"),
      blueSwitch = body.querySelector(".skyblue-switch"),
      orangeSwitch = body.querySelector(".orange-switch"),
      pinkSwitch = body.querySelector(".pink-switch"),
      greenSwitch = body.querySelector(".green-switch"),
      modeText = body.querySelector(".mode-text"),
      gridClr = body.querySelector(".skyblue-grid"),
      temptText = body.querySelector(".span-text"),
      pinkClr = body.querySelector(".pink-grid"),
      pinkText = body.querySelector(".pink-text"),
      orangeClr = body.querySelector(".orange-grid"),
      orangeText = body.querySelector(".orange-text"),
      greenClr = body.querySelector(".green-grid"),
      greenText = body.querySelector(".green-text"),
      temperature = body.querySelector(".circle-h1"),
      temperatureP = body.querySelector(".circle-p");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });
      searchBtn.addEventListener("click", () =>{
        sidebar.classList.remove("close");
      });
      
      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerHTML = "Light Mode"
        }else{
            modeText.innerHTML = "Dark Mode"
        }
      });

      temptSwitch.addEventListener("click", () =>{
        body.classList.toggle("tempt");

        if (body.classList.contains("tempt")){
            temperature.innerHTML = "40&deg;"
        }else{
          temperature.innerHTML = "20&deg;"
        }
      });

      blueSwitch.addEventListener("click", () =>{
        body.classList.toggle("blue");

        if(body.classList.contains("blue")){
            temptText.innerHTML = "ON"
            gridClr.style.background = "skyblue"
            gridClr.style.color = "var(--sidebar-color)"
        }else{
            temptText.innerHTML = "OFF"
            gridClr.style.background = "var(--primary-color-light)"
            gridClr.style.color = "var(--text-color)"
        }
      });
      
      pinkSwitch.addEventListener("click", () =>{
        body.classList.toggle("pink");

        if(body.classList.contains("pink")){
            pinkText.innerHTML = "ON"
            pinkClr.style.background = "deeppink"
            pinkClr.style.color = "var(--sidebar-color)"
        }else{
            pinkText.innerHTML = "OFF"
            pinkClr.style.background = "var(--primary-color-light)"
            pinkClr.style.color = "var(--text-color)"
        }
      });
      
      orangeSwitch.addEventListener("click", () =>{
        body.classList.toggle("orange");

        if(body.classList.contains("orange")){
            orangeText.innerHTML = "ON"
            orangeClr.style.background = "orange"
            orangeClr.style.color = "var(--sidebar-color)"
        }else{
            orangeText.innerHTML = "OFF"
            orangeClr.style.background = "var(--primary-color-light)"
            orangeClr.style.color = "var(--text-color)"
        }
      });
      
      greenSwitch.addEventListener("click", () =>{
        body.classList.toggle("green");

        if(body.classList.contains("green")){
            greenText.innerHTML = "ON"
            greenClr.style.background = "lawngreen"
            greenClr.style.color = "var(--sidebar-color)"
        }else{
            greenText.innerHTML = "OFF"
            greenClr.style.background = "var(--primary-color-light)"
            greenClr.style.color = "var(--text-color)"
        }
      });
      

