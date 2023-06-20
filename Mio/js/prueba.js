var espanol = window.location.pathname.search('/es');

var waitForWdg = function (selector, callback, count) {
    if ($("button[type='submit']").length) {
        callback();
    } else {
        setTimeout(function () {
            if (!count) {
                count = 0;
            }
            count++;
            if (count < 15) {
                waitForWdg(selector, callback, count);
            } else { return; }
        }, 2000);
    }
};


function initializeWidget() {

    var btnSubmit = document.querySelector("button[type='submit']");

    waitForWdg(btnSubmit, function () {
        $("button[type='submit']").html(espanol >= 0 ? "SOLO HOTEL" : "HOTEL ONLY").attr('formtarget', '_blank');
        $("button[type='submit']").parent().parent().append(
            "<div class='reserv-search-engine__item reserv-search-engine__item--action'>" +
            "<a id='toggle-hotel-air' href='#airlines_flights' rel='modal:open' class='reserv-search-engine__field reserv-search-engine__field--action'>" + (espanol >= 0 ? "HOTEL + VUELO" : "HOTEL + FLIGHT") + "</a>" +
            "<input class='airport-input' type='hidden' name='airport'>" +
            "</div>"
        );
        $(
            "<div id='airlines_flights' class='modal airlines_modal'>" +
            "<div class='reserv-search-engine__item reserv-search-engine__item--air'>" +
            "<label for='airport' class='reserv-search-engine__label reserv-search-engine__label--air'>" + (espanol >= 0 ? "AEROPUERTO" : "AIRPORT") + "</label>" +
            "<input class='reserv-search-engine__field reserv-search-engine__field--air search-airport-input' type='text' value='' title='Airport''>" +
            "</div>" +
            "<div style='padding:10px;text-align:right;'>" +
            "<a href='#' class='search-air-btn'>" + (espanol >= 0 ? "BUSCAR" : "SEARCH") + "</a>" +
            "</div>" +

            "</div>"
        ).insertAfter("#roi-engine-container");



        // ----------------------

        $("#toggle-hotel-air").on('click', function (ev) {
            ev.preventDefault();
        });

        $('.search-airport-input').autocomplete({
            minLength: 3,
            html: true,
            position: {
                my: "left top+05",
                at: "left bottom"
            },
            source: function (request, response) {
                $.ajax({
                    type: "POST",
                    url: "https://www.reservhotel.com/win/owa/ibe5.get_airport_json",
                    dataType: "json",
                    data: {
                        p_search: request.term
                    },
                    success: function (data) {
                        response(data);
                    }
                });
            },
            open: function () {
                $('.ui-autocomplete').width($(this).outerWidth() + 100);
            },
            select: function (event, ui) {
                event.preventDefault();
                $(".search-airport-input").val(ui.item.label);
                $(".airport-input").val(ui.item.value);
                if ($('.selected .ui-state-default').length > 0) {
                    $('.selected .ui-state-default').popover('destroy');
                }
            }
        })
            .data("ui-autocomplete")._renderItem = function (ul, item) {
                if (item.value == "QDF") {
                    return $("<li>").append('<a>' + item.label + '</a>').append('<h5><i class="fa fa-arrow-right"></i> Dallas/Fort Worth Love Field,  US (DAL)</h5>').append('<h5><i class="fa fa-arrow-right"></i> Dallas/Fort Worth Intl Apt, TX US (DFW)</h5>').prependTo(ul);
                } else if (item.value == "WAS") {
                    return $("<li>").append('<a>' + item.label + '</a>').append('<h5><i class="fa fa-arrow-right"></i> Washington Ronald Reagan National Apt,  US (DCA)</h5>').append('<h5><i class="fa fa-arrow-right"></i> Washington Dulles International Apt,  US (IAD)</h5>').append('<h5><i class="fa fa-arrow-right"></i> Baltimore Washington International Apt, MD US (BWI)</h5>').prependTo(ul);
                } else if (item.value == "CHI") {
                    return $("<li>").append('<a>' + item.label + '</a>').append('<h5><i class="fa fa-arrow-right"></i> Chicago OHare International Apt,  US (ORD)</h5>').append('<h5><i class="fa fa-arrow-right"></i> Chicago Midway Apt,  US (MDW)</h5>').prependTo(ul);
                } else if (item.value == "YTO") {
                    return $("<li>").append('<a>' + item.label + '</a>').append('<h5><i class="fa fa-arrow-right"></i> Toronto Lester B Pearson Intl Apt,  CA (YYZ)</h5>').append('<h5><i class="fa fa-arrow-right"></i> Toronto City Centre Apt,  CA (YTZ)</h5>').prependTo(ul);
                } else if (item.value == "QHO") {
                    return $("<li>").append('<a>' + item.label + '</a>').append('<h5><i class="fa fa-arrow-right"></i> Houston Hobby Apt, TX US (HOU)</h5>').append('<h5><i class="fa fa-arrow-right"></i> Houston George Bush Intercontinental Ap,  US (IAH)</h5>').prependTo(ul);
                } else if (item.value == "LON") {
                    return $("<li>").append('<a>' + item.label + '</a>').append('<h5><i class="fa fa-arrow-right"></i> London Heathrow Apt,  GB (LHR)</h5>').append('<h5><i class="fa fa-arrow-right"></i> London Gatwick Apt,  GB (LGW)</h5>').append('<h5><i class="fa fa-arrow-right"></i> London Stansted Apt,  GB (STN))</h5>').append('<h5><i class="fa fa-arrow-right"></i> London Luton Apt,  GB (LTN)</h5>').prependTo(ul);
                } else if (item.value == "AEJ") {
                    return $("<li>").append('<a>' + item.label + '</a>').append('<h5><i class="fa fa-arrow-right"></i> San Francisco International Apt, CA US (SFO)</h5>').append('<h5><i class="fa fa-arrow-right"></i> Oakland International Apt, CA US (OAK)</h5>').prependTo(ul);
                } else if (item.value == "ZLA") {
                    return $("<li>").append('<a>' + item.label + '</a>').append('<h5><i class="fa fa-arrow-right"></i> Los Angeles International Apt, CA US (LAX)</h5>').append('<h5><i class="fa fa-arrow-right"></i> Burbank, CA US (BUR)</h5>').prependTo(ul);
                } else if (item.value == "ZDR") {
                    return $("<li>").append('<a>' + item.label + '</a>').append('<h5><i class="fa fa-arrow-right"></i> Punta Cana,  DO (PUJ)</h5>').append('<h5><i class="fa fa-arrow-right"></i> Santo Domingo,  DO (SDQ)</h5>').append('<h5><i class="fa fa-arrow-right"></i> La Romana,  DO (LRM)</h5>').prependTo(ul);
                } else if (item.value == "AED") {
                    return $("<li>").append('<a>' + item.label + '</a>').append('<h5><i class="fa fa-arrow-right"></i> Miami International, FL US (MIA)</h5>').append('<h5><i class="fa fa-arrow-right"></i> Fort Lauderdale, FL US (FLL)</h5>').append('<h5><i class="fa fa-arrow-right"></i> West Palm Beach, FL US (PBI)</h5>').prependTo(ul);
                } else {
                    return $("<li>").append('<a>' + item.label + '</a>').appendTo(ul);
                }
            };


        $(".search-air-btn").on('click', function (ev) {
            ev.preventDefault();
            gotoReservHotel();
        });



    });
}


