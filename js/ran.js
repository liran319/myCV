$(document).ready(function() {
    var osdata = [{
                        label: 'Windows',
                        value: 60,
                        highlight: "#70df12",
                        color: "#69D2E7"
                    }, {
                        label: 'Mac OS',
                        value: 20,
                        highlight: "#70df12",
                        color: "#E0E4CC"
                    }, {
                        label: 'Linux',
                        value: 20,
                        highlight: "#70df12",
                        color: "#F38630"
                }
                    ]

    var osoptions = {
        animation: true,
        segmentShowStroke : false
    };

    var c = $('#os');
    var ct = c.get(0).getContext('2d');

    var osChart = new Chart(ct).Pie(osdata, osoptions);

    osChart;

});