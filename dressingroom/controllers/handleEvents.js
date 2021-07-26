import ChoseItem from '../models/ChoseItem.js';
import { pillTabs, itemLists, toolBar, library, takeShot, editBtn, setting, fadeoutBtn, toolItem, EditBtn, DelBtn, MainScreen, Screen } from './main.js';
let prevDataset;
let getCanvas;
export default function HandleEvent(listChosen, choseItems) {
    pillTabs.onclick = (event) => {
        const pillTabNode = event.target.closest('.nav-link:not(.active)');

        if (pillTabNode) {
            choseItems.render(pillTabNode.dataset.type);
        }
    }
    itemLists.onclick = (event) => {
        const itemList = event.target.closest('.item__btn');
        if (itemList) {
            const itemIndex = itemList.dataset.index;
            choseItems.findCloths(itemIndex);
            choseItems.tryCloths();
        }
    }
    editBtn.onclick = () => {
        toolBar.classList.add("active");
        setting.style.display = "block";
        fadeoutBtn.style.display = "block";
        listChosen.render("mobile");
    }
    fadeoutBtn.onclick = () => {
        toolBar.classList.remove("active");
        console.log(MainScreen.classList.length);
        prevDataset = '';
        if (MainScreen.classList.length == 2) {
            if (MainScreen.classList[1] != "contains") {
                MainScreen.classList.remove(MainScreen.classList[1]);
            } else {
                MainScreen.classList.remove(MainScreen.classList[0]);
            }
        };
        setting.style.display = "none";
        fadeoutBtn.style.display = "none";
        toolItem.style.display = "none";
    }
    setting.onclick = (event) => {
        const clothTypes = event.target.closest('.setting__item');

        let clothTypesActived = getEl('.setting__item.active')[0];
        const clothTypesEle = event.target.closest('.setting__item p');
        if (clothTypesEle) {
            if (clothTypesActived) {
                clothTypesActived.classList.remove('active');
            }
            clothTypes.classList.add('active');
            if (prevDataset != clothTypes.dataset.type) {
                MainScreen.classList.add(clothTypes.dataset.type + 'es');
                if (prevDataset) {
                    MainScreen.classList.remove(prevDataset);
                }
                prevDataset = clothTypes.dataset.type + 'es';
            }
            EditBtn.dataset.type = clothTypes.dataset.type;
            DelBtn.dataset.type = clothTypes.dataset.type;
            toolItem.style.display = "block";

        }
    }
    DelBtn.onclick = (event) => {
        console.log(EditBtn.dataset.type);
        choseItems.deleteCloth(EditBtn.dataset.type);
    }
    EditBtn.onclick = (event) => {
        let id;
        const activeClothTypes = document.querySelectorAll('.nav-link');
        for (let item in activeClothTypes) {
            if (activeClothTypes[item].dataset.type == EditBtn.dataset.type) {
                id = item;
                break;
            }
        }
        console.log(id);
        activeClothTypes[id].click();
    }
    takeShot.onclick = () => {
        html2canvas(Screen, {
            onrendered: function(canvas) {
                getCanvas = canvas;
            }
        });

    }
    library.onclick = () => {
        const imageData = getCanvas.toDataURL("image/png");
        const newData = imageData.replace("image/png", "image/octet-stream");

        window.location.href = newData;
    }
}