$myJ(window).scroll(function () { 
    //You've scrolled this much:
  
  		if($myJ(window).scrollTop() > 140)
        {           
            document.getElementById("header-bg-aff").setAttribute("style","display:inline;");
            document.getElementById("scrollup").setAttribute("style","display:inline;");    
            document.getElementById("account-icon").setAttribute("style","background-position: 0px -786px;");
            document.getElementById("header-cart-icon").setAttribute("style","background-position: 0px -837px;");
            document.getElementById("account-icon:hover").setAttribute("style","background-position: 0px -837px;");
            document.getElementById("header-cart-icon:hover").setAttribute("style","background-position: -50px -95px;");
            if($myJ(this).width() <= 770)
            {
            }
            else if($myJ(this).width() >= 771)
            {
            }
        }
        else if ($myJ(window).scrollTop() <= 140)
        {
            document.getElementById("header-bg-aff").setAttribute("style","display:none;");
            document.getElementById("scrollup").setAttribute("style","display:none;");
            if($myJ(window).width() <= 770){
            }
            else{
            }
        }
});

function scrollTopFunc()
{
	$myJ('html, body').animate({ scrollTop: 0 }, 'slow');
    console.log("You did it.");
};
$myJ( document ).ready(function() {
  //document.getElementById("prodInfo").setAttribute("style","min-height:1px;");
});

function replaceContentInContainer(matchClass, content) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) 
        {
                console.log(elems[i].tagName);
                elems[i].innerHTML = content;
        }
    }
};

function replaceContentInContainer(matchClass, content, tName) {
    
    console.log("Logging Something");
    var lowerTName = tName.toLowerCase();
    var elems = document.getElementsByTagName(lowerTName), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1 && elems[i].tagName.toLowerCase() === lowerTName) 
        {
                console.log(elems[i].tagName);
                var cContent = elems[i].innerHTML;
                var cContentReplaced = cContent.replace(/\bAccessories\b/g, '');
                if (cContentReplaced != cContent)
                {
                console.log(cContent);
                console.log(cContentReplaced);
                console.log(cContentReplaced == cContent);
                    var cContentFixed = "<h2>" + cContentReplaced + "</h2><br /><h6>Accessories</h6>";
                    elems[i].innerHTML = cContentFixed;
                }
                else
                {
                    cContentReplaced = cContent.replace(/\bParts\b/g, '');
                    if (cContentReplaced != cContent)
                    {
                        elems[i].innerHTML = "<h2>" + cContentReplaced + "</h2><br /><h6>Parts & Accessories</h6>";
                    }
                    else
                    {
                        console.log(cContent);
                        cContentReplaced = cContent.replace(/\bSearch by\b/g, '');
                        if (cContentReplaced != cContent)
                        {
                        elems[i].innerHTML = "<h2>" + cContentReplaced + "</h2><br /><h6>Shop By</h6>";
                        }
                    }
                }
        }
    }
};

var $myJ = jQuery.noConflict();

window.onload = function() {
    console.log("Logging Something");
    replaceContentInContainer("level0","","A");
    //replaceContentInLayeredContainer("odd","","DD");
    //replaceContentInLayeredContainer("odd","","DT");
    //replaceContentInLayeredContainer("even","","DD");
    var navWidth = document.getElementById("nav").offsetWidth;
    console.log(navWidth);
    
    var elems = document.getElementsByTagName("dt"), i;
        for (i in elems) {
            if((' ' + elems[i].className + ' ').indexOf(' ' + "odd" + ' ') > -1) 
            {
                var ddName = elems[i].innerHTML
                console.log(ddName);
                var thisIndex = i;
                console.log("DT Odd is on index of: " + thisIndex );
                replaceContentInLayeredContainerA("odd",ddName,thisIndex,"dd");
            }
            i++;
        }
    
    var elems = document.getElementsByTagName("dt"), i;
        for (i in elems) {
            if((' ' + elems[i].className + ' ').indexOf(' ' + "even" + ' ') > -1) 
            {
                var ddName = elems[i].innerHTML
                console.log(ddName);
                var thisIndex = i;
                console.log("DT Odd is on index of: " + thisIndex );
                replaceContentInLayeredContainerA("even",ddName,thisIndex,"dd");
            }
            i++;
        }
};

