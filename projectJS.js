var $ = function(id) { return document.getElementById(id); }

var namestyle = function(){
	var name = $("name");
	name.style.color = "red";
	name.style.textAlign = "center";
	name.style.fontFamily = "Tahoma";
	}

var coursestyle = function(){
	var course = $("course");
	course.style.color = "red";
	course.style.textAlign = "center";
	course.style.fontFamily = "Garamond";
	course.style.fontStyle = "italic";
	}

var validateemail = function(){
	var email = $("email").value;
	if(email == null || email.length == 0)
		return false;
	if(email.indexOf('@')== -1)
		return false;

	return true;
	}

var createResume = function()
	{
		if(!validateemail()){
			alert("Please enter correct email address");
			return;
		}

	    var fullname = $("fullname").value;
	    var address = $("address").value;
	    var phonenumber = $("phonenumber").value;
	    var email = $("email").value;
	    var personalinformation = $("personalinformation").value;
	    var career = $("career").value;
	    var education = $("education").value;
	    var entrydate1 = $("entrydate1").value;
	    var exitdate1 = $("exitdate1").value;
	    var employment1 = $("employment1").value;
	    var entrydate2 = $("entrydate2").value;
		var exitdate2 = $("exitdate2").value;
	    var employment2 = $("employment2").value;
	    var entrydate3 = $("entrydate3").value;
		var exitdate3 = $("exitdate3").value;
	    var employment3 = $("employment3").value;
	    var entrydate4 = $("entrydate4").value;
		var exitdate4 = $("exitdate4").value;
	    var employment4 = $("employment4").value;
	    var references = $("references").value;

	    myText = ("<html>\n<head>\n<title>Welcome</title>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"finalProject.css\"/></head>\n<body>\n");
	    myText += ("<header>"+ fullname + "<br/>" + address + " \\ " + phonenumber + " \\ " + email + "<hr/></header>");
	    myText += ("<section id=\"wrapper\"><article id=\"leftcolumn\">CARRIER OBJECTIVES</article><article id=\"rightcolumn\"><pre>"+ career +"</pre></article></section>");
		myText += ("<section id=\"wrapper\"><article id=\"leftcolumn\">PERSONAL DATA</article><article id=\"rightcolumn\"><pre>"+ personalinformation +"</pre></article></section>");
		myText += ("<section id=\"wrapper\"><article id=\"leftcolumn\">EDUCATION</article><article id=\"rightcolumn\"><pre>"+ education +"</pre></article></section><br/>");
		myText += ("<section id=\"wrapper\"><article id=\"leftcolumn\">EMPLOYMENT EXPERIENCE</article><article id=\"rightcolumn\">&nbsp;</article></section><br/>");
		myText += ("<section id=\"wrapper\"><article id=\"leftcolumn\">"+ entrydate1 + "-" + exitdate1 +"</article><article id=\"rightcolumn\"><pre>"+ employment1 +"</pre></article></section><br/>");
		myText += ("<section id=\"wrapper\"><article id=\"leftcolumn\">"+ entrydate2 + "-" + exitdate2 +"</article><article id=\"rightcolumn\"><pre>"+ employment2 +"</pre></article></section><br/>");
		myText += ("<section id=\"wrapper\"><article id=\"leftcolumn\">"+ entrydate3 + "-" + exitdate3 +"</article><article id=\"rightcolumn\"><pre>"+ employment3 +"</pre></article></section><br/>");
		myText += ("<section id=\"wrapper\"><article id=\"leftcolumn\">"+ entrydate4 + "-" + exitdate4 +"</article><article id=\"rightcolumn\"><pre>"+ employment4 +"</pre></article></section><br/>");
		myText += ("<section id=\"wrapper\"><article id=\"leftcolumn\">CHARATER REFERENCES</article><article id=\"rightcolumn\"><pre>Upon request</pre></article></section><br/>");
		myText += ("<section id=\"wrapper\"><article id=\"leftcolumn\">BUSINESS REFERENCES</article><article id=\"rightcolumn\"><pre>"+ references +"</pre></article></section><br/>");

	    myText += ("</body>\n</html>");

	    var flyWindow = window.open('about:blank','myPop','width=600,height=500,left=300,top=100');
	    flyWindow.document.write(myText);
	}

	window.onload = function () {
	    namestyle();
	    coursestyle();

	    $("createresume").onclick = createResume;
	}
