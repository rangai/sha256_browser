const html = `
<!DOCTYPE html>
<html><meta charset="utf-8"><body>
<script type="module">
  import init, {encrypt, decrypt} from './pkg/cipher_browser.js';
  init().then(() =>{
    window.encrypt = encrypt;
    window.decrypt = decrypt;
  });
</script>
<h1>暗号化ツール</h1>
<div>
  入力:<br>
  <textarea id="inbox" rows=8 cols=60></textarea><br>
  パスワード:
  <input type="password" id="password"><br>
  <button onclick="enc_click()">暗号化</button>
  <button onclick="dec_click()">復号</button>
  出力:<br>
  <textarea id="outbox" rows=8 cols=60></textarea>
</div>
<script>
  const q = (query) => {
    return document.querySelector(query);
  };

  function enc_click() {
    console.log(q("#inbox"));
    q("#outbox").value = window.encrypt(q("#password").value, q("#inbox").value);
  }

  function dec_click() {
    q("#outbox").value = window.decrypt(q("#password").value, q("#inbox").value);
  }
</script>

</body>
</html>`;