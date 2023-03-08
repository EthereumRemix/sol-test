import "https://github.com/ensdomains/ens-contracts/blob/master/contracts/utils/NameEncoder.sol";

abstract contract ENS {
    function resolver(bytes32 node) public virtual view returns (Resolver);
}
abstract contract Resolver {
    function addr(bytes32 node) public virtual view returns (address);
}
contract MyResolver {
    // Same address for Mainet, Ropsten, Rinkerby, Gorli and other networks;
    ENS ens = ENS(0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e);
    function resolve() public view returns(address) {
        (,bytes32 node) = NameEncoder.dnsEncodeName("vitalik.eth");
        Resolver resolver = ens.resolver(node);
        return resolver.addr(node);
    }
}
