# This is portfolio site on github pages

## Tips

* 更新を反映する方法
  * 画面上側にあるTerminalタブからターミナルを開きます
  * Terminalで下記のコマンドを実行ください。

    ```bash
    git fetch
    git pull new HEAD
    ```

    * 更新されなかったら教えてください。

* Google driveから動画を引っ張ってきたい
  * 下記で設定可能

  ```html
  <video class="img-fluid" src="https://drive.google.com/uc?authuser=0&id=1AFcGuE0fKJDK6KR37T_feLTdP7a8Kasc&export=download" controls controlsList="nofullscreen nodownload noremoteplayback" alt="video" autoplay loop oncontextmenu="return false;"></video>
  ```

* ダウンロードを禁止にする
  * 下記をスクリプトに実装しているため、右クリックコンテキストメニュー、ドラッグは動かなくなっています。

  ```javascript
  // Disable img and video download
  $("img").on("contextmenu drag dragstart dragend", () => false);
  $("video").on("contextmenu", () => false);
  ```
