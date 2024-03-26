contract GD is {

    bytes32 public merkleRoot;


    constructor(bytes32 _merkleRoot) {
        merkleRoot = _merkleRoot;
    } 


    function firstStageMinting(bytes32[] calldata proof) view public onlyFirstStage(firstStageTimeStamp){
        require(MerkleProof.verify(proof, merkleRoot, keccak256((abi.encodePacked(msg.sender)))),"Not In WL");
    }
}