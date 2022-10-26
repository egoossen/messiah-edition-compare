class NavMenu extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<header>
				<nav>
					<ul>
						<li><a href='index.html'>Home</a></li>
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
			<a href='#chorus04'>Chorus 04</a><br>
			<a href='#chorus07'>Chorus 07</a><br>
			<a href='#chorus09'>Chorus 09</a><br>
			<a href='#chorus12'>Chorus 12</a><br>
			<a href='#chorus17'>Chorus 17</a><br>
			<a href='#chorus21'>Chorus 21</a><br>
			<h3>Part Two</h3>
			<a href='#chorus44'>Chorus 44</a><br>
			<h3>Part Three</h3>
			<a href='#chorus53'>Chorus 53</a><br>
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