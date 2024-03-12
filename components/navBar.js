class navBar extends HTMLElement {
	constructor () {
		super();
	}

	connectedCallback () {
		this.render();
	}

	render() {
        this.innerHTML = `
		<nav>
			<menu>
				<div class="group">
					<a href="/">Home</a>
				</div>
				<ul class="group">
					<li>
						<a href="./language.html">English</a>
					</li>
					<li>
						<a href="./language.html">French</a>
					</li>
					<li>
						<a href="./language.html">Spanish</a>
					</li>
				</ul>
			</menu>
		</nav>
        `
		}
}

customElements.define("nav-bar",navBar)
