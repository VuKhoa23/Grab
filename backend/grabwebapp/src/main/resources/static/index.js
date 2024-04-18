var customerStompClient = null;
var operatorStompClient = null;
var driverStompClient = null;

$(document).ready(function() {
    connect();
});

function connect() {
    // For customer
    var customerSocket = new SockJS('/customer-ws');
    customerStompClient = Stomp.over(customerSocket);

    // For operator
    var operatorSocket = new SockJS('/operator-ws');
    operatorStompClient = Stomp.over(operatorSocket);

    // For driver
    var driverSocket = new SockJS('/driver-ws');
    driverStompClient = Stomp.over(driverSocket);

    customerStompClient.connect({}, function() {
        console.log('Customer WebSocket is connected');
        customerStompClient.subscribe('/topic/operator', function(message) {
            $("#message_operator").text(message.body);
        });
    });

    operatorStompClient.connect({}, function() {
        console.log('Operator WebSocket is connected');
        operatorStompClient.subscribe('/topic/customer', function(message) {
            $("#message_customer").text(message.body);
        });
    });

    driverStompClient.connect({}, function() {
        console.log('Driver WebSocket is connected');
        driverStompClient.subscribe('/topic/driver', function(message) {
            $("#message_driver").text(message.body);
        });
    });
}

$(function() {
    $("#operator").on('submit', function(e) {
        e.preventDefault();
        var operatorName = $("#name_operator").val();
        customerStompClient.send("/app/operator-ws", {}, operatorName);
    });

    $("#customer").on('submit', function(e) {
        e.preventDefault();
        var customerName = $("#name_customer").val();
        operatorStompClient.send("/app/customer-ws", {}, customerName);
    });

    $("#driver").on('submit', function(e) {
        e.preventDefault();
        var driverName = $("#name_driver").val();
        customerStompClient.send("/app/driver-ws", {}, driverName);
    });
});
