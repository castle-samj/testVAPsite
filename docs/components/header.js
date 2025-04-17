class Header extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-md bg-dark border-bottom border-body sticky-top" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#top"><i class="bi bi-suit-heart h3"> VA Polyamory</i></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item link-home">
                                <a class="nav-link" href="index.html">Da Spot</a>
                            </li>
                            <li class="nav-item link-resources">
                                <a class="nav-link" href="resources.html">Resources</a>
                            </li>
                            <li class="nav-item link-contribute">
                                <a class="nav-link" href="contribute.html">Contribute</a>
                            </li>
                            <li class="nav-item link-contact">
                                <a class="nav-link" href="contact.html">Contact Us</a>
                            </li>
                            <li class="nav-item link-events">
                                <a class="nav-link" href="events.html">Events</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        `;
    }
}

customElements.define('header-component', Header);