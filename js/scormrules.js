$(function fitscorm () {
    /*remove footer and padding*/
    //$("#guru-lesson-footer").style.display = "none";
    //$(".guru-lesson").style.padding = "0px";
    /*colapse everything everything except SCORM object*/
    var c = $(".guru-lesson-content").find("*:not(#scorm_object, #scorm_object *)");
    var i;
    for (i = 0; i < c.length; i++) {
        c[i].style.margin = "0px";
        c[i].style.padding = "0px";
    }
    /*set SCORM object to 100% window*/
    $("#scorm_object").style.height = "100vh";
    $("#scorm_object").style.width = "100%"; 
});
