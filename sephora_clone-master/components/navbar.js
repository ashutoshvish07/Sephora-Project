let navbar = () => {
	return `
    <header>

			<!-- stickynav Start -->
			<div id="outernav">
				<div id="innernav">
					<div id="Stickynav_leftDiv"><a id="stickynavsephora" href="index.html">SEPHORA</a></div>
					<div>
						<ul class="main-menu">
							<li id="sale1">
								<a href="sale.html">SALE</a>
							</li>
							<li>
								<a href="makeup.html">MAKEUP</a>
		
								<div class="menu-sub">
									<ul class="sub-category">
										<li>
											<a  onclick = "searchPro(innerText)" href="">FACE</a>
											<ul id="innerUL1">
												<li onclick = "searchPro(innerText)">Foundation</li>
												<li onclick = "searchPro(innerText)">BB & CC Cream</li>
												<li onclick = "searchPro(innerHTML)">Concealer</li>
												<li onclick = "searchPro(innerHTML)">Face Primer</li>
												<li onclick = "searchPro(innerHTML)">Highlighter</li>
												<li onclick = "searchPro(innerHTML)">Face Brushes</li>
												<li onclick = "searchPro(innerHTML)">Makeup Palette</li>
											</ul>
										</li>
										
										<li>
											<a  onclick = "searchPro(innerText)" href="">EYE</a>
											<ul id="innerUL1">
												<li onclick = "searchPro(innerHTML)">Eye Palettes</li>
												<li onclick = "searchPro(innerHTML)">Mascara</li>
												<li onclick = "searchPro(innerHTML)">Eyeliner</li>
												<li onclick = "searchPro(innerHTML)">Eyebrow</li>
												<li onclick = "searchPro(innerHTML)">Eyeshadow</li>
												<li onclick = "searchPro(innerHTML)">Eye Primer</li>
												<li onclick = "searchPro(innerHTML)">Eye Brushes</li>
												<li onclick = "searchPro(innerHTML)">Contact Lenses</li>
											</ul>
										</li>
		
										<li>
											<a onclick = "searchPro(innerText)" href="">LIP</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Lipstick</li>
												<li  onclick = "searchPro(innerText)">Lip Stain</li>
												<li  onclick = "searchPro(innerText)">Lip Gloss</li>
												<li  onclick = "searchPro(innerText)">Lip Liner</li>
												<li  onclick = "searchPro(innerText)">Lip Balm & Treatment</li>
												<li  onclick = "searchPro(innerText)">Lip Brushes</li>
											</ul>
										</li>
		
										<li>
											<a onclick = "searchPro(innerText)" href="">CHEEK</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Blush</li>
												<li  onclick = "searchPro(innerText)">Bronzer</li>
												<li  onclick = "searchPro(innerText)">Highlighter</li>
												<li  onclick = "searchPro(innerText)">Face Primer</li>
												<li  onclick = "searchPro(innerText)">Face Oils</li>
											</ul>
										</li>
		
										<li>
											<a  onclick = "searchPro(innerText)" href="">NAIL MAKEUP</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Nail Polish</li>
												<li  onclick = "searchPro(innerText)">Nail Care</li>
												<li  onclick = "searchPro(innerText)">Manicure & Pedicure Tools</li>
											</ul>
										</li>
		
										<li>
											<a  onclick = "searchPro(innerText)" href="">MAKEUP ACCESSORIES</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Tweezers & Eyebrow Tools</li>
												<li  onclick = "searchPro(innerText)">Makeup Removers</li>
												<li  onclick = "searchPro(innerText)">Sponges & Applicators</li>
												<li  onclick = "searchPro(innerText)">Makeup Bags & Travel Cases</li>
											</ul>
										</li>
		
										<li>
											<a  onclick = "searchPro(innerText)" href="">VEGAN</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Eye</li>
												<li  onclick = "searchPro(innerText)">Face</li>
												<li  onclick = "searchPro(innerText)">Highlighter</li>
											</ul>
										</li>
									</ul>
									
								</div>
								
							</li>
							<li>
								<a   onclick = "searchPro(innerText)" href="skinCare.html">SKINCARE</a>
								<div class="menu-sub">
									<ul class="sub-category">
										<li>
											<a   onclick = "searchPro(innerText)" href="">MOISTURIZERS</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Moisturizers</li>
												<li  onclick = "searchPro(innerText)">Night Creams</li>
												<li  onclick = "searchPro(innerText)">Mists & Essences</li>
												<li  onclick = "searchPro(innerText)">BB & CC Creams</li>
											</ul>
										</li>
		
										<li>
											<a   onclick = "searchPro(innerText)" href="">CLEANSERS</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Makeup Removers</li>
												<li  onclick = "searchPro(innerText)">Face Wipes</li>
												<li  onclick = "searchPro(innerText)">Toners</li>
												<li  onclick = "searchPro(innerText)">Hand Sanitizers</li>
											</ul>
										</li>
		
										<li>
											<a   onclick = "searchPro(innerText)" href=""> TREATMENTS & HIGH TECH TOOLS</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Face Serums</li>
												<li  onclick = "searchPro(innerText)">Cleansing Tools</li>
												<li  onclick = "searchPro(innerText)">Eye Creams & Treatments</li>
											</ul>
										</li>
		
										<li>
											<a   onclick = "searchPro(innerText)" href="">MASKS</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Sheet Masks</li>
												<li  onclick = "searchPro(innerText)">Face Masks</li>
												<li  onclick = "searchPro(innerText)">Eye Masks</li>
												<li  onclick = "searchPro(innerText)">Lip Masks</li>
												<li  onclick = "searchPro(innerText)">Hand Masks</li>
												<li  onclick = "searchPro(innerText)">Foot Masks</li>
											</ul>
										</li>
		
										<li>
											<a   onclick = "searchPro(innerText)" href="">BATH & SHOWER</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Body Wash and Shower Gel</li>
												<li  onclick = "searchPro(innerText)">Scrub and Exfoliants</li>
												<li  onclick = "searchPro(innerText)">Exfoliators</li>
											</ul>
										</li>
		
										<li>
											<a   onclick = "searchPro(innerText)" href="">BODY MOISTURIZERS</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Body Lotions & Body Oils</li>
												<li  onclick = "searchPro(innerText)">Hand Cream & Foot Cream</li>
											</ul>
										</li>
		
										<li>
											<a  onclick = "searchPro(innerText)" href="">VEGAN</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Face Care</li>
											</ul>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<a  onclick = "searchPro(innerText)" href="fragnance.html">FRAGRANCE</a>
								<div class="menu-sub">
									<ul class="sub-category">
										<li>
											<a  onclick = "searchPro(innerText)" href="">WOMEN</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Perfume</li>
												<li  onclick = "searchPro(innerText)">Mists and Deodorants</li>
											</ul>
										</li>
		
										<li>
											<a  onclick = "searchPro(innerText)" href="">MEN</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Perfume</li>
												<li  onclick = "searchPro(innerText)">Body Sprays & Deodorant</li>
											</ul>
										</li>
									</ul>
								</div>
							</li>
		
							<li>
								<a   onclick = "searchPro(innerText)" href="haircare.html" >HAIRCARE</a>
								<div class="menu-sub">
									<ul class="sub-category">
										<li>
											<a   onclick = "searchPro(innerText)" href="">SHAMPOO & CONDITIONER</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Shampoo</li>
												<li  onclick = "searchPro(innerText)">Conditioner</li>
											</ul>
										</li>
		
										<li>
											<a   onclick = "searchPro(innerText)" >HAIR STYLING & TREATMENTS</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Hair Spray & Styling Products</li>
												<li  onclick = "searchPro(innerText)">Hair Oil</li>
												<li  onclick = "searchPro(innerText)">Hair Masks</li>
												<li  onclick = "searchPro(innerText)">Hair Clips</li>
											</ul>
										</li>
									</ul>
								</div>
							</li>
		
		
							<li>
								<a  onclick = "searchPro(innerText)"  href="tools.html"
									>TOOLS & BRUSHES</a>
								<div class="menu-sub">
									<ul class="sub-category">
										<li>
											<a   onclick = "searchPro(innerText)" href="">BRUSHES</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Face Brushes</li>
												<li  onclick = "searchPro(innerText)">Eye Brushes</li>
												<li  onclick = "searchPro(innerText)">Lip Brushes</li>
											</ul>
										</li>
		
										<li>
											<a   onclick = "searchPro(innerText)" href="">VEGAN</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Face Brushes</li>
												<li  onclick = "searchPro(innerText)">Eye Brushes</li>
											</ul>
										</li>
										<li>
											<a   onclick = "searchPro(innerText)" href="">TOOLS</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Sponges & Applicators</li>
												<li  onclick = "searchPro(innerText)">Face Tools</li>
												<li  onclick = "searchPro(innerText)">Tweezers & Eyebrow Tools</li>
												<li  onclick = "searchPro(innerText)">Eyelash Curlers</li>
												<li  onclick = "searchPro(innerText)">Accessories</li>
												<li  onclick = "searchPro(innerText)">Brush Cleaners</li>
											</ul>
										</li>
									</ul>
								</div>
							</li>
		
							<li>
								<a   onclick = "searchPro(innerText)" href="brand.html"
									>BRANDS</a
								>
								<div class="menu-sub">
									<ul class="sub-category">
										<li>
											<a   onclick = "searchPro(innerText)" href="">TOP MAKEUP BRANDS</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Sephora Collection</li>
												<li  onclick = "searchPro(innerText)">Lancôme</li>
												<li  onclick = "searchPro(innerText)">Huda Beauty</li>
												<li  onclick = "searchPro(innerText)">Benefit Cosmetics</li>
												<li  onclick = "searchPro(innerText)">Anastasia Beverly Hills</li>
												<li  onclick = "searchPro(innerText)">Bobbi Brown</li>
												<li  onclick = "searchPro(innerText)">Smashbox</li>
												<li  onclick = "searchPro(innerText)">Estee Lauder</li>
												<li  onclick = "searchPro(innerText)">Nudestix</li>
												<li  onclick = "searchPro(innerText)">MAC</li>
												<li  onclick = "searchPro(innerText)">Make Up For Ever</li>
												<li  onclick = "searchPro(innerText)">Gallinee</li>
												<li  onclick = "searchPro(innerText)">Guerlain</li>
											</ul>
										</li>
										<li>
											<a   onclick = "searchPro(innerText)" href="">TOP SKINCARE BRANDS</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Lancôme</li>
												<li  onclick = "searchPro(innerText)">Caudalie</li>
												<li  onclick = "searchPro(innerText)">Kora Organics</li>
												<li  onclick = "searchPro(innerText)">Mario Badescu</li>
												<li  onclick = "searchPro(innerText)">Foreo</li>
												<li  onclick = "searchPro(innerText)">Pixi</li>
												<li  onclick = "searchPro(innerText)">Shiseido</li>
												<li  onclick = "searchPro(innerText)">Estee Lauder</li>
												<li  onclick = "searchPro(innerText)">Clarins</li>
												<li  onclick = "searchPro(innerText)">Elizabeth Arden</li>
												<li  onclick = "searchPro(innerText)">Clinique</li>
												<li  onclick = "searchPro(innerText)">Gallinee</li>
												<li  onclick = "searchPro(innerText)">Wishful</li>
												<li  onclick = "searchPro(innerText)">Sunday Riley</li>
											</ul>
										</li>
		
										<li>
											<a   onclick = "searchPro(innerText)" href="">TOP FRAGRANCE BRANDS</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Tom Ford</li>
												<li  onclick = "searchPro(innerText)">Hugo Boss</li>
												<li  onclick = "searchPro(innerText)">Issey Miyake</li>
												<li  onclick = "searchPro(innerText)">Ermenegildo Zegna</li>
												<li  onclick = "searchPro(innerText)">Dolce & Gabbana</li>
												<li  onclick = "searchPro(innerText)">Paco Rabanne</li>
												<li  onclick = "searchPro(innerText)">Bvlgari</li>
												<li  onclick = "searchPro(innerText)">Kayali</li>
												<li  onclick = "searchPro(innerText)">Roberto Cavalli</li>
												<li  onclick = "searchPro(innerText)">Davidoff</li>
												<li  onclick = "searchPro(innerText)">Calvin Klein</li>
												<li  onclick = "searchPro(innerText)">Gallinee</li>
												<li  onclick = "searchPro(innerText)">Chopard</li>
												<li  onclick = "searchPro(innerText)">Yves Saint Laurent</li>
												<li  onclick = "searchPro(innerText)">Burberry</li>
											</ul>
										</li>
										
										<li>
											<a   onclick = "searchPro(innerText)"href="">NEW IN</a>
											<ul id="innerUL1">
												<li  onclick = "searchPro(innerText)">Juice Beauty</li>
												<li  onclick = "searchPro(innerText)">Abhati Suisse</li>
												<li  onclick = "searchPro(innerText)">Kora Organics</li>
												<li  onclick = "searchPro(innerText)">Caudalie</li>
												<li  onclick = "searchPro(innerText)">Mario Badescu</li>
												<li  onclick = "searchPro(innerText)">Moroccanoil</li>
												<li  onclick = "searchPro(innerText)">Tiffany & Co</li>
												<li  onclick = "searchPro(innerText)">Natasha Denona</li>
												<li  onclick = "searchPro(innerText)">Lancôme</li>
												<li  onclick = "searchPro(innerText)">Dear Dahlia</li>
											</ul>
										</li>
										
									</ul>
								</div>
		
		
									</ul>
					</div>
					<div id="Stickynav_rightDiv">
						<span class="material-icons">shopping_bag</span>
						<hr>
					   
						<span class="material-icons">person </span> 
						<a id="stickynavlogin" class="logname1" href="#">Login</a>
					</div>
				</div>
			</div>
			<!-- stickynav End -->


			<div class="nav-section" id="nav-section">
				<div class="head-top-parent">
					<div class="head head-top" id="head-top">
						<div class="head-top-left" id="head-top-left">
							<div>
								<span id="sidebarlogo" class="material-icons">menu</span>
							</div>
							<div>
								<img
									src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
									alt=""
								/>
							</div>
							<hr />
							<!-- <div><h3><span class="material-icons">place</span> Store Locator</h3></div> -->
							<span id="storelocatid" class="material-icons">place</span>
							<a id="getapp" href="map.html">Store Locator</a>
						</div>

						<div class="head-top-center" id="head-top-center">
							<span id="star1" class="material-icons">star_rate</span>
							<span id="star2" class="material-icons">star_rate</span>
							<span id="star3" class="material-icons">star_rate</span>
							<p>Check Out Our Newest Arrivals</p>
							<span id="star1" class="material-icons">star_rate</span>
							<span id="star2" class="material-icons">star_rate</span>
							<span id="star3" class="material-icons">star_rate</span>
						</div>

						<div class="head-top-right" id="head-top-right">
							<span class="material-icons">get_app</span>
							<a id="getapp" href="getapp.html">Get App</a>
							<hr />
							<span class="material-icons">view_in_ar</span>
							<a id="getapp" href="">Track Order</a>
							<hr />
							<span class="material-icons">emoji_events</span>
							<a id="getapp" href="">Loyalty</a>
						</div>
					</div>
				</div>

				<div class="head head-bottom" id="head-bottom">
					<div class="head-bottom-upper" id="head-bottom-upper">
						<div  class="input-head-bottom-upper" id="input-head-bottom-upper">
							<form
								class="example"
								style="margin: auto; max-width: 300px"
							>
								<button >
									<span class="material-icons"> search </span>
								</button>
								<input type="text" placeholder="Search.." name="search2" id="searchDiv"  onClick="document.getElementById('searchresults').style.display='block'" />
							</form>
							<hr id="input-hr" />
                            <div class="searchresults" id="searchresults">
                                <b>Popular Searches</b>
                                <p onclick = "searchPro(innerText)">Cream lip stain</p>
                                <p onclick = "searchPro(innerText)">lip</p>
                                <p onclick = "searchPro(innerText)">Sephora Collection</p>
                                <p onclick = "searchPro(innerText)">Foreo luna</p>
                                <p onclick = "searchPro(innerText)">Tom ford</p>
                                <p onclick = "searchPro(innerText)">Foundation</p>
                                <p onclick = "searchPro(innerText)">Lipstick</p>
                            </div>
						</div>
						<div class="title-head-bottom-upper" id="head-bottom-title-upper">
							<p>SEPHORA</p>
						</div>
						<div
							class="rightDiv-head-bottom-upper"
							id="rightDiv-head-bottom-upper"
						>
							<span id="redirectToFav" class="material-icons"> favorite_border </span>
							<hr />
							<span  id="RedirectTobag" class="material-icons"> shopping_bag </span>
							<hr />
							<div class="account box" id="account">
								<a class="button" id="logname" href="#popup1">Login</a>
								<span class="material-icons"> expand_more </span>
							</div>
							<div class="accountDetails" id="accoountDetails"></div>
						</div>
					</div>

					<div class="head-bottom-lower" id="head-bottom-lower">
						<div class="head-bottom-dropdown">
							<div class="navcontainer">
								<ul class="main-menu">
									<li id="sale">
										<a href="sale.html">SALE</a>
									</li>
									<li>
										<a href="makeup.html">MAKEUP</a>

										<div class="menu-sub">
											<ul class="sub-category">
												<li>
													<a  onclick = "searchPro(innerText)" href="">FACE</a>
													<ul id="innerUL">
														<li onclick = "searchPro(innerText)">Foundation</li>
														<li onclick = "searchPro(innerText)">BB & CC Cream</li>
														<li onclick = "searchPro(innerHTML)">Concealer</li>
														<li onclick = "searchPro(innerHTML)">Face Primer</li>
														<li onclick = "searchPro(innerHTML)">Highlighter</li>
														<li onclick = "searchPro(innerHTML)">Face Brushes</li>
														<li onclick = "searchPro(innerHTML)">Makeup Palette</li>
													</ul>
												</li>
												
												<li>
													<a  onclick = "searchPro(innerText)" href="">EYE</a>
													<ul id="innerUL">
														<li onclick = "searchPro(innerHTML)">Eye Palettes</li>
														<li onclick = "searchPro(innerHTML)">Mascara</li>
														<li onclick = "searchPro(innerHTML)">Eyeliner</li>
														<li onclick = "searchPro(innerHTML)">Eyebrow</li>
														<li onclick = "searchPro(innerHTML)">Eyeshadow</li>
														<li onclick = "searchPro(innerHTML)">Eye Primer</li>
														<li onclick = "searchPro(innerHTML)">Eye Brushes</li>
														<li onclick = "searchPro(innerHTML)">Contact Lenses</li>
													</ul>
												</li>

												<li>
													<a onclick = "searchPro(innerText)" href="">LIP</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Lipstick</li>
														<li  onclick = "searchPro(innerText)">Lip Stain</li>
														<li  onclick = "searchPro(innerText)">Lip Gloss</li>
														<li  onclick = "searchPro(innerText)">Lip Liner</li>
														<li  onclick = "searchPro(innerText)">Lip Balm & Treatment</li>
														<li  onclick = "searchPro(innerText)">Lip Brushes</li>
													</ul>
												</li>

												<li>
													<a onclick = "searchPro(innerText)" href="">CHEEK</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Blush</li>
														<li  onclick = "searchPro(innerText)">Bronzer</li>
														<li  onclick = "searchPro(innerText)">Highlighter</li>
														<li  onclick = "searchPro(innerText)">Face Primer</li>
														<li  onclick = "searchPro(innerText)">Face Oils</li>
													</ul>
												</li>

												<li>
													<a  onclick = "searchPro(innerText)" href="">NAIL MAKEUP</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Nail Polish</li>
														<li  onclick = "searchPro(innerText)">Nail Care</li>
														<li  onclick = "searchPro(innerText)">Manicure & Pedicure Tools</li>
													</ul>
												</li>

												<li>
													<a  onclick = "searchPro(innerText)" href="">MAKEUP ACCESSORIES</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Tweezers & Eyebrow Tools</li>
														<li  onclick = "searchPro(innerText)">Makeup Removers</li>
														<li  onclick = "searchPro(innerText)">Sponges & Applicators</li>
														<li  onclick = "searchPro(innerText)">Makeup Bags & Travel Cases</li>
													</ul>
												</li>

												<li>
													<a  onclick = "searchPro(innerText)" href="">VEGAN</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Eye</li>
														<li  onclick = "searchPro(innerText)">Face</li>
														<li  onclick = "searchPro(innerText)">Highlighter</li>
													</ul>
												</li>
											</ul>
                                            
										</div>
                                        
									</li>
									<li>
										<a   onclick = "searchPro(innerText)" href="skinCare.html">SKINCARE</a>
										<div class="menu-sub">
											<ul class="sub-category">
												<li>
													<a   onclick = "searchPro(innerText)" href="">MOISTURIZERS</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Moisturizers</li>
														<li  onclick = "searchPro(innerText)">Night Creams</li>
														<li  onclick = "searchPro(innerText)">Mists & Essences</li>
														<li  onclick = "searchPro(innerText)">BB & CC Creams</li>
													</ul>
												</li>

												<li>
													<a   onclick = "searchPro(innerText)" href="">CLEANSERS</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Makeup Removers</li>
														<li  onclick = "searchPro(innerText)">Face Wipes</li>
														<li  onclick = "searchPro(innerText)">Toners</li>
														<li  onclick = "searchPro(innerText)">Hand Sanitizers</li>
													</ul>
												</li>

												<li>
													<a   onclick = "searchPro(innerText)" href=""> TREATMENTS & HIGH TECH TOOLS</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Face Serums</li>
														<li  onclick = "searchPro(innerText)">Cleansing Tools</li>
														<li  onclick = "searchPro(innerText)">Eye Creams & Treatments</li>
													</ul>
												</li>

												<li>
													<a   onclick = "searchPro(innerText)" href="">MASKS</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Sheet Masks</li>
														<li  onclick = "searchPro(innerText)">Face Masks</li>
														<li  onclick = "searchPro(innerText)">Eye Masks</li>
														<li  onclick = "searchPro(innerText)">Lip Masks</li>
														<li  onclick = "searchPro(innerText)">Hand Masks</li>
														<li  onclick = "searchPro(innerText)">Foot Masks</li>
													</ul>
												</li>

												<li>
													<a   onclick = "searchPro(innerText)" href="">BATH & SHOWER</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Body Wash and Shower Gel</li>
														<li  onclick = "searchPro(innerText)">Scrub and Exfoliants</li>
														<li  onclick = "searchPro(innerText)">Exfoliators</li>
													</ul>
												</li>

												<li>
													<a   onclick = "searchPro(innerText)" href="">BODY MOISTURIZERS</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Body Lotions & Body Oils</li>
														<li  onclick = "searchPro(innerText)">Hand Cream & Foot Cream</li>
													</ul>
												</li>

												<li>
													<a  onclick = "searchPro(innerText)" href="">VEGAN</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Face Care</li>
													</ul>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<a  onclick = "searchPro(innerText)" href="fragnance.html">FRAGRANCE</a>
										<div class="menu-sub">
											<ul class="sub-category">
												<li>
													<a  onclick = "searchPro(innerText)" href="">WOMEN</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Perfume</li>
														<li  onclick = "searchPro(innerText)">Mists and Deodorants</li>
													</ul>
												</li>

												<li>
													<a  onclick = "searchPro(innerText)" href="">MEN</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Perfume</li>
														<li  onclick = "searchPro(innerText)">Body Sprays & Deodorant</li>
													</ul>
												</li>
											</ul>
										</div>
									</li>

									<li>
										<a   onclick = "searchPro(innerText)" href="haircare.html" >HAIRCARE</a>
										<div class="menu-sub">
											<ul class="sub-category">
												<li>
													<a   onclick = "searchPro(innerText)" href="">SHAMPOO & CONDITIONER</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Shampoo</li>
														<li  onclick = "searchPro(innerText)">Conditioner</li>
													</ul>
												</li>

												<li>
													<a   onclick = "searchPro(innerText)" >HAIR STYLING & TREATMENTS</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Hair Spray & Styling Products</li>
														<li  onclick = "searchPro(innerText)">Hair Oil</li>
														<li  onclick = "searchPro(innerText)">Hair Masks</li>
														<li  onclick = "searchPro(innerText)">Hair Clips</li>
													</ul>
												</li>
											</ul>
										</div>
									</li>


									<li>
										<a  onclick = "searchPro(innerText)"  href="tools.html"
											>TOOLS & BRUSHES</a>
										<div class="menu-sub">
											<ul class="sub-category">
												<li>
													<a   onclick = "searchPro(innerText)" href="">BRUSHES</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Face Brushes</li>
														<li  onclick = "searchPro(innerText)">Eye Brushes</li>
														<li  onclick = "searchPro(innerText)">Lip Brushes</li>
													</ul>
												</li>

												<li>
													<a   onclick = "searchPro(innerText)" href="">VEGAN</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Face Brushes</li>
														<li  onclick = "searchPro(innerText)">Eye Brushes</li>
													</ul>
												</li>
												<li>
													<a   onclick = "searchPro(innerText)" href="">TOOLS</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Sponges & Applicators</li>
														<li  onclick = "searchPro(innerText)">Face Tools</li>
														<li  onclick = "searchPro(innerText)">Tweezers & Eyebrow Tools</li>
														<li  onclick = "searchPro(innerText)">Eyelash Curlers</li>
														<li  onclick = "searchPro(innerText)">Accessories</li>
														<li  onclick = "searchPro(innerText)">Brush Cleaners</li>
													</ul>
												</li>
											</ul>
										</div>
									</li>

									<li>
										<a   onclick = "searchPro(innerText)" href="brand.html"
											>BRANDS</a
										>
										<div class="menu-sub">
											<ul class="sub-category">
												<li>
													<a   onclick = "searchPro(innerText)" href="">TOP MAKEUP BRANDS</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Sephora Collection</li>
														<li  onclick = "searchPro(innerText)">Lancôme</li>
														<li  onclick = "searchPro(innerText)">Huda Beauty</li>
														<li  onclick = "searchPro(innerText)">Benefit Cosmetics</li>
														<li  onclick = "searchPro(innerText)">Anastasia Beverly Hills</li>
														<li  onclick = "searchPro(innerText)">Bobbi Brown</li>
														<li  onclick = "searchPro(innerText)">Smashbox</li>
														<li  onclick = "searchPro(innerText)">Estee Lauder</li>
														<li  onclick = "searchPro(innerText)">Nudestix</li>
														<li  onclick = "searchPro(innerText)">MAC</li>
														<li  onclick = "searchPro(innerText)">Make Up For Ever</li>
														<li  onclick = "searchPro(innerText)">Gallinee</li>
														<li  onclick = "searchPro(innerText)">Guerlain</li>
													</ul>
												</li>
												<li>
													<a   onclick = "searchPro(innerText)" href="">TOP SKINCARE BRANDS</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Lancôme</li>
														<li  onclick = "searchPro(innerText)">Caudalie</li>
														<li  onclick = "searchPro(innerText)">Kora Organics</li>
														<li  onclick = "searchPro(innerText)">Mario Badescu</li>
														<li  onclick = "searchPro(innerText)">Foreo</li>
														<li  onclick = "searchPro(innerText)">Pixi</li>
														<li  onclick = "searchPro(innerText)">Shiseido</li>
														<li  onclick = "searchPro(innerText)">Estee Lauder</li>
														<li  onclick = "searchPro(innerText)">Clarins</li>
														<li  onclick = "searchPro(innerText)">Elizabeth Arden</li>
														<li  onclick = "searchPro(innerText)">Clinique</li>
														<li  onclick = "searchPro(innerText)">Gallinee</li>
														<li  onclick = "searchPro(innerText)">Wishful</li>
														<li  onclick = "searchPro(innerText)">Sunday Riley</li>
													</ul>
												</li>

												<li>
													<a   onclick = "searchPro(innerText)" href="">TOP FRAGRANCE BRANDS</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Tom Ford</li>
														<li  onclick = "searchPro(innerText)">Hugo Boss</li>
														<li  onclick = "searchPro(innerText)">Issey Miyake</li>
														<li  onclick = "searchPro(innerText)">Ermenegildo Zegna</li>
														<li  onclick = "searchPro(innerText)">Dolce & Gabbana</li>
														<li  onclick = "searchPro(innerText)">Paco Rabanne</li>
														<li  onclick = "searchPro(innerText)">Bvlgari</li>
														<li  onclick = "searchPro(innerText)">Kayali</li>
														<li  onclick = "searchPro(innerText)">Roberto Cavalli</li>
														<li  onclick = "searchPro(innerText)">Davidoff</li>
														<li  onclick = "searchPro(innerText)">Calvin Klein</li>
														<li  onclick = "searchPro(innerText)">Gallinee</li>
														<li  onclick = "searchPro(innerText)">Chopard</li>
														<li  onclick = "searchPro(innerText)">Yves Saint Laurent</li>
														<li  onclick = "searchPro(innerText)">Burberry</li>
													</ul>
												</li>
												
												<li>
													<a   onclick = "searchPro(innerText)"href="">NEW IN</a>
													<ul id="innerUL">
														<li  onclick = "searchPro(innerText)">Juice Beauty</li>
														<li  onclick = "searchPro(innerText)">Abhati Suisse</li>
														<li  onclick = "searchPro(innerText)">Kora Organics</li>
														<li  onclick = "searchPro(innerText)">Caudalie</li>
														<li  onclick = "searchPro(innerText)">Mario Badescu</li>
														<li  onclick = "searchPro(innerText)">Moroccanoil</li>
														<li  onclick = "searchPro(innerText)">Tiffany & Co</li>
														<li  onclick = "searchPro(innerText)">Natasha Denona</li>
														<li  onclick = "searchPro(innerText)">Lancôme</li>
														<li  onclick = "searchPro(innerText)">Dear Dahlia</li>
													</ul>
												</li>
												
											</ul>
										</div>


											</ul>
										</div>
									</li>
								</ul>
                                
							</div>
						</div>
					</div>
				</div>
			</div>

            <div id="popup1" class="overlay1">
                <div class="popup">
                    <a class="close" href="#">&times;</a>
                    <div class="content">
                        <div class="form1" id="content1">
                            <h1>Log In</h1>
                            <div id="form1" action="">
                                <label for="username">Username</label>
                                <input type="text" id="username" placeholder="Enter Username" />
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter password"
                                />
                                <a class="close1" id="submit1"  href="#">Submit</a>
                            </div>
                            <span>Do not have account? <a id="form1a2" href="#popup2">Signup here</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="popup2" class="overlay2">
                <div class="popup">
                    <a class="close" href="#">&times;</a>
                    <div class="content">
                        <div id="content2">
                            <h1>Sign up</h1>
                            <div class="form1" id="form1" action="">
                                <label for="name1">Name</label>
                                <input type="text" id="name1" placeholder="Enter Name" />
                                <label for="email1">Email</label>
                                <input type="text" id="email1" placeholder="Enter Email" />
                                <label for="mobile1">Mobile Number</label>
                                <input
                                    type="number"
                                    id="mobile1"
                                    placeholder="Enter Mobile number"
                                />
                                <label for="username1">Username</label>
                                <input type="text" id="username1" placeholder="Enter Username" />
                                <label for="password1">Password</label>
                                <input
                                    type="password"
                                    id="password1"
                                    placeholder="Enter password"
                                />
                                <a class="close1" id="submit2" href="#">Submit</a>
                                <!-- <button>
                                    <a class="close" href="index.html">&times;</a>Submit
                                </button> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			
		</header>

		<!-- sidebar -->
		<div class="header">
			<div><a href="">SEPHORA</a></div>
			<div class="right-header">
				<span class="material-icons"> search </span>
				<hr>
				<span class="material-icons"> favorite_border </span>
				<hr>
				<span class="material-icons"> shopping_bag </span>
			</div>
		</div>
		<input type="checkbox" id="openSidebarMenu">
                        <label for="openSidebarMenu" class="sidebarIconToggle">
                            <div class="spinner top"></div>
                            <div class="spinner middle"></div>
                            <div class="spinner bottom"></div>
                        </label>
						<div id="sidebarMenu">
                            <ul class="menu">   
                                <li id="sidebar_sale"><a href="sale.html">SALE</a></li>
                                <hr>
                                <!-- <li id="ab" onmouseover="showme()" onmouseout="hideme()"><a href="#">MAKEUP</a> -->
                                <li id="ab" onclick="showme()"><a href="#">MAKEUP <span class="material-icons">expand_more</span></a>
                                    <div id="cheek">
                                        <p ><a href="#">FACE</a></p>
                                        <p ><a href="#">Lancome</a></p>
                                        <p ><a href="#">CHEEK</a></p>
                                        <p ><a href="#">EYE</a></p>
                                    </div>
                                    
                                    
                                </li>
                                
                                <!-- <li id="ab1" onmouseover="showme1()" onmouseout="hideme1()"><a href="#">SKINCARE</a> -->
                                <li id="ab1" onclick="showme1()"><a href="#">SKINCARE <span class="material-icons">expand_more</span> </a>
                                    <div id="SKIN">
                                        <p ><a href="#">MOISTURIZERS</a></p>
                                        <p ><a href="#">CLEANSERS</a></p>
                                        <p ><a href="#">VEGAN</a></p>
                                        <p ><a href="#">LANCOME</a></p>
                                    </div>
                                    
                                </li>

                                <li id="haircareDiv" onclick="showme2()"><a href="#">HAIRCARE <span class="material-icons">expand_more</span> </a>
                                    <div id="hairsSub">
                                        <p ><a href="#">SHAMPOO & CONDITIONER</a></p>
                                        <p ><a href="#">HAIR STYLING & TREATMENTS</a></p>
                                        <p ><a href="#">TOP BRANDS</a></p>
                                    </div>
                                    
                                </li>

                                <li id="toolsDiv" onclick="showme3()"><a href="#">TOOLS & BRUSHES <span class="material-icons">expand_more</span> </a>
                                    <div id="brush_tool_Sub">
                                        <p ><a href="#">TOOLS</a></p>
                                        <p ><a href="#">BRUSHES</a></p>
                                        <p ><a href="#">TOP BRANDS</a></p>
                                    </div>
                                    
                                </li>

                                
                                <li id="sidebar_login"><span class="material-icons">person</span><a class="button" id="sidelogname" href="#">Login</a></li>
                                <li id="sidebar_app"><a href="#"><span class="material-icons"> get_app </span>DOWNLOAD APP</a></li>
                                <li id="sidebar_contact"><a href="#"><span class="material-icons">
                                    phone
                                    </span>CONTACT US</a></li>
                                
                                
                            </ul>
                        </div>
    `;
};

