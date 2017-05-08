/* =================================================

pipwerks.UTILS.convertCaptivateEmailData
by Philip Hutchison, September 2008
http://pipwerks.com/lab/captivate

Copyright (c) 2008 Philip Hutchison
MIT-style license. Full license textcan be found at 
http://www.opensource.org/licenses/mit-license.php

==================================================== */

var pipwerks=pipwerks||{};pipwerks.UTILS=pipwerks.UTILS||{};pipwerks.UTILS.convertCaptivateEmailData=function(a){if(!a){return false}a=a.replace(/\"|Core Data\|/g,"");var b=a.split("||")[0].split("|");var c=b[0].split(",");var d=b[1].split(",");if(!d||!c||d.length<1||c.length<1||d.length!==c.length){return false}var e={};for(var i=0;i<c.length;i++){var f=c[i].replace(/\s/g,"").toLowerCase();var g=d[i];e[f]=g}if(e.rawscore!==null&&e.maxscore!==null){e.accuracy=(e.rawscore/e.maxscore)*100}return e};