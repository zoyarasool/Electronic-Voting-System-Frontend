function updateCities(){
    const citiesByProvince={
        "Select Your Province":["Select City"],
        "Punjab": ["Select City","Rawalpindi","Lahore","Multan","Muree"],
        "Sindh":["Select City","Karachi","Sakhar","Hyderabad",],
        "Balochistan":["Select City","Quetta",""],
        "KPK":["Select City","Peshawar",],
    };
    const province = document.getElementById("province").value;
    const citySelect = document.getElementById("city");


    citySelect.innerHTML="";

    if(province){

    citiesByProvince[province].forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent= city;
      citySelect.appendChild(option); 
    });
    }
}
function opennominationpage(){
    window.location.href="Nomination.html";
}