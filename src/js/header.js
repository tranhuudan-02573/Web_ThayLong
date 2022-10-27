const header =document.querySelector("header#header");
header.innerHTML =
     `
     <header>
		<div class="d-head">
			<div class="head-top bg-danger">
				<div class="container">
					<div class="row align-items-center pt-1">
						<div class="col-1 d-block d-sm-none d-flex align-items-center text-white"><i class="fa fa-bars"></i>
						</div>
						<div class="col-9 position-absolute p-2 menu-multi-mobile">
							<div class="row row-md">
								<div class="col-8">
									<a href="#" title="" class=""><img src="/src/vendor/images/fptshop-logo.png" class="img-fluid"></a>
								</div>
								<div class="col-4 d-flex justify-content-end">
									<i class="fa fa-times text-white" aria-hidden="true"></i>
								</div>

								<div class="col-12">
									<hr class="bg-light">
								</div>
								<div class="col-12">
									<div class="accordion" id="accordionExample">
										<div class="card border-0">
											<div class=" p-2" id="headingOne">
												<a href="#" title="" class="text-dark">
													<i class="fa fa-mobile" aria-hidden="true"></i>
													Điện thoại
												</a>
												<h2 class="mb-0 pull-right">
													<button class="btn p-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														<i class="fa fa-chevron-down" aria-hidden="true"></i>
													</button>
												</h2>
											</div>
											<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
												<div class="card-body">
													<div class="row row-md">
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Iphone</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Samsung</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Huawei</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">OPPO</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Xixaomi</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">VSMart</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">NOKIA</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">HONOR</a>
														</div>
														<div class="col-12 text-center" >
															<a href="#" title="" class="nav-link text-dark">Mobiistar</a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="card border-0">
											<div class=" p-2" id="headingTwo">
												<a href="#" title="" class="text-dark">
													<i class="fa fa-mobile" aria-hidden="true"></i>
													Laptop
												</a>
												<h2 class="mb-0 pull-right">
													<button class="btn p-0  collapsed " type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														<i class="fa fa-chevron-down" aria-hidden="true"></i>
													</button>
												</h2>
											</div>
											<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
												<div class="card-body">
													<div class="row row-md">
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Iphone</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Samsung</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Huawei</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">OPPO</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Xixaomi</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">VSMart</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">NOKIA</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">HONOR</a>
														</div>
														<div class="col-12 text-center" >
															<a href="#" title="" class="nav-link text-dark">Mobiistar</a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="card border-0">
											<div class=" p-2" id="headingThree">
												<a href="#" title="" class="text-dark">
													<i class="fa fa-mobile" aria-hidden="true"></i>
													Tablet
												</a>
												<h2 class="mb-0 pull-right">
													<button class="btn p-0 collapsed " type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														<i class="fa fa-chevron-down" aria-hidden="true"></i>
													</button>
												</h2>
											</div>
											<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
												<div class="row row-md">
													<div class="col-6">
														<a href="#" title="" class="nav-link text-dark">Iphone</a>
													</div>
													<div class="col-6">
														<a href="#" title="" class="nav-link text-dark">Samsung</a>
													</div>
													<div class="col-6">
														<a href="#" title="" class="nav-link text-dark">Huawei</a>
													</div>
													<div class="col-6">
														<a href="#" title="" class="nav-link text-dark">OPPO</a>
													</div>
													<div class="col-6">
														<a href="#" title="" class="nav-link text-dark">Xixaomi</a>
													</div>
													<div class="col-6">
														<a href="#" title="" class="nav-link text-dark">VSMart</a>
													</div>
													<div class="col-6">
														<a href="#" title="" class="nav-link text-dark">NOKIA</a>
													</div>
													<div class="col-6">
														<a href="#" title="" class="nav-link text-dark">HONOR</a>
													</div>
													<div class="col-12 text-center" >
														<a href="#" title="" class="nav-link text-dark">Mobiistar</a>
													</div>
												</div>
											</div>
										</div>
										<div class="card border-0">
											<div class=" p-2" id="headingFour">
												<a href="#" title="" class="text-dark">
													<i class="fa fa-mobile" aria-hidden="true"></i>
													Apple
												</a>
												<h2 class="mb-0 pull-right">
													<button class="btn p-0  collapsed " type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
														<i class="fa fa-chevron-down" aria-hidden="true"></i>
													</button>
												</h2>
											</div>
											<div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
												<div class="card-body">
													<div class="row row-md">
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Iphone</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Samsung</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Huawei</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">OPPO</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">Xixaomi</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">VSMart</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">NOKIA</a>
														</div>
														<div class="col-6">
															<a href="#" title="" class="nav-link text-dark">HONOR</a>
														</div>
														<div class="col-12 text-center" >
															<a href="#" title="" class="nav-link text-dark">Mobiistar</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<ul class="nav flex-column">
										<li class="p-2 nav-item">
											<a class="text-dark" href="#">
												<i class="fa fa-mobile" aria-hidden="true"></i>
												Phụ kiện
											</a>
										</li>
										<li class="p-2 nav-item">
											<a class="text-dark" href="#">
												<i class="fa fa-mobile" aria-hidden="true"></i>
											Máy đổi trả</a>
										</li>
										<li class="p-2 nav-item">
											<a class="text-dark" href="#">
												<i class="fa fa-mobile" aria-hidden="true"></i>
											Sim</a>
										</li>
										<li class="nav-item p-2">
											<a class="text-dark" href="#">
												<i class="fa fa-mobile" aria-hidden="true"></i>
											Phần mềm</a>
										</li>
									</ul>
								</div>
								<!--end col-12-->
								<div class="col-12">
									<hr class="bg-light">
								</div>
								<!--end col-12-->
								<div class="col-12">

									<ul class="nav flex-column">
										<li class="nav-item p-2">
											<a class="text-dark" href="#">
												<i class="fa fa-mobile" aria-hidden="true"></i>
											Khuyến mãi</a>
										</li>
										<li class="nav-item p-2">
											<a class="text-dark" href="#">
												<i class="fa fa-mobile" aria-hidden="true"></i>
											Thông tin trao thưởng</a>
										</li>
									</ul>
								</div>
								<!--end col-12-->
							</div>
							<!--end-row-->
						</div>
						<!--end col-9-->
						<div class="col-3 position-absolute overplay"></div>
						<div class="col-xl-2 col-lg-2 col-md-2 col-4  pl-1 pr-1">
							<a href="#" title=""><img src="/src/vendor/images/fptshop-logo.png" class="img-fluid"></a>
						</div>
						<div class="col-7 pull-right d-flex justify-content-end align-items-center d-sm-none text-white"><i class="fa fa-shopping-cart"></i></div>
						<div class="col-xl-4 col-lg-5 col-md-5 col-12 pt-3 pl-1 pr-1">
							<div class="input-group mb-3">
								<input type="text" class="form-control rounded-0 border-0" placeholder="Tìm kiếm sản phẩm" aria-label="Recipient's username" aria-describedby="basic-addon2">
								<div class="input-group-append">
									<span class="input-group-text bg-dark text-white border-0" id="basic-addon2"><i class="fa fa-search"></i></span>
								</div>
							</div>
						</div>
						<!--end col-6-->
						<div class="col-xl-6 col-lg-5 col-md-5 col-12 d-none d-sm-block pl-1 pr-1">
							<ul class="nav justify-content-end">


								<li class="nav-item">
									<a class="nav-link text-center text-white pl-2 pr-2" href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i><br>Giỏ hàng</a>
								</li>
								<li class="nav-item">
									<a href="" class="nav-link text-center text-white text-center pl-2 pr-2" target="_blank">
									   <div class="position-relative text-center">
									 <i class="fa fa-heart" aria-hidden="true"></i>
									  <span class="badge badge-danger bg-white position-absolute " style="color: #cd1818;top: -5px;font-size: 0.7rem;">4</span></div>
										  <span>Sẩn phẩm đã thích</span>
									</a>
								  </li>
								<li class="nav-item">
									<a class="nav-link text-center text-white pl-2 pr-2" href="#">
										<i class="fa fa-user"aria-hidden="true"></i>
										<br>Tài khoản
									</a>
								</li>

							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--end head-top-->
			<div class="head-menu bg-dark nav-scroller">
				<div class="container">
					<ul class="nav row row-sm">
						<li class="nav-item ol-md-4 hvr-grow_color" >
							<a class="nav-link text-white"href="#"><i class="fa fa-mobile fa-fw" ></i>iPhone
							</a>
						</li>
						<li class="nav-item ol-md-4 hvr-grow_color">
							<a class="nav-link text-white" href="#"><i class="fa fa-mobile fa-fw" ></i>SamSung
							</a>
						</li>
						<li class="nav-item ol-md-4 hvr-grow_color">
							<a class="nav-link text-white" href="#"><i class="fa fa-mobile fa-fw" ></i>Oppo
							</a>
						</li>
						<li class="nav-item ol-md-4 hvr-grow_color">
							<a class="nav-link text-white" href="#"><i class="fa fa-mobile fa-fw" ></i>Xiaomi
							</a>
						</li>
						<li class="nav-item ol-md-4 hvr-grow_color">
							<a class="nav-link text-white" href="#"><i class="fa fa-mobile fa-fw" ></i>Vivo
							</a>
						</li>
						<li class="nav-item ol-md-4 hvr-grow_color">
							<a class="nav-link text-white" href="#"><i class="fa fa-mobile fa-fw" ></i>Realme
							</a>
						</li>
						<li class="nav-item ol-md-4 hvr-grow_color">
							<a class="nav-link text-white" href="#"><i class="fa fa-mobile fa-fw" ></i>Nokia
							</a>
						</li>
						<li class="nav-item ol-md-4 hvr-grow_color">
							<a class="nav-link text-white" href="#"><i class="fa fa-mobile fa-fw" ></i>Itel
							</a>
						</li>
						<li class="nav-item ol-md-4 hvr-grow_color">
							<a class="nav-link text-white" href="#"><i class="fa fa-mobile fa-fw" ></i>Msstel
							</a>
						</li>

					</ul>
				</div>
			</div>
			<!--end head-menu-->
		</div>
		<!--end d-head-->
		<div class="m-head d-block d-sm-none"></div>
		<!--end m-head-->
	</header>
     `
