import { hair, necklace, shirt, dress, handbag, shoes, background } from '../controllers/main.js';
export default class ChoseItem {
    constructor() {
        this.dataItems = [];
        this.clothChosen;
    }
    addItem = (dataItems) => {
        this.dataItems = dataItems;
    }
    render = (type) => {
        let htmls = [];
        console.log(this.dataItems);
        const listTypes = this.dataItems.filter((item, index) => {
            return item.type == type;
        });

        htmls = listTypes.map((item, index) => {
            return `
                    <div class="item col-md-3 text-center">
                        <div class="item__img">
                            <img src="${item.imgSrc_jpg}" alt="">
                        </div>
                        <div class="item__text">
                            <h3 class="item__title">${item.name}</h3>
                            <button class="item__btn btn btn-danger" data-index = "${item.id}" >Thử đồ</button>
                        </div>
                    </div>
            `
        });

        $("#rederTry")[0].innerHTML = htmls.join('');
    }
    findCloths = (itemIndex) => {
        let itemChose = this.dataItems.findIndex((item) => {
            return item.id == itemIndex;
        });
        this.clothChosen = {...this.dataItems[itemChose] }
        console.log(this.clothChosen);
    }
    tryCloths = () => {
        const clothType = this.clothChosen.type;
        const clothImg = this.clothChosen.imgSrc_png;
        switch (clothType) {
            case "topclothes":
                shirt.innerHTML = this.renderCloth();
                break;
            case "botclothes":
                dress.innerHTML = this.renderCloth();
                break;
            case "shoes":
                shoes.style.backgroundImage = 'url("' + clothImg + '")';
                break;
            case "handbags":
                handbag.style.backgroundImage = 'url("' + clothImg + '")';
                break;
            case "necklaces":
                necklace.style.backgroundImage = 'url("' + clothImg + '")';
                break;
            case "hairstyle":
                hair.style.backgroundImage = 'url("' + clothImg + '")';
                break;
            case "background":
                background.style.backgroundImage = 'url("' + clothImg + '")';
                break;
            default:
                alert('Trang phục bạn chọn không nằm trong danh mục của shop.')
                break;
        }
    }
    renderCloth = () => {
        if (this.clothChosen.imgSrc_png) {
            return `
            <img src="${this.clothChosen.imgSrc_png}" alt="${this.clothChosen.desc}">
            `
        } else {
            return '';
        }

    }
    deleteCloth = (type) => {
        if (this.clothChosen) {
            this.clothChosen.type = type;
            this.clothChosen.imgSrc_png = '';
            console.log(this.dataItems);
            this.TryCloths();
        } else {
            return;
        }
    }
    resetClothChosen = () => {
        this.clothChosen = [];
    }
}