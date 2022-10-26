class NavMenu extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<header>
				<nav>
					<ul class='nav'>
						<li class='nav'><a href='index.html'>Home</a></li>
						<li class='nav'><a href='measures.html'>Measure Numbers</a></li>
						<li class='dropdown'>
							<a href='javascript:void(0)' class='dropbtn'>Part Comparisions</a>
							<div class='dropdown-content'>
								<a>Soprano (future)</a>
								<a href='alto.html'>Alto</a>
								<a>Tenor (future)</a>
								<a>Bass (future)<a>
							</div>
						</li>
					</ul>
				</nav>
			</header>
		`;
	}
}

customElements.define('nav-menu', NavMenu);

class TOCMenu extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<h3>Part One</h3>
			<a href='#chorus04'>And the glory of the Lord</a><br>
			<a href='#chorus07'>And He shall purify</a><br>
			<a href='#chorus09'>O thou that tellest good tidings to Zion</a><br>
			<a href='#chorus12'>For unto us a Child is born</a><br>
			<a href='#chorus17'>Glory to God</a><br>
			<a href='#chorus21'>His yoke is easy, and His burthen is light</a><br>
			<h3>Part Two</h3>
			<a href='#chorus22'>Behold the Lamb of God</a><br>
			<a href='#chorus24'>Surely He hath borne our griefs</a><br>
			<a href='#chorus25'>And with His stripes we are healed</a><br>
			<a href='#chorus26'>All we like sheep have gone astray</a><br>
			<a href='#chorus44'>Hallelujah!</a><br>
			<h3>Part Three</h3>
			<a href='#chorus46'>Since by man came death</a><br>
			<a href='#chorus53'>Worthy is the Lamb</a><br>
		`;
	}
}

customElements.define('toc-menu', TOCMenu);

class Footer extends HTMLElement {
	constructor () {
		super();
	}

	static get observedAttributes () { return ['rev-date']; }
	attributeChangedCallback (name, oldVal, newVal) {
		if (name=='rev-date') { this.innerHTML = `
			<div class='footer'>
				<address>
					Elijah Goossen<br>
					<a href='mailto:kifaru9@gmail.com'>kifaru9@gmail.com</a><br>
					Last updated: ` + newVal + `
				</address>
			</div>
		`;}
	}
}

customElements.define('my-footer', Footer);