let roomDimensions = {
    'width': 50,
    'length': 100,
    'getArea': function() { return roomDimensions.width * roomDimensions.length }
}

var boundGetArea = roomDimensions.getArea.bind(roomDimensions);