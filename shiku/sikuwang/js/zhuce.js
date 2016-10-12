$(function() {
	//用户名
	var isreg = false;

	$("#username").blur(function() {
		$.ajax({
			type: "POST",
			url: "http://10.9.158.170:8080/API/user/check.aspx",
			data: {
				username: $("#username").val()
			},
			dataType: "jsonp",
			success: function(data) {
				console.log(data);
				if(data.result == "ok") {
					isreg = true;
				}
			},
			timeout: 3000,
			error: function(obj, status, error) {
				console.log(arguments);
			}
		});

		var v = $(this).val();
		if(v.length == 0) {
			$(".regName1").html("请输入你的用户名").css({
				color: "#999",
				fontWeight: "bold"
			});
			$(this).css("border", "1px solid red");
			return false;
		} else {
			if(regExpManger.userNameReg.test(v)) {
				if(v.length >4&&v.length<20) {
					$(".regName1").html("");
					$(this).css("border", "1px solid #dedede");
					$(".clearfix").css("display", "block");
					return true;
				} else {
					$(".regName1").html("用户名长度应为4-20个字符").css({
						color: "red",
						fontWeight: "bold"
					});
					$(this).css("border", "1px solid red");
					return false;
				}
			} else {
				$(".regName1").html("请输入正确用户名").css({
					color: "red",
					fontWeight: "bold"
				});
				$(this).css("border", "1px solid red");
				return false;
			}
		}
	});
	$("#username").keyup(function() {
		$(".regName1").html("");
		return false;

	});
	$("#username").focus(function() {
		if($(this).val() == "") {
			$(".regName1").html("请输入用户名").css({
				color: "red",
				fontWeight: "bold"
			});
			$(this).css("border", "1px solid red");
			return false;
		} else {
			$(".regName1").html("");
			return false;
		}

	});
	//验证码
	$("#emailcheck").blur(function() {
		var v = $(this).val();
		if(v.length == 0) {
			$(".regName2").html("请输入验证码").css({
				color: "#999",
				fontWeight: "bold"
			});
			$(this).css("border", "1px solid red");
			return false;
		} else {
			if(regExpManger.numReg.test(v)) {
				if(v == "pyml") {
					$(".regName2").html("");
					$(this).css("border", "1px solid #dedede");
					return true;
				} else {
					$(".regName2").html("验证码只能是4个字符").css({
						color: "red",
						fontWeight: "bold"
					});
					$(this).css("border", "1px solid red");
					return false;
				}
			} else {
				$(".regName2").html("请输入正确的验证码").css({
					color: "red",
					fontWeight: "bold"
				});
				$(this).css("border", "1px solid red");
				return false;
			}
		}
	});
	$("#emailcheck").keyup(function() {
		$(".regName2").html("");
		return false;
	});
	$("#emailcheck").focus(function() {
		if($(this).val() == "") {
			$(".regName2").html("请输入验证码").css({
				color: "red",
				fontWeight: "bold"
			});
			$(this).css("border", "1px solid red");
			return false;
		} else {
			$(".regName2").html("");
			return false;
		}

	});
	//密码
	$("#password").blur(function() {
		var v = $(this).val();
		if(v.length == 0) {
			$(".regName3").html("请输入密码").css({
				color: "#999",
				fontWeight: "bold"
			});
			$(this).css("border", "1px solid red");
			return false;
		} else {
			if(regExpManger.wordReg.test(v)) {
				if(v.length > 4 && v.length < 16) {
					$(".regName3").html("");
					$(this).css("border", "1px solid #dedede");
					return true;
				} else {
					$(".regName3").html("密码长度只能在4-16个字符之间").css({
						color: "red",
						fontWeight: "bold"
					});
					$(this).css("border", "1px solid red");
					return false;
				}
			} else {
				$(".regName3").html("请输入密码").css({
					color: "red",
					fontWeight: "bold"
				});
				$(this).css("border", "1px solid red");
				return false;
			}
		}
	});
	$("#password").keyup(function() {
		$(".regName3").html("");
		return false;
	});
	$("#password").focus(function() {
		if($(this).val() == "") {
			$(".regName3").html("请输入密码").css({
				color: "red",
				fontWeight: "bold"
			});
			$(this).css("border", "1px solid red");
			return false;
		} else {
			$(".regName3").html("");
			return false;
		}

	});

	//确认密码
	$("#passwordagain").blur(function() {
		var v1 = $("#password").val();
		var v = $(this).val();
		if(v.length == 0) {
			$(".regName4").html("请再次输入密码").css({
				color: "#999",
				fontWeight: "bold"
			});
			$(this).css("border", "1px solid red");
			return false;
		} else {
			if(regExpManger.wordReg.test(v)) {
				if(v == v1) {
					$(".regName4").html("");
					$(this).css("border", "1px solid #dedede");
					return true;
				} else {
					$(".regName4").html("两次密码输入不一致").css({
						color: "red",
						fontWeight: "bold"
					});
					$(this).css("border", "1px solid red");
					return false;
				}
			} else {
				$(".regName4").html("两次密码输入不一致").css({
					color: "red",
					fontWeight: "bold"
				});
				$(this).css("border", "1px solid red");
				return false;
			}
		}
	});
	$("#passwordagain").keyup(function() {
		$(".regName3").html("");
		return false;

	});
	$("#passwordagain").focus(function() {
		if($(this).val() == "") {
			$(".regName4").html("请再次输入密码").css({
				color: "red",
				fontWeight: "bold"
			});
			$(this).css("border", "1px solid red");
			return false;
		} else {
			$(".regName4").html("");
			return false;
		}

	});
	$("#username").blur(checkName);
	$("#emailcheck").blur(checkEmail);
	$("#emailcheck").blur(checkPassword);
	$("#emailcheck").blur(checkPasswordagain)
	$(".login-btn").click(function() {
		if(checkName() && checkEmail() && checkPassword() && checkPasswordagain()) {
			if($("#read").attr("checked") == "checked") {
				if(!isreg) {
					$("regName1").html("用户名已存在");
				} else {
					var uname = $("#username").val();
					var pwd = $("#password").val();
					$.ajax({
						dataType: "jsonp",
						url: "http://10.9.158.170:8080/API/user/add.aspx",
						data: {
							username: uname,
							password: pwd
						},
						success: function(data) {
							if(data.result == "ok") {
								alert("注册成功");
							} else {
								$(".regName1").html("注册失败");
							}
						}
					});
				}

			}
		} else {
			alert("error");
		}
	});

});