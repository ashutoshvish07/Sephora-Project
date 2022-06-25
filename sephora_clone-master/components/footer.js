const footer=()=>{
	return `
	<div id="footer_div1">
	<h3><a href="https://sephora.nnnow.com/whoweare">WHO ARE WE</a></h3>
	<h3><a href="https://sephora.nnnow.com/customercare">FREQUENTLY ASKED QUESTIONS</a></h3>
	<h3><a href="https://sephora.nnnow.com/contactus">CONTACT US</a></h3>
</div>
<div id="sm_icons">
	<a href="https://www.facebook.com/heynnnow"><i class="fa-brands fa-facebook-f  fa-xl"></i></a>
	<a href="https://www.instagram.com/heynnnow/"><i class="fa-brands fa-instagram fa-xl"></i></a>
	<a href="https://twitter.com/heynnnow"><i class="fa-brands fa-twitter fa-xl"></i></a>
	<a href="https://www.youtube.com/channel/UCQ2fMb06LyWA0S5upVp2UJg"><i class="fa-brands fa-youtube fa-xl"></i></a>
</div>
<div id="footer_div2">
	<p> <a href="">© 2022 NNNOW  </a></p>|
	<p><a href="https://sephora.nnnow.com/privacypolicy">Privacy Policy</a></p> |
	<p><a href="https://sephora.nnnow.com/termsconditions">Terms & Conditions</a></p>
</div>


<h3>BRANDS</h3>
<div id="brands_footer">
	<p id="Sephora_Favorites" onclick="searchPro(innerText)">Sephora Collection <span>|</span></p>
	<p id="Benefit_Cosmetics" onclick="searchPro(innerText)">Benefit Cosmetics <span>|</span></p>
	<p id="MAKE_UP_FOR_EVER" onclick="searchPro(innerText)">Make Up For Ever <span>|</span></p>
	<p id="Armani_Beuty" onclick="searchPro(innerText)">Cover FX <span>|</span></p>
	<p id="stila" onclick="searchPro(innerText)">Stila <span>|</span></p>
	<p id="Naturally_Serious" onclick="searchPro(innerText)">Natio <span>|</span></p>
	<p id="Gisou" onclick="searchPro(innerText)">Burt's Bees <span>|</span></p>
	<p id="FOREO" onclick="searchPro(innerText)">Foreo <span>|</span></p>
	<p id="Smashbox" onclick="searchPro(innerText)">Smashbox <span>|</span></p>
	<p id="GLAMGLOW" onclick="searchPro(innerText)">Glamglow <span>|</span></p>
	<p id="Clinique" onclick="searchPro(innerText)">Clinique <span>|</span></p>
	<p id="Estee_Lauder" onclick="searchPro(innerText)">Estee Lauder <span>|</span></p>
	<p id="Elizabeth_Arden" onclick="searchPro(innerText)">Elizabeth Arden <span>|</span></p>
	<p id="Givenchy" onclick="searchPro(innerText)">Givenchy <span>|</span></p>
	<p id="Bobbi_Brown" onclick="searchPro(innerText)">Bobbi Brown <span>|</span></p>
	<p id="Shiseido" onclick="searchPro(innerText)">Shiseido <span>|</span></p>
	<p id="OPI" onclick="searchPro(innerText)">OPI <span>|</span></p>
	<p id="Forest_Essentials" onclick="searchPro(innerText)">Forest Essentials <span>|</span></p>
	<p id="Percy_&_Reed" onclick="searchPro(innerText)">Percy & Reed <span>|</span></p>
	<p id="Boscia" onclick="searchPro(innerText)">Boscia <span>|</span></p>
	<p id="Oscar_Blandi" onclick="searchPro(innerText)">Oscar Blandi <span>|</span></p>
	<p id="Burberry" onclick="searchPro(innerText)"> Burberry <span>|</span></p>
	<p id="CK_Fragrances" onclick="searchPro(innerText)">CK Fragrances <span>|</span></p>
	<p id="Kenzo" onclick="searchPro(innerText)">Kenzo <span>|</span></p>
	<p id="Tom_Ford" onclick="searchPro(innerText)">Tom Ford <span>|</span></p>
	<p id="Bvlgari" onclick="searchPro(innerText)">Bvlgari <span>|</span></p>
	<p id="Carolina_Herrera" onclick="searchPro(innerText)">Carolina Herrera <span>|</span></p>
	<p id="Davidoff" onclick="searchPro(innerText)">Davidoff <span>|</span></p>
	<p id="Giorgio_Armani" onclick="searchPro(innerText)"> Giorgio Armani <span>|</span></p>
	<p id="Montblanc" onclick="searchPro(innerText)">Montblanc <span>|</span></p>
	<p id="Paco_Rabanne" onclick="searchPro(innerText)">Paco Rabanne <span>|</span></p>
	<p id="Yves_Saint_Laurent" onclick="searchPro(innerText)">Yves Saint Laurent <span>|</span></p>
	<p id="Azzaro" onclick="searchPro(innerText)">Azzaro <span>|</span></p>
	<p id="Nina_Ricci" onclick="searchPro(innerText)">Nina Ricci <span>|</span></p>
	<p id="Roberto_Cavalli" onclick="searchPro(innerText)">Roberto Cavalli</p>
</div>


<h3>MAKEUP</h3>
<div id="makeup_footer">
	<p id="Face" onclick="searchPro(innerText)" >Face <span>|</span></p>
	<p id="Cheek"  onclick="searchPro(innerText)" >Cheek <span>|</span></p>
	<p id="Eye" onclick="searchPro(innerText)" >Eye <span>|</span></p>
	<p id="Lip" onclick="searchPro(innerText)" >Lip <span>|</span></p>
	<p id="Nail" onclick="searchPro(innerText)" >Nail <span>|</span></p>
	<p id="Makeup_Palettes" onclick="searchPro(innerText)" >Makeup Palettes <span>|</span></p>
	<p id="Accessories" onclick="searchPro(innerText)" >Accessories </p>
</div>


<h3>SKIN CARE</h3>
<div id="skincare_footer">
	<p id="Moisturizers" onclick="searchCat('cat1230034')"> Moisturizers <span>|</span></p>
	<p id="Cleansers" onclick="searchPro(innerText)">Cleansers <span>|</span></p>
	<p id="Treatments" onclick="searchPro(innerText)">Treatments <span>|</span></p>
	<p id="Masks" onclick="searchPro(innerText)"> Masks <span>|</span></p>
	<p id="Eye_Care" onclick="searchPro(innerText)"> Eye Care <span>|</span></p>
	<p id="Sun_Care" onclick="searchPro(innerText)">Sun Care <span>|</span></p>
	<p id="Lip_Treatments" onclick="searchPro(innerText)">Lip Treatments</p>
</div>

<h3>OTHER CATEGORIES</h3>
<div id="other_footer">
	<p id="Fragrances" onclick="searchPro(innerText)">Fragrances <span>|</span></p>
	<p id="Tools_&_Brushes" onclick="searchPro(innerText)">Tools & Brushes</p>
</div>


<h3>MY SEPHORA</h3>
<div id="mysephora_footer">
	<p><a href="">My orders <span>|</span></a></p>
	<p><a href="">Store locator <span>|</span></a></p>
	<p><a href="https://www.facebook.com/heynnnow">Sephora Facebook <span>|</span></a></p>
	<p><a href="https://www.instagram.com/heynnnow/">Sephora Instagram <span>|</span></a></p>

</div>
`
}

export {footer}