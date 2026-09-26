const models=[
["328","classic","1936 · SPORTS CAR","Pre-war lightweight icon","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20328.jpg"],
["507","classic","1956 · ROADSTER","Elegant V8 roadster","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20507.jpg"],
["2002","classic","1968 · 02 SERIES","Compact sports sedan","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%202002.jpg"],
["E9 3.0 CSL","classic","1971 · COUPÉ","Lightweight racing legend","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%203.0%20CSL.jpg"],
["E21 3 Series","series","1975 · 3 SERIES","The beginning of the modern 3 Series","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20E21.jpg"],
["M1","m","1978 · M","Mid-engine BMW sports car","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M1.jpg"],
["E28 M5","m","1984 · M5","The original M5 generation","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M5%20E28.jpg"],
["E30 3 Series","series","1982 · 3 SERIES","The boxy classic","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20E30.jpg"],
["E30 M3","m","1986 · M3","Motorsport-born legend","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M3%20%28E30%29.jpg"],
["E31 8 Series","series","1989 · 8 SERIES","Grand touring icon","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20850i.jpg"],
["E36 M3","m","1992 · M3","Straight-six M era","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M3%20E36.jpg"],
["E38 7 Series","series","1994 · 7 SERIES","Executive flagship","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20750iL%20E38.jpg"],
["E39 M5","m","1998 · M5","V8 super-sedan icon","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M5%20E39.jpg"],
["E46 M3","m","2000 · M3","S54 straight-six legend","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M3%20E46.jpg"],
["E60 M5","m","2004 · M5","High-revving V10 era","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M5%20E60.jpg"],
["E53 X5","x","1999 · X5","BMW's X pioneer","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X5%20E53.jpg"],
["E70 X5","x","2006 · X5","Second-generation X5","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X5%20E70.jpg"],
["E71 X6","x","2008 · X6","The coupe-SUV experiment","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X6%20E71.jpg"],
["E89 Z4","series","2009 · Z4","Roadster freedom","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20Z4%20E89.jpg"],
["F10 M5","m","2011 · M5","Twin-turbo V8 performance","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M5%20F10.jpg"],
["i3","i","2013 · BMW i","Urban electric pioneer","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20i3.jpg"],
["i8","i","2014 · BMW i","Plug-in hybrid icon","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20i8.jpg"],
["G20 3 Series","series","2019 · 3 SERIES","Modern sports sedan","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%203%20Series%20G20.jpg"],
["M2","m","CURRENT · M","Compact M performance","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M2.jpg"],
["M3","m","CURRENT · M3","Modern M sports sedan","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M3.jpg"],
["M4","m","CURRENT · M4","M coupe performance","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M4.jpg"],
["M5","m","CURRENT · M5","Electrified high-performance M","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M5%20G90.jpg"],
["X1","x","CURRENT · X1","Compact premium SUV","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X1.jpg"],
["X3","x","CURRENT · X3","Adventure meets everyday sport","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X3.jpg"],
["X5","x","CURRENT · X5","The X family benchmark","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X5.jpg"],
["X6","x","CURRENT · X6","Sculpted coupe SUV","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X6.jpg"],
["X7","x","CURRENT · X7","Full-size luxury SUV","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X7.jpg"],
["XM","m","CURRENT · BMW M","High-performance plug-in hybrid SUV","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20XM.jpg"],
["i4","i","CURRENT · BMW i","Electric Gran Coupé","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20i4.jpg"],
["i5","i","CURRENT · BMW i","Electric executive sedan","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20i5.jpg"],
["i7","i","CURRENT · BMW i","Electric flagship","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20i7.jpg"],
["iX","i","CURRENT · BMW i","Electric technology flagship","https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20iX.jpg"],
["iX3","i","2025+ · NEUE KLASSE","First production Neue Klasse model","https://mediapool.bmwgroup.com/cache/P9/202606/P90643899/P90643899-bmw-m-concept-neue-klasse-inform-2250px.jpg"]];
const fallback="https://mediapool.bmwgroup.com/cache/P9/202606/P90643899/P90643899-bmw-m-concept-neue-klasse-inform-2250px.jpg";
const grid=document.querySelector("#grid"),count=document.querySelector("#count");
function render(f="all"){let a=models.filter(x=>f==="all"||x[1]===f);count.textContent=a.length+" MODELS / CURATED";grid.innerHTML=a.map(x=>`<article class="card"><img src="${x[4]}" onerror="this.src='${fallback}'"><section><small>${x[2]}</small><h3>${x[0]}</h3><p>${x[3]}</p></section><i>↗</i></article>`).join("")}
render();
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.f)});
setTimeout(()=>document.querySelector(".loader").classList.add("hide"),900);
addEventListener("scroll",()=>document.querySelector("header").classList.toggle("scrolled",scrollY>30));
document.querySelector("#hamb").onclick=()=>document.querySelector("#nav").classList.toggle("open");
document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>document.querySelector("#nav").classList.remove("open"));
