const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
setTimeout(()=>$('.loader').classList.add('hide'),900);
window.addEventListener('scroll',()=>$('#header').classList.toggle('scrolled',scrollY>40));
$('#hamb').onclick=()=>$('#nav').classList.toggle('open');$$('#nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
$$('.reveal').forEach(x=>io.observe(x));
$$('[data-count]').forEach(el=>{let target=+el.dataset.count,n=0;const tick=()=>{n=Math.min(target,n+Math.max(1,Math.ceil(target/35)));el.textContent=n+(target===86?'+':'');if(n<target)requestAnimationFrame(tick)};io.observe(el);el.dataset.counted='0';});
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3500)}
function chooseRoom(name){$('#room').value=name;document.querySelector('#booking').scrollIntoView({behavior:'smooth',block:'center'});toast(name+' selected. Choose your dates and check availability.')}
window.chooseRoom=chooseRoom;

const today=new Date();const iso=d=>{let x=new Date(d);return x.toISOString().slice(0,10)};$('#checkin').min=iso(today);$('#checkout').min=iso(today);
$('#checkin').onchange=()=>{let d=new Date($('#checkin').value);d.setDate(d.getDate()+1);$('#checkout').min=iso(d);if(!$('#checkout').value||$('#checkout').value<$('#checkout').min)$('#checkout').value=iso(d)};
$('#reserve').onclick=()=>{const ci=$('#checkin').value,co=$('#checkout').value,gu=$('#guests').value,ro=$('#room').value;if(!ci||!co)return toast('Please select check-in and check-out dates.');if(new Date(co)<=new Date(ci))return toast('Check-out must be after check-in.');const msg=`Hello Grand Crown Hotel & Suites,%0A%0AI would like to check availability.%0A%0ARoom: ${encodeURIComponent(ro)}%0AGuests: ${encodeURIComponent(gu)}%0ACheck-in: ${ci}%0ACheck-out: ${co}%0A%0APlease confirm availability and price.`;window.open('https://wa.me/2348061780092?text='+msg,'_blank')};

$('#contactForm').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));const body=`Hello Grand Crown Hotel & Suites,%0A%0AName: ${encodeURIComponent(d.name)}%0AEmail: ${encodeURIComponent(d.email)}%0APhone: ${encodeURIComponent(d.phone||'Not provided')}%0ARequest: ${encodeURIComponent(d.subject)}%0A%0AMessage:%0A${encodeURIComponent(d.message)}`;window.location.href='mailto:cagej6538@gmail.com?subject=Hotel Enquiry - '+encodeURIComponent(d.subject)+'&body='+body;toast('Opening your email app...')};
$$('.gallery-grid img').forEach(img=>img.onclick=()=>{window.open(img.src,'_blank')});
