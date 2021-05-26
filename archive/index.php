<?php

$lang = substr($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,2);
switch($lang) {
    case "es":
        header("Location: https://merakischools.com/es/");
        break;
    case "eu":
        header("Location: https://merakischools.com/eu/");
        break;
    default:
        header("Location: https://merakischools.com/en/");
        break;
}

?>