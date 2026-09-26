const WHATSAPP_NUMBER = "2348000000000"; // CHANGE THIS to the boutique's WhatsApp number, without +

const products = [
 {id:1,name:"Satin Evening Dress",category:"Dresses",price:85000,img:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80"},
 {id:2,name:"Minimal Linen Dress",category:"Dresses",price:65000,img:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80"},
 {id:3,name:"Classic Leather Bag",category:"Bags",price:95000,img:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80"},
 {id:4,name:"Everyday Shoulder Bag",category:"Bags",price:72000,img:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=80"},
 {id:5,name:"Pointed Heels",category:"Shoes",price:78000,img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80"},
 {id:6,name:"Classic Court Shoes",category:"Shoes",price:68000,img:"https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=700&q=80"},
 {id:7,name:"Gold Statement Earrings",category:"Accessories",price:28000,img:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80"},
 {id:8,name:"Silk Scarf",category:"Accessories",price:22000,img:"https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=80"}
];

let cart = JSON.parse(localStorage.getItem("luxeCart") || "[]");
const money = n => new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(n);

function renderProducts(filter="All"){
 const list = filter==="All" ? products : products.filter(p=>p.category===filter);
 document.getElementById("products").innerHTML = list.map(p=>`
  <article class="product-card">
   <div class="product-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
   <button class="add-btn" onclick="addToCart(${p.id})" aria-label="Add ${p.name}">+</button>
   <div class="product-info"><h3>${p.name}</h3><div class="product-meta"><span>${p.category}</span><strong>${money(p.price)}</strong></div></div>
  </article>`).join("");
}
function addToCart(id){
 const item=cart.find(x=>x.id===id);
 item?item.qty++:cart.push({id,qty:1});
 saveCart(); openCart();
}
function saveCart(){localStorage.setItem("luxeCart",JSON.stringify(cart));renderCart();}
function renderCart(){
 const box=document.getElementById("cartItems");
 if(!cart.length){box.innerHTML='<p style="padding:35px 0;color:#777;text-align:center">Your bag is empty.</p>'}
 else box.innerHTML=cart.map(x=>{const p=products.find(y=>y.id===x.id);return `<div class="cart-item"><img src="${p.img}" alt=""><div><h4>${p.name}</h4><p>${money(p.price)}</p><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button> ${x.qty} <button onclick="changeQty(${p.id},1)">+</button></div></div></div>`}).join("");
 const total=cart.reduce((s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0);
 document.getElementById("subtotal").textContent=money(total);
 document.getElementById("cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);
}
function changeQty(id,d){const x=cart.find(i=>i.id===id);if(!x)return;x.qty+=d;if(x.qty<=0)cart=cart.filter(i=>i.id!==id);saveCart();}
function openCart(){document.getElementById("cartPanel").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeCart(){document.getElementById("cartPanel").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
document.getElementById("cartBtn").onclick=openCart;document.getElementById("closeCart").onclick=closeCart;document.getElementById("overlay").onclick=closeCart;
document.getElementById("menuBtn").onclick=()=>document.getElementById("navMenu").classList.toggle("open");

document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts(b.dataset.filter)});
document.querySelectorAll("[data-filter-link]").forEach(a=>a.onclick=()=>{const f=a.dataset.filterLink;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x.dataset.filter===f));setTimeout(()=>renderProducts(f),0)});

document.getElementById("searchBtn").onclick=()=>{document.getElementById("searchModal").classList.add("show");document.getElementById("searchInput").focus()};
document.getElementById("closeSearch").onclick=()=>document.getElementById("searchModal").classList.remove("show");
document.getElementById("searchInput").oninput=e=>{
 const q=e.target.value.toLowerCase().trim();const r=products.filter(p=>p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q));
 document.getElementById("searchResults").innerHTML=q?r.map(p=>`<div class="result" onclick="addToCart(${p.id});document.getElementById('searchModal').classList.remove('show')"><strong>${p.name}</strong><span>${p.category} · ${money(p.price)}</span></div>`).join(""):"";
};

document.getElementById("checkoutBtn").onclick=()=>{
 if(!cart.length){alert("Your bag is empty.");return}
 const lines=cart.map(x=>{const p=products.find(y=>y.id===x.id);return `• ${p.name} x${x.qty} — ${money(p.price*x.qty)}`}).join("%0A");
 const total=cart.reduce((s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0);
 const msg=`Hello Luxe Boutique!%0A%0AI'd like to order:%0A${lines}%0A%0A*Total: ${money(total)}*%0A%0APlease let me know the available sizes, delivery options and payment details.`;
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,"_blank");
};

document.getElementById("contactWhatsApp").href=`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Luxe%20Boutique,%20I%20would%20like%20to%20make%20an%20enquiry.`;
document.getElementById("waContact").href=`https://wa.me/${WHATSAPP_NUMBER}`;
document.getElementById("subscribeForm").onsubmit=e=>{e.preventDefault();document.getElementById("subscribeMsg").textContent="You're on the list — welcome to Luxe.";e.target.reset()};

renderProducts();renderCart();