// import "./styles.css"

const onClickAdd = () => {
    //テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    //未完了リストに追加
    createIncompleteTodo(inputText);
    
}

//渡された引数をもとに未完了のTODOを生成する関数
const createIncompleteTodo = (todo) =>{
    //li生成
    const li = document.createElement("li");

    //div生成
    const div = document.createElement("div");
    div.className = "list-row"

    //p生成
    const p = document.createElement("p");
    p.className = "todoItem";
    p.innerText = todo;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    console.log(completeButton);
    completeButton.addEventListener("click", () =>{
        //押された完了ボタンの親にある（一番近い）liタグを完了リストに移動
        const completeTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();

        // 戻すボタンを生成してdivタグ配下に設定
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";

        backButton.addEventListener("click", () =>{
            // TODOの内容を取得し、未完了リストに追加
        const todoText = backButton.previousElementSibling.innerText;
        createIncompleteTodo(todoText);
        
        //押された戻すボタンの親にあるliタグを削除
        backButton.closest("li").remove();
        });

        //完了したターゲットの最初の要素に、戻るボタンを追加
        completeTarget.firstElementChild.appendChild(backButton);
        //完了リストに移動
        document.getElementById("complete-list").appendChild(completeTarget);
        //appendChildするとき、参照元が移動するため削除の処理等は不要
    })
    

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    console.log(deleteButton);
    deleteButton.addEventListener("click",() =>{
        //押された削除ボタンの親にある（一番近い）liタグを未完了リストから削除
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    })

    //liタグの子要素に各要素を設定
    //階層構造を整理
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    console.log(li);

    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}


//addEventListener ⇒第一引数がイベントの種類、第二引数がイベント検知時の処理
document.getElementById("add-button").addEventListener("click",onClickAdd);