if (window.jQuery) {

    initializeWidget();

} else {

    setTimeout(() => {
        initializeWidget();
    }, 1000);

};

var monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var hotels = {
    "fivesresidence": {
        "cod": 10816,
        "url": "playa-del-carmen-mexico/residences-at-the-fives"
    },
    "fivesbeach": {
        "cod": 10817,
        "url": "playa-del-carmen-mexico/the-fives-beach-hotel"
    },
    "fivesdowntown": {
        "cod": 10815,
        "url": "playa-del-carmen-mexico/the-fives-downtown-hotel-and-residences"
    },
    "fivesmorelos": {
        "cod": 10818,
        "url": "cancun-mexico/the-fives-oceanfront"
    }
}
var aD, dD;
//Arrival & departure dates
var today = new Date();
today.setDate(today.getDate() + 5);
//todays date plus 5
var HOTELONLY = false;

function translateDate(date) {
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var t_months = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
    var cal = date.toUpperCase().split(' ');
    var t_month_i = months.indexOf(cal[0]);
    var t_month = date;
    if (t_month_i >= 0) {
        t_month = t_months[t_month_i] + " " + cal[1];
    }
    return t_month;
}

function translateRoom(rooms) {
    var r = rooms.trim().split(' ');
    return r[0] + " HAB(S)";
}

