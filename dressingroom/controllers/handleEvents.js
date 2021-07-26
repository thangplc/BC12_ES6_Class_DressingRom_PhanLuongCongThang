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




}