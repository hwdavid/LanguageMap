<script type="text/javascript">
	function validate()
    {
    var username=document.forms[0].username.value;
    var phonenumber=document.forms[0].phonenumber.value;
    var password=document.forms[0].password.value;
    
    if(username.length<2){
    	alert("请输入合法用户名！");//////////////////////////////////////////验证用户名
    }
    else if(phonenumber.length<11){
    	alert("您的手机号应该为十一位！");////////////////////////////////////验证手机号
    }
    else if(password.length<6){
    	alert("密码至少六位！");////////////////////////////////////////////验证密码
    }
    else{
    	document.forms[0].submit();//////////////////////////////////////提交到userrAdd2.jsp
    }
    }
	</script>
<body>
  
   <center>
    <form name="f1" id="f1" action="userrAdd2.jsp" method="post" >
      <table border="0">
      <tr>
          <td><strong>用户名</strong>:</td>
          <td><input type="text" name="username" id="username" value="" maxlength="11"></td>
        </tr>
        <tr>
          <td><strong>手机号</strong>:</td>
          <td><input type="text" name="phonenumber" id="phonenumber" value="" maxlength="11"></td>
        </tr>
        <tr>
          <td><strong>密码:</strong></td>
          <td><input type="text" name="password" id="password" value="" maxlength="11"></td>
        </tr> 
        <tr>
          <td colspan="2" align="center"><input type="button" value="注册 " onclick="validate()"></td>/////////注意此处提交按钮为button，在javascript中提交
        </tr>
      </table>
    </form>



</center>
  </body>
</html>