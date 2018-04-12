<template>

  <!-- header_top -->

  <!-- header -->
  <div class="header_bg">
    <div class="container" id="header">

      <div class="header">
        <div class="logo">
          <a href="index.html"><img src="/static/logo.png" alt="" /> </a>
        </div>
        <!-- start header_right -->
        <div class="header_right">
          <div class="create_btn">
            <a class="arrow" href="registration.html">create account <img src="images/right_arrow.png" alt="" /> </a>
          </div>
          <ul class="icon1 sub-icon1 profile_img">
            <li>
              <a class="active-icon c2" href="#"> </a>
              <ul class="sub-icon1 list">
                <li>
                  <h3>shopping cart empty</h3>
                  <a href=""></a>
                </li>
                <li>
                  <p>if items in your wishlit are missing,
                    <a href="">login to your account</a> to view them</p>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="icon1 sub-icon1 profile_img">
            <li>
              <a class="active-icon c1" href="#"> </a>
              <ul class="sub-icon1 list">
                <li>
                  <h3>wishlist empty</h3>
                  <a href=""></a>
                </li>
                <li>
                  <p>if items in your wishlit are missing,
                    <a href="">login to your account</a> to view them</p>
                </li>
              </ul>
            </li>
          </ul>
          <div class="search">
            <form>
              <input type="text" value="" placeholder="search...">
              <input type="submit" value="">
            </form>
          </div>
          <div class="clearfix"></div>
        </div>
        <!-- start header menu -->

      </div>
      <!-- start header menu -->
    </div>
  </div>

</template>
<script>
export default {
  name: 'headerComponent',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
