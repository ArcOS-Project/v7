<script>
  import { AccountIcon } from "$ts/images/general";
</script>

<div class="top">
  <div class="left">
    <img src={AccountIcon} alt="" />
  </div>
  <div class="right">
    <h1>Change your username</h1>
    <p>Please enter the new name you'd like to use for your account:</p>
    <input type="username" placeholder="New username" />
  </div>
</div>
<div class="bottom">
  <button>Cancel</button>
  <button class="suggested">Confirm</button>
</div>
