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

  const body = document.body;
  const FlH1 = document.createElement("h1");
  const FlH2 = document.createElement("h2");
  const FlInfo = document.createElement("div");
  const FlEl1 = document.createElement("div");
  const FlEl2 = document.createElement("div");
  const FlEl3 = document.createElement("div");
  const FlEl4 = document.createElement("div");
  const FlEl5 = document.createElement("div");

//   const ColName = [];
//   ColName[0] = "Name";
//   ColName[1] = "Alice";
//   ColName[2] = "Bob";
//   ColName[3] = "Carol";

//   const ColOccup = [];
//   ColOccup[0] = "Writer"; 

  const FlList = document.createElement("ol");

  const NameList = document.createElement("li");
  const List1 = document.createElement("li");
  const List2 = document.createElement("li");
  const List3 = document.createElement("li");
  const arr = freelancers.price;
  const avarage = (arr) => {
    for (let i=0; sum=0; i < arr.length; i++) {
        sum+= arr[i];
    }
    return sum/i;
  }


  FlH1.textContent = "Freelancer Forum";
FlH2.textContent = "The avarage starting price is " +avarage ;
//   FlH2.textContent = "The avarage starting price is $30";

  FlInfo.textContent = " Available Freelancers";

//   for(let i=0; i < freelancers.length; i++) {
//   freelancers.name[i];
//   };

body.appendChild(FlH1);
body.appendChild(FlH2);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);

