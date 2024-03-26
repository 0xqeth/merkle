const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const web3 = require('web3');

// 假设这是你想进行空投的地址列表及其对应的空投数额
const allocations = [
  { address: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'},
  { address: '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2'},
];

// 使用keccak256哈希函数对每个地址及其空投数额进行哈希处理
const leafNodes = allocations.map(x => keccak256(x.address));

console.log(leafNodes)
// 创建Merkle树
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

// 获取Merkle根
const rootHash = '0x' + merkleTree.getRoot().toString('hex');

console.log('Merkle Root:', rootHash);

console.log(leafNodes.length)

// 为了创建证明（例如，对第一个分配的证明）
const proof1 = merkleTree.getHexProof(leafNodes[0]);

console.log('Proof for 1', proof1);

const proof2 = merkleTree.getHexProof(leafNodes[1]);

console.log('Proof for 2', proof2);

// const proof3 = merkleTree.getHexProof(leafNodes[2]);

// console.log('Proof for 3', proof3);

// const proof4 = merkleTree.getHexProof(leafNodes[3]);

// console.log('Proof for 4', proof4);

// ["0x88759a028acd5175f4208ce480bbc7fe9ffed84ef82772d0dc2a977a8e50b247","0xb613e56cc4b8aa306d936cf1064d5ae96af300db32697b1b6c12d2cc5b480835"]