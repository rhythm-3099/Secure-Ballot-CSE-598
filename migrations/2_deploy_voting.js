const Voting = artifacts.require('Voting');

module.exports = function (deployer) {
  // Command Truffle to deploy the Smart Contract
  const candidateNames = ['Sanat', 'Aniket', 'Mandar', 'Akshay'];
  deployer.deploy(Voting, candidateNames);
};
