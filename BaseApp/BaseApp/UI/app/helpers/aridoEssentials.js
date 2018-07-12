//            ( )   | |                  / _| |                         
//   __ _ _ __ _  __| | ___    ___  ___ | |_| |___      ____ _ _ __ ___ 
//  / _` | '__| |/ _` |/ _ \  / __|/ _ \|  _| __\ \ /\ / / _` | '__/ _ \
// | (_| | |  | | (_| | (_) | \__ \ (_) | | | |_ \ V  V / (_| | | |  __/
//  \__,_|_|  |_|\__,_|\___/  |___/\___/|_|  \__| \_/\_/ \__,_|_|  \___|
//
// by fvicente - 2016/03/07 - initials
// ----------------------------------------------------------------------

define([], function () {
    return {
        ok: function () {
            console.log("ok");
        },
        loadCSS: function (href) {
            console.log(href);
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = href;
            document.getElementsByTagName("head")[0].appendChild(link);
        },
        resizeContent: function () {
            $("#content").height(window.innerHeight - $("#main-navbar").height() + 4);
        }
    }
    //** for detect Browsers
    var isMIE = /(MSIE |Trident.*rv[ :])([0-9]+)/i.test(ua);

    //* for detect mobiles
    var ua = navigator.userAgent;
    var isiPad = /iPad/i.test(ua);
    var isiPhone = /iPhone/i.test(ua) || /iPhone/i.test(ua);
    var isMobile = /Android/i.test(ua)
     || /webOS/i.test(ua)
     || /iPhone/i.test(ua)
     || /iPad/i.test(ua)
     || /iPod/i.test(ua)
     || /BlackBerry/i.test(ua)
     || /Windows Phone/i.test(ua);

    //* prevent bounce on safari and ipad
    function preventBounceIpad() {
        document.body.addEventListener('touchmove', function (event) {
            console.log(event.source);
            event.preventDefault();
        }, false);
    }

    //* getParameter - return paarameter form the url
    function getParameter(param) {
        var results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        else {
            return results[1] || 0;
        }
    }

    //** redirect -
    //** type=new -> view is open new window      
    //** type=load -> view is load inner container      
    //** default -> view redirect in this window      
    function redirect(view, type, container) {
        switch (type) {
            case "new":
                window.open(view, '_blank');
                break;
            case "load":
                $(container).load(view, function () {
                    console.info("Load " + view);
                });
                break;
            default:
                window.location.href = view;
                break;
        }
    }

    //** isOnline - return true if your navigator is a connected, false if is not connected
    function isOnline() {
        return navigator.onLine
    }

    //** isIE - return true if your browser is Internet Explorer, false if isn't **//
    function isIE() {
        var nav = navigator.userAgent.toLowerCase();
        if ((nav.indexOf("msie") != -1) || (nav.indexOf("trident") != -1)) {
            return true;
        }
        return false;
    }

    //** isFirefox - return true if your browser is Firefox, false if isn't **//
    function isFirefox() {
        var nav = navigator.userAgent.toLowerCase();
        if (nav.indexOf("firefox") != -1) {
            return true;
        }
        return false;
    }

    //** isEdge - return true if your browser is Microsoft Edge, false if isn't **//
    function isEdge() {
        var nav = navigator.userAgent.toLowerCase();
        if (nav.indexOf("edge") != -1) {
            return true;
        }
        return false;
    }

    //** isChrome - return true if your browser is Google Chrome, false if isn't **//
    function isChrome() {
        var nav = navigator.userAgent.toLowerCase();
        if (!isEdge()) {
            if (nav.indexOf("chrome") != -1) {
                return true;
            }
        }

        return false;

    }

    //** preload - if state is true, show preload in elemment; if state is false, hide preload in element (require kendo) 
    //function preload(elememt, state) {    
    //    kendo.ui.progress($element, true);    
    //}


    //** toUTC - return date whitout UTC
    function toUTC(localDate) {
        var d = new Date(localDate);
        return d.addMinutes(d.getTimezoneOffset());
    }

    function localize(utcDate) {
        var d = new Date(utcDate);
        return new Date(d.toUTCString());
    }

    //** dateCheck - return if a date between to other two
    function dateCheck(from, to, check) {

        var fDate, lDate, cDate;
        fDate = Date.parse(from);
        lDate = Date.parse(to);
        cDate = Date.parse(check);

        if ((cDate <= lDate && cDate >= fDate)) {
            return true;
        }
        return false;
    }


    //** compare - return true is equal
    jQuery.extend({
        compare: function (arrayA, arrayB) {
            if (arrayA.length != arrayB.length) { return false; }
            // sort modifies original array
            // (which are passed by reference to our method!)
            // so clone the arrays before sorting
            var a = jQuery.extend(true, [], arrayA);
            var b = jQuery.extend(true, [], arrayB);
            a.sort();
            b.sort();
            for (var i = 0, l = a.length; i < l; i++) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        }
    });

    //** parseTimestamp - return date string without utc
    function parseTimestamp(timestampStr, format) {
        return new Date(new Date(timestampStr).getTime() + (new Date().getTimezoneOffset() * 60 * 1000)).toString(format);
    };

    //** getLog - return last n line log4net
    function getLog(filename, nlines) {
        var path = window.location.origin;
        if (window.location.href.split("/").length > 4) {
            for (i = 3; i = window.location.href.split("/").length; i++) {
                path = path + "/" + window.location.href.split("/")[i];
            }
        }
        path = path + "/logs/" + filename;
        console.log(path);
        //$.ajax({
        //    method: "GET",
        //    url: "api/Log",
        //    data: { logname: filename, numrows: nlines },
        //    crossDomain: true,
        //    cache:false,
        //    dataType: "json",
        //}).done(function (data) {
        //    console.log("-------------------------- SERVER LOG ------------------------------");
        //    console.log(data);
        //}).fail(function (jqXhr, textStatus) {
        //    console.error(textStatus, jqXhr);
        //});
    }

    window.onerror = function (msg, url, line, col, error) {
        // Note that col & error are new to the HTML 5 spec and may not be 
        // supported in every browser.  It worked for me in Chrome.
        var extra = !col ? '' : '\ncolumn: ' + col;
        extra += !error ? '' : '\nerror: ' + error;

        var data = {
            url: url,
            line: line,
            extra: extra
        }

        //$.ajax({
        //    method: "POST",
        //    url: "api/Log",
        //    data: {
        //        message: msg,
        //        data: JSON.stringify(data)
        //    },
        //    crossDomain: true,
        //    cache: false,
        //    dataType: "json",
        //}).done(function (data) {
        //    console.log("-------------------------- SERVER LOG ------------------------------");
        //    console.log(data);
        //}).fail(function (jqXhr, textStatus) {
        //    console.error(textStatus, jqXhr);
        //});

        var suppressErrorAlert = true;

        return suppressErrorAlert;
    };
});