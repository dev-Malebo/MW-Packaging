const WA="https://wa.me/27712834789?text=",$=id=>document.getElementById(id);
document.querySelector(".menu-toggle").onclick=()=>document.querySelector(".nav-links").classList.toggle("open");
const ob=$("open");
if(ob){try{const p=new Intl.DateTimeFormat("en-ZA",{timeZone:"Africa/Johannesburg",weekday:"short",hour:"numeric",hour12:false}).formatToParts(new Date());
const d=p.find(x=>x.type=="weekday").value,h=+p.find(x=>x.type=="hour").value,o=!/Sat|Sun/.test(d)&&h>=8&&h<17;
ob.className="open-badge "+(o?"on":"off");ob.textContent=o?"Open now · closes 5pm":"Closed · Mon–Fri 8am–5pm"}catch(e){}}
const form=$("form");
if(form)form.onsubmit=e=>{e.preventDefault();const g=i=>$(i).value;
window.open(WA+encodeURIComponent("Hi MW Packaging, I'm "+g("n")+". Interested in: "+g("s")+". "+g("m")),"_blank")};
const grid=$("grid");
if(grid){let cart={};
function draw(){const k=Object.keys(cart);$("count").textContent=k.reduce((a,x)=>a+cart[x],0);
$("cart-items").innerHTML=k.length?k.map(x=>`<div><span>${x}</span><span><button data-d="${x}">−</button> ${cart[x]} <button data-u="${x}">+</button></span></div>`).join(""):"<p>No items yet.</p>";
$("send").href=WA+encodeURIComponent("Hi MW Packaging, I'd like a quote for:\n"+k.map(x=>"- "+x+" x"+cart[x]).join("\n"))}
grid.onclick=e=>{const n=e.target.dataset.name;if(n){cart[n]=(cart[n]||0)+1;draw()}};
$("cart-items").onclick=e=>{const d=e.target.dataset.d,u=e.target.dataset.u;if(u)cart[u]++;if(d&&--cart[d]<1)delete cart[d];draw()};
$("cart-open").onclick=()=>$("drawer").classList.add("open");
$("cart-close").onclick=()=>$("drawer").classList.remove("open");
document.querySelector(".filters").onclick=e=>{const f=e.target.dataset.f;if(!f)return;
document.querySelectorAll(".filters button").forEach(b=>b.classList.toggle("on",b===e.target));
grid.querySelectorAll(".prod-card").forEach(c=>c.style.display=f==="All"||c.dataset.cat===f.replace("&amp;","&")||c.dataset.cat===f?"":"none")};
draw()}