var webSocket;
var socketUrl = "ws://97.74.234.178:8080/EmployeePortal/chat?name=web";

var count = [];

function connect($scope) {
    webSocket = new WebSocket(socketUrl);

    webSocket.onmessage = function(message) {
        //console.log("--------On Message------------");
        //console.log(message);

        var data = JSON.parse(message.data);
        if (data.flag == "message") {
            //console.log(data.message);
            var temp = data.message;
            $scope.tempCnt.push({ time: new Date().toLocaleTimeString(), temparature: parseFloat(temp) });
            if ($scope.tempCnt.length > 0) {
                $scope.liveStatTHS.temprature = parseFloat(temp);
                $scope.loadChart();
            }
        }

    };
};

function closeSocket() {
    missed_heartbeats = 0;
    if (webSocket != null) {
        webSocket.close();
    }
    //console.log("Closing Session!");
};

/*function pushCount($scope, time, temp) {
    $scope.tempCnt.push({time: time, temparature: temp});
}*/