class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById("repo-form");

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            nome: "",
            description: "",
            avatar_url: "",
            html_url: ""
        })
    }
}

new App();