// let loginFn=()=>{
//     let register = async (e) => {
// 		e.preventDefault();

// 		let form_data = {
// 			name: document.getElementById("name1").value,
// 			email: document.getElementById("email1").value,
// 			password: document.getElementById("password1").value,
// 			username: document.getElementById("username1").value,
// 			mobile: document.getElementById("mobile1").value,
// 			description: "xyz",
// 		};

// 		// console.log(form_data);
// 		form_data = JSON.stringify(form_data);

// 		let res = await fetch(
// 			"https://masai-api-mocker.herokuapp.com/auth/register",
// 			{
// 				method: "POST",
// 				body: form_data,
// 				// mode: "no-cors",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			}
// 		);

// 		let data = await res.json();
// 		console.log(data);
// 		window.location.href = "test.html";
// 	};

// 	document.getElementById("submit2").addEventListener("click", register);

//     //login;
//     let login = async () => {
// 		let user_data = {
// 			username: document.getElementById("username").value,
// 			password: document.getElementById("password").value,
// 		};

// 		user_data = JSON.stringify(user_data);

// 		let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
// 			method: "POST",
// 			body: user_data,

// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		});

// 		let data = await res.json();

// 		let username = document.getElementById("username").value;
// 		getUserDetail(username, data.token);
// 		console.log(data);
// 	};

// 	document.getElementById("submit1").addEventListener("click", login);

// 	let getUserDetail = async (username, token) => {
// 		console.log("here");
// 		let res = await fetch(
// 			`https://masai-api-mocker.herokuapp.com/user/${username}`,
// 			{
// 				headers: {
// 					Authorization: `Bearer ${token}`,
// 				},
// 			}
// 		);

// 		let data = await res.json();
// 		console.log("user data: ", data);
//         let logName = document.getElementById("logname");
//         console.log(logName.innerHTML)
//         let name = data.name;
//         localStorage.setItem("accountName",name)
// 		// window.location.reload()

// 		let name2 = localStorage.getItem("accountName")

//     document.getElementById("logname").innerHTML = name2 || "Login"
//     document.getElementById("stickynavlogin").innerHTML = name2 || "Login"

// 	};
//     let name2 = localStorage.getItem("accountName")

//     document.getElementById("logname").innerHTML = name2 || "Login"
// 	document.getElementById("stickynavlogin").innerHTML = name2 || "Login"

// 	document.getElementById("submit1").addEventListener("click", login);
// };

export { navbar };
