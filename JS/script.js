var oTitle = document.getElementById('title').innerHTML;
function capsTitle() {
    var title = document.getElementById('title').innerHTML;
    var capTitle = title.toUpperCase()
    document.getElementById('title').innerHTML = capTitle;
}
function normTitle() {
    var title = document.getElementById('title').innerHTML;
    document.getElementById('title').innerHTML = oTitle;
}
var varHome = document.getElementById('article').innerHTML;
function home() {
    document.getElementById('article').innerHTML = varHome;
}
function southAfrica() {
    document.getElementById('article').innerHTML = 'South Africa is a country in Africa. <br> It used to be a really nice place, but no longer is. <br> It is the country I am from. <br> It is located at the bottom of Africa';
}
function australia() {
    document.getElementById('article').innerHTML = 'Australia is a country that is also a continent. <br> It is a really nice place. <br> It is the country I live in now. <br> It is located below Asia';
}
function britain() {
    document.getElementById('article').innerHTML = 'Britain is a country in Europe. <br> It is made up of England, Ireland, Scotland and Wales. <br> It is a nice place and I would really like to go there one day. <br> I would not, however, wish to practice medicine there. <br> The NHS is notoriously terrible.'
}
function formFunc1() {
    var gender = document.forms["form1"]["gender"].value;
    var fname = document.forms["form1"]["fname"].value;
    var lname = document.forms["form1"]["lname"].value;
    var piano = document.getElementById('piano').checked;
    var gymnastics = document.getElementById('gymnastics').checked;
    var car = document.forms["form1"]["car"].value;
    var sometext = document.forms["form1"]["sometext"].value;
    var browser = document.forms["form1"]["browser"].value;
    var pwd = document.forms["form1"]["pwd"].value;
    var colour = document.forms["form1"]["colour"].value;
    var birthday = document.forms["form1"]["birthday"].value;
    var file = document.forms["form1"]["file"].value;
    var number = document.forms["form1"]["number"].value;
    if ((gender=='Male') && 
        (fname=="Aidan") && 
        (lname=="Marcov") && 
        (piano==true) && 
        (gymnastics==true) && 
        (car=="Volkswagen") && 
        (sometext=="Here is the text you wanted") && 
        (browser=="Chrome") && 
        (pwd=="hello") && 
        (colour=="#ff9900") && 
        (birthday=="2003-07-18") && 
        (file=="Darkseid.PNG") && 
        (number=="12.1")) {
        alert('Greetings Aidan');
    } else {
        alert('You are not Aidan');
    };
    var radio = document.form1["gender"]
    for(x=0;x<radio.length;x++) {
        document.form1["gender"][x].checked = false
    }
    var checkbox = document.form1["hobbies"]
    for(x=0;x<checkbox.length;x++) {
        document.form1["hobbies"][x].checked = false
    }
    document.forms["form1"]["fname"].value="";
    document.forms["form1"]["lname"].value="";
    document.forms["form1"]["pwd"].value="";
    document.forms["form1"]["car"].value="default";
    document.forms["form1"]["sometext"].value="[Input some text]";
    document.forms["form1"]["browser"].value="";
    document.forms["form1"]["colour"].value="";
    document.forms["form1"]["birthday"].value="";
    document.forms["form1"]["file"].value="";
    document.forms["form1"]["number"].value="";
    document.forms["form1"]["sliderthing"].value="";
    document.forms['form1']['phone'].value=""
}
function disAppear() {
    var dropdown = document.getElementById('dropDown')
    if (dropdown.style.display == "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none"
    };
}

