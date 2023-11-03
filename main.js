const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

    let elem1 = document.querySelectorAll(freelancers.name);
    let elem2 = document.querySelectorAll(freelancers.price);
    let elem3 = document.querySelectorAll(freelancers.occupation);

    // let kvad = document.querySelector("div");
    // let rect = kvad.getBoundingClientRect(document.body.freelancers);


    const body = document.body;
    const FlH1 = document.createElement("h1");
    const FlH2 = document.createElement("h2");
    const FlInfo = document.createElement("div");
    const infoEl = document.createElement("div");
    const FlEl1 = document.createElement("div");
    const FlEl2 = document.createElement("div");
    const FlEl3 = document.createElement("div");
    const FlEl4 = document.createElement("div");
    const FlEl5 = document.createElement("div");
    const newFreelancers = [{ name: "Dr. Slice", price: 25, occupation: "gardener" },
                                { name: "Dr. Pressure", price: 51, occupation: "programmer" },
                                { name: "Prof. Possibility", price: 43, occupation: "teacher" },];

    const FlList = document.createElement("ol");

    const NameList = document.createElement("li");
    const List1 = document.createElement("li");
    const List2 = document.createElement("li");
    const List3 = document.createElement("li");


    const prices = newFreelancers.map(newFreelancers => newFreelancers.price);
    
    const sum = prices.reduce((acc, currentPrice) => acc + currentPrice, 0);

    const averagePrice = sum / prices.length;
    
    //   console.log(`The average price is: ${averagePrice}`);
    
    let avaragePriceIs = Math.round(averagePrice);

    FlH1.textContent = "Freelancer Forum";
    FlH2.textContent = "The avarage starting price is $" + avaragePriceIs;
    FlInfo.textContent = " Available Freelancers";
    //   infoEl.textContent = document.freelancers.querySelectorAll();
    

    body.appendChild(FlH1);
    body.appendChild(FlH2);
    body.appendChild(FlInfo);
    // infoEl.appendChild(infoEl);
    // infoEl.appendChild(nameEl);
    // body.appendChild(favoriteEl);
    // favoriteEl.appendChild(listEl);

    FlH1.setAttribute("style", "margin:auto; width:100%; font-weight:bold; text-align:center; font-size:40px")
    FlH2.setAttribute("style", "margin:20px; text-align:center; font-size:25px")
    FlInfo.setAttribute("style", "margin:auto; width:100%; font-weight:bold; text-align:center; font-size:33px")
