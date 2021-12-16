
function get_timer_177(string_was_177, string_sec_177) {
    var date_new_was_177 = new Date(string_was_177);
    var date_new_sec_177 = string_sec_177;
    var date_177 = new Date();
    var razn_177, left_177, left_n_177, vraz_177, ost_177;
    razn_177 = date_177 - date_new_was_177;
    left_177 = date_new_sec_177 - razn_177;
    if (left_177 > 0) {
        left_n_177 = left_177;
    } else {
        if (Math.abs(left_177) > date_new_sec_177) {
            vraz_177 = (Math.abs(left_177)) / date_new_sec_177;
            vraz_177 = vraz_177.toString().split(".");
            left_n_177 = Math.abs(left_177) - (vraz_177[0]) * date_new_sec_177;
            left_n_177 = date_new_sec_177 - left_n_177;
        } else {
            left_n_177 = date_new_sec_177 - Math.abs(left_177);
        }
    }
    ost_177 = left_n_177;
    var day_177 = parseInt(ost_177 / (60 * 60 * 1000 * 24));
    if (day_177 < 10) {
        day_177 = "0" + day_177;
    }
    day_177 = day_177.toString();
    var hour_177 = parseInt(ost_177 / (60 * 60 * 1000)) % 24;
    if (hour_177 < 10) {
        hour_177 = "0" + hour_177;
    }
    hour_177 = hour_177.toString();
    var min_177 = parseInt(ost_177 / (1000 * 60)) % 60;
    if (min_177 < 10) {
        min_177 = "0" + min_177;
    }
    min_177 = min_177.toString();
    var sec_177 = parseInt(ost_177 / 1000) % 60;
    if (sec_177 < 10) {
        sec_177 = "0" + sec_177;
    }
    sec_177 = sec_177.toString();
    timethis_177 = day_177 + " : " + hour_177 + " : " + min_177 + " : " + sec_177;
    $(".timerhello_177 p.result .result-day").text(day_177);
    $(".timerhello_177 p.result .result-hour").text(hour_177);
    $(".timerhello_177 p.result .result-minute").text(min_177);
    $(".timerhello_177 p.result .result-second").text(sec_177);
}

function getfrominputs_177() {
    string_was_177 = "Fri Mar 20 2020 15:29:06 GMT+0200 (Восточная Европа, стандартное время)";
    string_sec_177 = "5488900";
    get_timer_177(string_was_177, string_sec_177);
    setInterval(function() {
        get_timer_177(string_was_177, string_sec_177);
    }, 1000);
}
$(document).ready(function() {
    getfrominputs_177();
});