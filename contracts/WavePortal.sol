// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 waveCount;

    constructor() {
        console.log("This is the way!");
    }

    function wave() public {
        waveCount += 1;
        console.log("%s has waved", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", waveCount);
        return waveCount;
    }
}
