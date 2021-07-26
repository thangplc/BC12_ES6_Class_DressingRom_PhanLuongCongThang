import { listRender, screenTool, toolItem } from '../controllers/main.js';
class ListChosen {
    constructor() {
        this.ListChoses = [];
        this.currentChosen = 0;
    }
    addLists = (ListData) => {
        this.ListChoses = ListData;
    }
    render = (device) => {
        let htmlsWeb = [];
        let htmlsMobile = [];
        htmlsWeb = this.ListChoses.map((list, index) => {
            return `
                    <li class="nav-item" role="presentation" style ="width: 120px;">
                        <a class="nav-link ${index === this.currentChosen ? "active" : ""}" id="pills-${list.tabName}-tab" data-toggle="pill" href="#${list.tabName}" role="tab" aria-controls="pills-home" aria-selected="true" data-type = "${list.type}">${list.showName}</a>
                    </li>
                `;
        });
        htmlsMobile = this.ListChoses.map((list, index) => {
            return `
                    <li class="setting__item" data-type = "${list.type}"  role="presentation">
                        <p>${list.showName}</p>
                    </li>
                `;
        });
        if (device === 'web') {
            listRender.innerHTML = htmlsWeb.join('');
        } else if (device === 'mobile') {
            screenTool.innerHTML = htmlsMobile.join('');
        }
    }
}

export default ListChosen;