function replaceContentInLayeredContainerA(matchClass, content, theIndex, tName) {
    console.log(matchClass);
    console.log(content);
    console.log(tName);
    console.log(theIndex);
    var elems = document.getElementsByTagName(tName), i;
    for (j = 0, i = 0; j < 20; j++) {
        if((' ' + elems[theIndex].className + ' ').indexOf(' ' + matchClass + ' ') > -1)
        {
            console.log("about to check on index: " + i + " of theIndex: " + theIndex);
            if(theIndex == i)
            {
                console.log("Finaly Made It");
                console.log(elems[i].tagName);
                $myJ(elems[i]).addClass(content);
                var thisIndex = "index: " + i;
                console.log("this index" + thisIndex);
                var onClickState = "onchange=\"catLayerSelectChanged(this.value);\"";
            
            
                var regContent = elems[i].innerHTML;
                //console.log(regContent);
                var regContentReplace1 = regContent.replace(/\S\/ol\b/g, '</select');
                //console.log(regContentReplace1);
                var regContentReplace2 = regContentReplace1.replace(/\bol\S/g, 'select class="CatLayerSelect' + i + '" id="CatLayerSelect' + i + '"' + onClickState + ' ><option>' + content + '</option>');
                //console.log(regContentReplace2);
                var regContentReplace3 = regContentReplace2.replace(/\S\/li\S/g, '');
                //console.log(regContentReplace3);
                var regContentReplace4 = regContentReplace3.replace(/\Sli>\S/g, '');
                //console.log("\n\n\n\n\t Number 4: \n\n\n\n\t" + regContentReplace4);
                var regContentReplace5 = regContentReplace4.replace(/\ba\b/g, 'option');
                //console.log("\n\n\n\n\t Number 5: \n\n\n\n\t" + regContentReplace5);
                var regContentReplace6 = regContentReplace5.replace(/\S<\/a\b/g, '</option');
                //console.log(regContentReplace6);
                var regContentReplace7 = regContentReplace6.replace(/\bhref\b/g, 'value');
                //console.log( "\n\n\t Number 7: \n\n\t" +regContentReplace7);
                elems[i].innerHTML = regContentReplace7;
            }
            else
            {
                i++
            }
        }
    }
};
$myJ(window).resize(function() 
{
    console.log('Resize Event Fired!');
    var navWidth = document.getElementById("nav").offsetWidth;
    console.log("Nav Width: " + navWidth);
    if(navWidth == '0')
    {
    console.log("Nav Width = 0: " + navWidth);
    }
    else if (navWidth <= 1)
    {
        $myJ(".nav-primary li.level0 ul").css("width","1200px");
    }
    else
    {
        $myJ(".nav-primary li.level0 ul").css("width","1200px");
    }
});

$myJ(function ()
{
    
    $myJ(".level0:not(.spill)").mouseenter(function () 
    {
        console.log('MouseEnter Event Fired!');
        var thisV = $myJ(this);
        var z = this.offsetLeft;
        console.log(z);
        thisV.find("ul").css("left",-z);
    }).mouseleave(function ()
    {
        //$this = $(this);
    });
    
    document.getElementById("sideBarHelpButton").addEventListener('click', function()
    {
        console.log("Button Clicked");
        $myJ("#sideBarHelp").removeClass("no-first");
        $myJ("#sideBarHelpButton").removeClass("no-first");
        $myJ("#sideBarHelp").toggleClass("helpActive");
        $myJ("#sideBarHelpButton").toggleClass("helpActiveBtn");
    });
    
});

function catLayerSelectChanged(obj){
    var myObj = obj;
    console.log("Nav Layer Select Changed...");
    console.log(myObj);
    window.location.href=myObj;
};

function continueShoppingFunction() {
    console.log("Continue Shopping Clicked");
    history.go(-1);
};