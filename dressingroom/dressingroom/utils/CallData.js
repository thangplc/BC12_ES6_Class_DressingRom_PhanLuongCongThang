const APIDataList = "https://60f3ffaf3cb0870017a8a0cf.mockapi.io/navPills";
const APIDataItem = "https://60f3ffaf3cb0870017a8a0cf.mockapi.io/tabPanes";

function CallDataLists() {
    this.getData = (callback) => {
        fetch(APIDataList).then((response) => {
            return response.json();
        }).then(callback).catch((error) => {
            alert(error);
        })
    }
}

function APIDataItems() {
    this.getData = (callback) => {
        fetch(APIDataItem).then((response) => {
            return response.json();
        }).then(callback).catch((error) => {
            alert(error);
        })
    }
}

export { CallDataLists, APIDataItems };