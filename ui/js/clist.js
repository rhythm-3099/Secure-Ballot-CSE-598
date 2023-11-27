$(document).ready(function () {
  $('.modal').modal();

  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

  abi = [
    {
      constant: false,
      inputs: [
        {
          name: 'candidate',
          type: 'string',
        },
      ],
      name: 'vote',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: 'candidate',
          type: 'string',
        },
      ],
      name: 'getTotalVotes',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'candidate',
          type: 'string',
        },
      ],
      name: 'addCandidate',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: 'candidate',
          type: 'string',
        },
      ],
      name: 'isValidCandidate',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'candidate',
          type: 'string',
        },
      ],
      name: 'addCandidate',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'voter',
          type: 'address',
        },
        {
          indexed: false,
          name: 'candidate',
          type: 'string',
        },
      ],
      name: 'Voted',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'candidates',
      outputs: [
        {
          name: '',
          type: 'string[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ];

  const contractAddress = '0x1aEb85bF0A4E29deB2ef0fb08113a3be80CE2B9D';

  contract = new web3.eth.Contract(abi, contractAddress);
  console.log('VotingContract ', contract);
  // contractInstance = VotingContract.at(
  //   '0xa7fb89a3fe6927b6d272637b148775f6fee5a8cf',
  // );
  // candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

  //check cookie
  function readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  var aadhaar_list = {
    300000000000: 'Akola',
    738253790005: 'Bhandara',
    123456789100: 'Ahmedabad',
  };

  var aadhaar = readCookie('aadhaar');

  console.log(aadhaar);
  var address = aadhaar_list[aadhaar];
  console.log(address);
  $('#loc_info').text('Location based on Aadhaar : ' + address);

  function disable() {
    $('#vote1').addClass('disabled');
    $('#vote2').addClass('disabled');
    $('#vote3').addClass('disabled');
    $('#vote4').addClass('disabled');

    //logout
    document.cookie = 'show=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC';
    document.cookie = 'aadhaar=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC';
    window.location = '/app';
  }

  $('#vote1').click(async function () {
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .vote('Sanat')
      .send({ from: accounts[0] })
      .then(() => {
        alert('vote submitted to Sanat');
        disable();
        $('#loc_info').text('Vote submited successfully to Sanat');
      })
      .catch((e) => {
        console.log({ e });
      });
  });
  $('#vote2').click(async function () {
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .vote('Aniket')
      .send({ from: accounts[0] })
      .then(() => {
        alert('vote submitted to Aniket');
        disable();
        $('#loc_info').text('Vote submited successfully to Aniket');
      });
  });
  $('#vote3').click(async function () {
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .vote('Mandar')
      .send({ from: accounts[0] })
      .then(() => {
        alert('vote submitted to Mandar');
        disable();
        $('#loc_info').text('Vote submited successfully to Mandar');
      });
  });
  $('#vote4').click(async function () {
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .vote('Akshay')
      .send({ from: accounts[0] })
      .then(() => {
        alert('vote submitted to Akshay');
        disable();
        $('#loc_info').text('Vote submited successfully to Akshay');
      });
  });
});
