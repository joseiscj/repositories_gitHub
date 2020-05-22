class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById("repo-form");
        this.listEl = document.getElementById("repo-list");

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
        });

        this.render();
    }

    render() {
        this.listEl.innerHTML = "";

        this.repositories.forEach(repo => {
            let imgEl = document.createElement("img");
            imgEl.setAttribute("src", repo.avatar_url);

            let titleEl = document.createElement("strong");
            titleEl.appendChild(document.createTextNode(repo.name));

            let description = document.createElement("p");
            description.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement("a");
            linkEl.setAttribute("target", "_blank");
            linkEl.appendChild(document.createTextNode("Acessar"));

            let listItemEl = document.createElement("li");
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(description);
            listItemEl.appendChild(linkEl);
            
            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();