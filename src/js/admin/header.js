const header =document.querySelector("header#header");
header.innerHTML =`

<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold text-uppercase">Thay đổi mật khẩu</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-4">
          <i class="fas fa-envelope prefix grey-text text-default"></i>
          <input type="email" id="defaultForm-email" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-email">nhập email</label>
        </div>



        <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text text-default"></i>
          <input type="password" id="defaultForm-pass" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-pass">nhập mật khẩu</label>

        </div>
         <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text text-default"></i>
          <input type="password" id="defaultForm-repass" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-repass">nhập lại mật khẩu</label>
        </div>
        </div>
		<!-- Material checked -->
<!-- Material checked -->
      <div class="modal-footer d-flex justify-content-between">
		<span>ban chua co tai khoan? <a href="html/signup.html" class="text-default">đăng kí</a></span>
        <button class="btn btn-default ">thay đổi</button>
      </div>
    </div>
  </div>
</div>
 <header>
    <!-- Sidebar navigation -->
    <div id="slide-out" class="side-nav fixed wide sn-bg-1">
      <ul class="custom-scrollbar">
        <!-- Logo -->
        <li>
          <div class="logo-wrapper sn-ad-avatar-wrapper">
            <a href="#"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle"><span>Anna Deynah</span></a>
          </div>
        </li>
        <!--/. Logo -->
        <!-- Side navigation links -->
        <li>
          <ul class="collapsible collapsible-accordion">
            <li><a class="collapsible-header waves-effect arrow-r active" style="font-size: 16px;"><i class="sv-slim-icon fas fa-chevron-right"></i>Quản lí<i class="fas fa-angle-down rotate-icon"></i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="/src/views/admin/manauser/index.html" class="waves-effect active">
                    <span class="sv-slim"> SL </span>
                    <span class="sv-normal" style="font-size: 16px;">quản lí người dùng</span></a>
                  </li>
                  <li><a href="/src/views/admin/manaproduct/index.html" class="waves-effect" >
                    <span class="sv-slim"> RF </span>
                    <span class="sv-normal" style="font-size: 16px;">quản lí sản phẩm</span></a>
                  </li>
                   <li><a href="/src/views/admin/manaorder/index.html" class="waves-effect">
                    <span class="sv-slim"> RF </span>
                    <span class="sv-normal" style="font-size: 16px;">quản lí đơn hàng</span></a>
                  </li>
                   <li><a href="/src/views/admin/manasale/index.html" class="waves-effect">
                    <span class="sv-slim"> RF </span>
                    <span class="sv-normal" style="font-size: 16px;">quản lí ưu đãi</span></a>
                  </li>
                   <li><a href="/src/views/admin/manareview/index.html" class="waves-effect">
                    <span class="sv-slim"> RF </span>
                    <span class="sv-normal" style="font-size: 16px;">quản lí đánh giá</span></a>
                  </li>

                </ul>
              </div>
            </li>

            <li><a id="toggle" class="waves-effect"><i class="sv-slim-icon fas fa-angle-double-left" style="font-size: 18px;"></i>thu nhỏ menu</a>
            </li>
          </ul>
        </li>
        <!--/. Side navigation links -->
      </ul>
      <div class="sidenav-bg rgba-blue-strong"></div>
    </div>
    <!--/. Sidebar navigation -->
    <!-- Navbar -->
    <nav class="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav">
      <!-- SideNav slide-out button -->
      <div class="float-left">
        <a href="#" data-activates="slide-out" class="button-collapse"><i class="fas fa-bars"></i></a>
      </div>
      <!-- Breadcrumb-->
      <div class="breadcrumb-dn mr-auto">
        <p>FPT shop.com.vn</p>
      </div>
      <ul class="nav navbar-nav nav-flex-icons ml-auto">

          <li class="nav-item">
          <a class="nav-link" href="/src/views/admin/index.html"><i class="fa-solid fa-house-user mr-1"></i><span class="clearfix d-none d-sm-inline-block">trang chủ</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-target="#modal" data-toggle="modal"><i class="fa-solid fa-key"></i> <span class="clearfix d-none d-sm-inline-block">đổi mật khẩu</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/src/views/admin/profile.html"><i class="fas fa-user"></i> <span class="clearfix d-none d-sm-inline-block">thông tin cá nhân</span></a>
        </li>
          <li class="nav-item">
          <a class="nav-link"><i class="fa-solid fa-right-from-bracket"></i> <span class="clearfix d-none d-sm-inline-block">thoát</span></a>
        </li>

      </ul>
    </nav>
    <!-- /.Navbar -->
  </header>`
