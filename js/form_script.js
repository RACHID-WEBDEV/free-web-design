            // JavaScript Document
            var setURL;
            function echeck(str) {
            	var at="@";
            	var dot=".";
            	var lat=str.indexOf(at);
            	var lstr=str.length;
            	var ldot=str.indexOf(dot);
            	var pattern=/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|me|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
            	if (str.indexOf(at)==-1){
            		alert("Invalid E-mail ID");
            		return false;
            	}
            	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
            		alert("Invalid E-mail ID");
            		return false;
            	}
            	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
            		alert("Invalid E-mail ID");
            		return false;
            	}
            	if (str.indexOf(at,(lat+1))!=-1){
            		alert("Invalid E-mail ID");
            		return false;
            	}
            	if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
            		alert("Invalid E-mail ID");
            		return false;
            	}
            	if (str.indexOf(dot,(lat+2))==-1){
            		alert("Invalid E-mail ID");
            		return false;
            	}
            	if (str.indexOf(" ")!=-1){
            		alert("Invalid E-mail ID");
            		return false;
            	}
            	if(!pattern.test(str)){         
            		alert("Invalid E-mail ID");
            		return false;   
                }
            	return true;				
            }
            
            
            function frmValidate()
            {
            	
            	if(document.frmCtnt.name.value=="" || document.frmCtnt.name.value==null || document.frmCtnt.name.value=="Enter Your Full Name")
            	{
            		alert("Your Name can't be blank");
            		document.frmCtnt.name.focus();
            		return false;
            	}
            	if(document.frmCtnt.email.value=="" || document.frmCtnt.email.value==null || document.frmCtnt.email.value=="Enter Your Email Id")
            	{
            		alert("Your Email can't be blank");
            		document.frmCtnt.email.focus();
            		return false;
            	}
            	if (echeck(document.frmCtnt.email.value)==false){
            		document.frmCtnt.email.focus();
            		return false;
            	}
            	
            	if(document.frmCtnt.mobile.value=="" || document.frmCtnt.mobile.value==null || document.frmCtnt.mobile.value=="Enter Your Contact Number")
            	{
            		alert("Your Mobile can't be blank");
            		document.frmCtnt.mobile.focus();
            		return false;
            	} else if (isNaN(document.frmCtnt.mobile.value)) {
            		alert("Mobile number contains illegal character");	
            		document.frmCtnt.mobile.focus();
            		  return false;
            	} 	
            	
            	if(isNaN(document.frmCtnt.mobile.value))
            	{
            		alert("Please enter valid Mobile Number");
            		document.frmCtnt.mobile.focus();
            		return false;
            	}
                
               
                
                
            	/*
                if(document.frmCtnt.gender.value == "" || document.frmCtnt.gender.value == "null")
            	{   
            		alert("Please select your gender option ?");
            		document.frmCtnt.gender.focus();
            		return false;
            	}*/
                
            	return true;
            }//gender
            
            
            function getFormReponseSubmit(getFormResponseDiv)
            {
                if(frmValidate()==true)
                {
                /*URL="?name="+document.frmCtnt.name.value+"&email="+document.frmCtnt.email.value+"&mobile="+document.frmCtnt.mobile.value+"&course_period="+document.frmCtnt.course_period.value+"&gender="+document.frmCtnt.gender.value+"&comment="+document.frmCtnt.comment.value;*/
                URL="?name="+document.frmCtnt.name.value+"&email="+document.frmCtnt.email.value+"&mobile="+document.frmCtnt.mobile.value;
                
                if (window.XMLHttpRequest){
                    xmlhttp=new XMLHttpRequest();
                }else{
                    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                
                xmlhttp.onreadystatechange=function(){
                //

                    if (xmlhttp.readyState==4 && xmlhttp.status==200){
                    //
                	   document.getElementById("getFormResponseDiv").innerHTML=xmlhttp.responseText;
                    }else{
                    //
                    	document.frmCtnt.name.value="";
                    	document.frmCtnt.email.value="";
                    	document.frmCtnt.mobile.value="";
                    	document.getElementById("getFormResponseDiv").innerHTML="<br/>&nbsp;Waiting.........<br/>";
                   //  alert('am here');
                    }
                }
                
                xmlhttp.open("POST","http://localhost/boldlinksConference/send_contact.php"+URL,true);
                xmlhttp.send();

                
                }
            }
            //http://localhost/training/?name=Raheem+Yaqub&email=yaqub.adesola%40gmail.com&mobile=08074544422&course_period=weekdays&comment=Please+tell+us+your+expectation+on+this+programme.
