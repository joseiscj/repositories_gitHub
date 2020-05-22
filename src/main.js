import api from './api';
import axios from "axios";

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById("repo-form");
        this.inputEl = document.getElementById("repository");
        this.listEl = document.getElementById("repo-list");

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement("span");
            loadingEl.appendChild(document.createTextNode("Carregando..."));
            loadingEl.setAttribute("id", "loading");

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById("loading").remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;
        console.log(repoInput);

        if (repoInput.length === 0) 
            return;

        this.setLoading();
        
        try {
            const response = await axios.get(`https://api.github.com/repos/${repoInput}`);

            console.log(response.data);

            const { name, description, html_url, owner: {avatar_url} } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = "";

            this.render();
        } catch (err) {
            alert("O reposiório não existe!")
        }

        this.setLoading(false);
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
            linkEl.setAttribute("href", repo.html_url);
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