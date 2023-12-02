# This is portfolio site on github pages

## Tools
* Git
* VScode
  * VS code extenstion
    * Live Server
    * HTML CSS Support

## Tips
* 自分の更新を反映する方法
  * 更新したページでCmd + Sする
  * 左のアイコンからSource Control(うにょってなってるアイコン)を選択
  * 表示されたタブからChangesにあるファイルで、更新したいものを＋マークで選択
  * Message欄に変更内容を記入
  * 表示されたタブ上部の✔︎マークを選択し、更新を承認
  * 表示されたタブ上部の•••ボタンを選択し、`Push`をクリック

  * ローカルで変更を確認する方法
  * 画面右下の"Go live"をクリック (→ブラウザに "http://127.0.0.1:5500" のサイトが立ち上がります。

* 誰かの更新を反映する方法
  * 画面上側にあるTerminalタブからターミナルを開きます
  * Terminalで下記のコマンドを実行ください。

    ```bash
    # 更新を確認
    git fetch
    # ローカルの変更を退避
    git stash
    # 変更を取り込む
    git pull
    # 退避したローカルの変更を復元
    git stash pop
    ```

    * 更新されなかったら教えてください。

* Google driveから動画を引っ張ってきたい
  * 下記で設定可能
    * https://drive.google.com/uc?authuser=0&id={{google driveのid}}&export=download
      * ex) https://drive.google.com/file/d/1RTIZbTbLGQiO-IB9IFwrfKlBDbzSqsAy/view?usp=share_link
        * {{google driveのid}} = __1RTIZbTbLGQiO-IB9IFwrfKlBDbzSqsAy__

  ```html
  <video class="img-fluid" src="https://drive.google.com/uc?authuser=0&id=1AFcGuE0fKJDK6KR37T_feLTdP7a8Kasc&export=download" controls controlsList="nodownload noremoteplayback" alt="video" loop oncontextmenu="return false;"></video>
  ```

* ダウンロードを禁止にする
  * 下記をスクリプトに実装しているため、右クリックコンテキストメニュー、ドラッグは動かなくなっています。

  ```javascript
  // Disable img and video download
  $("img").on("contextmenu drag dragstart dragend", () => false);
  $("video").on("contextmenu", () => false);
  ```

