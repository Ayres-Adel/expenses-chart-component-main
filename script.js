const mon = document.getElementById("mon");
const tue = document.getElementById("tue");
const wed = document.getElementById("wed");
const thu = document.getElementById("thu");
const fri = document.getElementById("fri");
const sat = document.getElementById("sat");
const sun = document.getElementById("sun");



const valueDiv = document.createElement('div');
valueDiv.classList.add('hover');



mon.addEventListener("mouseover", event => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const mondata = data.find(value => value.day === "mon");
            if (mondata) {

                valueDiv.textContent = `$${mondata.amount}`;
                mon.appendChild(valueDiv);
            }
            
        });
});

tue.addEventListener("mouseover", event => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const tuedata = data.find(value => value.day === "tue");
            if (tuedata) {

                valueDiv.textContent = `$${tuedata.amount}`;
                tue.appendChild(valueDiv);
            }
            
        });
});

wed.addEventListener("mouseover", event => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const weddata = data.find(value => value.day === "wed");
            if (weddata) {

                valueDiv.textContent = `$${weddata.amount}`;
                wed.appendChild(valueDiv);
            }
            
        });
});

thu.addEventListener("mouseover", event => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const thudata = data.find(value => value.day === "thu");
            if (thudata) {

                valueDiv.textContent = `$${thudata.amount}`;
                thu.appendChild(valueDiv);
            }
            
        });
});

fri.addEventListener("mouseover", event => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const fridata = data.find(value => value.day === "fri");
            if (fridata) {

                valueDiv.textContent = `$${fridata.amount}`;
                fri.appendChild(valueDiv);
            }
            
        });
});

sat.addEventListener("mouseover", event => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const satdata = data.find(value => value.day === "sat");
            if (satdata) {

                valueDiv.textContent = `$${satdata.amount}`;
                sat.appendChild(valueDiv);
            }
            
        });
});

sun.addEventListener("mouseover", event => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const sundata = data.find(value => value.day === "sun");
            if (sundata) {

                valueDiv.textContent = `$${sundata.amount}`;
                sun.appendChild(valueDiv);
            }
            
        });
});

mon.addEventListener("mouseout", event => {
    const valueDiv = mon.querySelector('.hover');
    if (valueDiv) {
        mon.removeChild(valueDiv);
    }
});
tue.addEventListener("mouseout", event => {
    const valueDiv = tue.querySelector('.hover');
    if (valueDiv) {
        tue.removeChild(valueDiv);
    }
});
wed.addEventListener("mouseout", event => {
    const valueDiv = wed.querySelector('.hover');
    if (valueDiv) {
        wed.removeChild(valueDiv);
    }
});
thu.addEventListener("mouseout", event => {
    const valueDiv = thu.querySelector('.hover');
    if (valueDiv) {
        thu.removeChild(valueDiv);
    }
});
fri.addEventListener("mouseout", event => {
    const valueDiv = fri.querySelector('.hover');
    if (valueDiv) {
        fri.removeChild(valueDiv);
    }
});
sat.addEventListener("mouseout", event => {
    const valueDiv = sat.querySelector('.hover');
    if (valueDiv) {
        sat.removeChild(valueDiv);
    }
});
sun.addEventListener("mouseout", event => {
    const valueDiv = sun.querySelector('.hover');
    if (valueDiv) {
        sun.removeChild(valueDiv);
    }
});
