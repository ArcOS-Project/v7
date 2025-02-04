<script>
  import { PasswordIcon } from "$ts/images/general";
</script>

<div class="top">
  <div class="left">
    <img src={PasswordIcon} alt="" />
  </div>
  <div class="right">
    <h1>Change your password</h1>
    <p>
      Fill out the following fields to change your password. You will stay
      logged in everywhere if you change it.
    </p>
    <input type="password" placeholder="Old password" />
    <input type="password" placeholder="New password" />
    <input type="password" placeholder="Confirm new password" />
  </div>
</div>
<div class="bottom">
  <button>Cancel</button>
  <button class="suggested">Confirm</button>
</div>
