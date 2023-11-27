// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Voting {
    address public owner;
    string[] public candidates;
    mapping(string => uint256) public votes;

    // event Voted(address indexed voter, string candidate);

    // modifier onlyOwner() {
    //     require(msg.sender == owner, "Only the owner can call this function");
    //     _;
    // }

    constructor(string[] memory _candidates) {
        owner = msg.sender;
        candidates = _candidates;

        // Initialize votes to zero for each candidate
        for (uint256 i = 0; i < candidates.length; i++) {
            votes[candidates[i]] = 0;
        }
    }

    function vote(string memory candidate) external {
        // require(isValidCandidate(candidate), "Invalid candidate");

        votes[candidate]++;
        // emit Voted(msg.sender, candidate);
    }

    function getTotalVotes(string memory candidate) external view returns (uint256) {
        // require(isValidCandidate(candidate), "Invalid candidate");
        return votes[candidate];
    }
}