function translateRoomRow() {
    // Translate Titles
    var titles = $(".roi-search-engine__occupancy-room-title.js-roi-search-engine-room-title");
    titles.each(function () {
        var rowTitle = $(this).html().trim();
        var r = rowTitle.split(' ');
        $(this).html('HAB ' + r[1]);
    });

    // Translate Adult Select
    var selectors = $(".roi-search-engine__occupancy-input.js-roi-search-engine-adults");
    selectors.each(function () {
        var select = $(this).find('option');
        select.each(function () {
            if (!$(this).hasClass('translated')) {
                $(this).addClass('translated');
                var opt = $(this).html().trim();
                var o = opt.split(' ');
                $(this).html(o[0] + ' Adultos');
                if ($(this).val() == 1) {
                    $(this).html(o[0] + ' Adulto');
                }
            }
        });
    });

    // Translate Children Select
    var selectors = $(".roi-search-engine__occupancy-input.js-roi-search-engine-children");
    selectors.each(function () {
        var select = $(this).find('option');
        select.each(function () {
            if (!$(this).hasClass('translated')) {
                $(this).addClass('translated');
                var opt = $(this).html().trim();
                var o = opt.split(' ');
                $(this).html(o[0] + ' Niños');
                if ($(this).val() == 1) {
                    $(this).html(o[0] + ' Niño');
                }
            }
        });
    });

    // Translate Children Ages
    var childrenAges = $(".roi-search-engine__occupancy-label.roi-search-engine__occupancy-label--age");
    childrenAges.each(function () {
        var rowTitle = $(this).html().trim();
        var r = rowTitle.split(' ');
        $(this).html('EDAD DE NIÑOS');
    });
}

//Go to Reservhotel function will check all parameters before submitting the form
function gotoReservHotel() {
    var base_url = "https://www.reservhotel.com/";
    var mName1, mName2;
    if ($("input[name='entrada']").val() != "" && $("input[name='salida']").val() != "") {
        aD = new Date();
        dD = new Date();
        var i, month, month2, dateText = $("input[name='entrada']").val(), dateText2 = $("input[name='salida']").val();
        mName1 = monthname[parseInt(dateText.substring(3, 5)) - 1];
        mName2 = monthname[parseInt(dateText2.substring(3, 5)) - 1];
        month = parseInt(dateText.substring(3, 5));
        month2 = parseInt(dateText2.substring(3, 5));

        aD.setFullYear("20" + dateText.substring(8), month, dateText.substring(0, 2));
        dD.setFullYear("20" + dateText2.substring(8), month2, dateText2.substring(0, 2));
    }

    if ($("input[name='entrada']").val() == "") {//Check if arrival date has been selected
        // document.getElementById("error").innerHTML = "Select your arrival date";
        // $("#dialog").dialog("open");
        alert("Select your arrival date");
    } else if ($("input[name='salida']").val() == "") {//Check if departure date has been selected
        // document.getElementById("error").innerHTML = "Select your departure date";
        // $("#dialog").dialog("open");
        alert("Select your departure date");
    } else if (dD <= aD) {//check to see that departure date is after the arrival date
        // document.getElementById("error").innerHTML = "The departure date can not be after the return date.";
        // $("#dialog").dialog("open");
        alert("The departure date can not be after the return date.");
    } else if (HOTELONLY == false && $("input[name='airport']").length && $("input[name='airport']").val() == "") {//check to see if the airport has been selected
        // document.getElementById("error").innerHTML = "You must select a departing airport for hotel and air packages.";
        // $("#dialog").dialog("open");
        alert("You must select a departing airport for hotel and air packages.");
    } else if (aD < today && ($("input[name='airport']").length && HOTELONLY == false)) {//check to see packages are selected in the future
        // document.getElementById("error").innerHTML = "Packages must have be select at least 5 days from today.";
        // $("#dialog").dialog("open");
        alert("Packages must have be select at least 5 days from today.");
    } else {
        var destino = filter_unconsistency($("input[name='coddestino']").val());

        var extension = hotels[destino]["url"];
        var hotel = hotels[destino]["cod"];
        var airport = $("input[name='airport']").val();
        var occ = JSON.parse($("[name='occupancies']").val())[0];
        var aDate = $("[name='entrada']").val();
        var dDate = $("[name='salida']").val();
        var promoCode = $("[name='codpromo']").val();
        var uri = base_url + extension + "/booking-engine/ibe5.main?"
            + "hotel=" + hotel
            + "&airport=" + airport
            + "&adults=" + occ["adults"]
            + "&child=" + occ["children"];
        var ages = occ["ages"];
        if (ages != "") {
            for (let i = 0; i < ages.split(";").length; i++) {
                uri += "&childages=" + ages.split(";")[i];
            }
        }
        uri += "&aDate=" + aDate.substring(0, 2) + "-" + mName1 + "-" + aDate.substring(8)
            + "&dDate=" + dDate.substring(0, 2) + "-" + mName2 + "-" + dDate.substring(8);
        if (promoCode.trim() != "") {
            uri += "&PC=" + promoCode.trim();
        }
        window.open(uri, '_blank');
    }
}

function filter_unconsistency(cod) {
    if (cod.substring(0, 10) == "fivesbeach") {
        return "fivesbeach";
    }
    if (cod.substring(0, 12) == "fivesmorelos") {
        return "fivesmorelos";
    }
    if (cod.substring(0, 13) == "fivesdowntown") {
        return "fivesdowntown";
    }
    if (cod.substring(0, 14) == "fivesresidence") {
        return "fivesresidence";
    }
    return cod;
}