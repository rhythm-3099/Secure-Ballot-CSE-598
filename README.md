# Secure Ballot

Social Security Based voting system using blockchain technology
Project implemented as part of our course CSE 598 (Engineering Blockchain Applications)

## Description

- The authority must login first with the provided session ID (Use username: admin and password: password for testing).
- The voter can now begin the process of voting with proper authentication through OTP(one time password) on the respective linked mobile number (use SSN: 123456789, OTP: 123456).
- the voting ballot will be opened with candidate names,their parties and logos.
- Now the voter can give his vote by clicking vote button.
- One voter can give his vote only once,i.e after one time voting buttons are disabled and the vote is automatically logged out.

### Installing and Running Project

Install Dependencies

```
npm install
```

Running Project

```
node index.js
```

If dependency problem occurs delete package.json, Run

```
npm init
```

Again Install dependencies and run project.

### Running Project

Step 1 - Setting up Environment
Instead of developing the app against the live Ethereum blockchain, we have used a local blockchain (think of it as a blockchain simulator) called ganache-cli.

```
npm install web3
```

```
npm install -g ganache-cli
```

Step 2 - Creating Voting Smart Contract

```
npm install solc
```

Step 3 - Testing in node console

Not required just for testing in node console-
After writing our smart contract, we'll use Web3js to deploy our app and interact with it

```
$ node
> Web3 = require('web3')
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
Then ensure Web3js is initalized and can query all accounts on the blockchain

> web3.eth.accounts
Lastly, compile the contract by loading the code from Voting.sol in to a string variable and compiling it

> code = fs.readFileSync('Voting.sol').toString()
> solc = require('solc')
> compiledCode = solc.compile(code)
```

Deploy the contract!

```
> abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
> VotingContract = web3.eth.contract(abiDefinition)
> byteCode = compiledCode.contracts[':Voting'].bytecode
>deployedContract = VotingContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
> deployedContract.address
> contractInstance = VotingContract.at(deployedContract.address)
```

Step 4 - Interacting with the Contract via the Nodejs Console

```
> contractInstance.totalVotesFor.call('Eddard Stark').toLocaleString()
'2'
```

### Purpose of test

- The authority login is to ensure security to prevent piracy, harassment and corruption from candidates standing in election.
- OTP generation is to authenticate the right social security number owner.
- button disabling and automatic logout is to prevent multiple voting by single candidate.

## Authors

- **Rhythm Patel**
- **Krutik Parmar**
- **Rohit Patil**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
