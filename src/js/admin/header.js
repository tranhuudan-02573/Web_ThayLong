const header =document.querySelector("header#header");
header.innerHTML =`

<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold text-uppercase">change pass</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-4">
          <i class="fas fa-envelope prefix grey-text text-default"></i>
          <input type="email" id="defaultForm-email" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
        </div>



        <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text text-default"></i>
          <input type="password" id="defaultForm-pass" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>

        </div>
         <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text text-default"></i>
          <input type="password" id="defaultForm-repass" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-repass">nhap lai password</label>
        </div>
        </div>
		<!-- Material checked -->
<!-- Material checked -->
      <div class="modal-footer d-flex justify-content-between">
		<span>ban chua co tai khoan? <a href="html/signup.html" class="text-default">sign up</a></span>
        <button class="btn btn-default ">change</button>
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
            <li><a class="collapsible-header waves-effect arrow-r active"><i class="sv-slim-icon fas fa-chevron-right"></i> quan li<i class="fas fa-angle-down rotate-icon"></i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="/src/views/admin/manauser/index.html" class="waves-effect active">
                    <span class="sv-slim"> SL </span>
                    <span class="sv-normal">quan li user</span></a>
                  </li>
                  <li><a href="/src/views/admin/manaproduct/index.html" class="waves-effect">
                    <span class="sv-slim"> RF </span>
                    <span class="sv-normal">quan li san pham</span></a>
                  </li>
                   <li><a href="/src/views/admin/manaorder/index.html" class="waves-effect">
                    <span class="sv-slim"> RF </span>
                    <span class="sv-normal">quan li don hang</span></a>
                  </li>
                   <li><a href="/src/views/admin/manasale/index.html" class="waves-effect">
                    <span class="sv-slim"> RF </span>
                    <span class="sv-normal">quan li uu dai</span></a>
                  </li>
                   <li><a href="/src/views/admin/manareview/index.html" class="waves-effect">
                    <span class="sv-slim"> RF </span>
                    <span class="sv-normal">quan li danh gia </span></a>
                  </li>

                </ul>
              </div>
            </li>

            <li><a id="toggle" class="waves-effect"><i class="sv-slim-icon fas fa-angle-double-left"></i>Minimize menu</a>
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
        <p>Material Design for Bootstrap</p>
      </div>
      <ul class="nav navbar-nav nav-flex-icons ml-auto">
        <li class="nav-item">
          <a class="nav-link"><i class="fas fa-envelope"></i> <span class="clearfix d-none d-sm-inline-block">thoát</span></a>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="/src/views/admin/index.html"><i class="fas fa-envelope"></i> <span class="clearfix d-none d-sm-inline-block">trang chủ</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-target="#modal" data-toggle="modal"><i class="fas fa-comments"></i> <span class="clearfix d-none d-sm-inline-block">đổi mật khẩu</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/src/views/admin/profile.html"><i class="fas fa-user"></i> <span class="clearfix d-none d-sm-inline-block">thông tin cá nhân</span></a>
        </li>

      </ul>
    </nav>
    <!-- /.Navbar -->
  </header>`
