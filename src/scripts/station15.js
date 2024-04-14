function displayList() {
    const fruits = document.getElementById('fruits');
    const list = document.createElement("ul"); // ul作成
    
    fruits.childNodes.forEach((child) => { // fruitの子要素に対して繰り返し
        // 改行などは除く
        if(child.nodeName === 'P'){
        const listItem = document.createElement("li"); // li作成
        listItem.textContent = child.textContent; // テキストを反映
        list.appendChild(listItem); // ulの末尾に追加
        }
    });
    while (fruits.firstChild) {
        fruits.removeChild(fruits.firstChild);
    }
    fruits.appendChild(list);
  }
 
