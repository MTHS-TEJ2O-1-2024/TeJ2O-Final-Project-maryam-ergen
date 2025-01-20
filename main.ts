 +/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maryam Ergen and Ella An
 * Created on: Nov 14
 * This program is a pizza truck
*/

// setup
radio.setGroup(131)

//to start going...ballalala
radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Heart)
    if (receivedNumber == 1) {
    robotbit.StpCarMove(5, 48)
    }
    else  {
        robotbit.StpCarMove(-5, 48)
    }

    })