import api from './api';

class App {

    constructor() {
        this.repositories = [];
        this.inputEl = document.querySelector('input[name=repository]');
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();

        try {

            const repotInput = this.inputEl.nodeValue;

            if(repotInput === 0)
                return;

            const response = await api.get(`/repos/${repotInput}`);
            
            const {name, description, html_url, owner: {avatar_url}} = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
            this.render();
            
        } catch(err) {
            alert('O repositório não existe');
        }
        
    }

    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }

}

new App();