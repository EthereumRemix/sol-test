// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;
import "remix_tests.sol"; // this import is automatically injected by Remix.
import "hardhat/console.sol";
import "../../contracts/custom/mainnet_ens.sol";

contract ENSResolverTest {
    function testResolvedAddress () public {
        console.log("Running ens address resolve for vitalik.eth");
        MyResolver ensResolver = new MyResolver();
        Assert.equal(ensResolver.resolve(), 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045, "Resolved incorrect address");
    }
}
