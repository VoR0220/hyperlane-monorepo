/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernanceRouter,
  GovernanceRouterInterface,
} from "../GovernanceRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_recoveryTimelock",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recoveryManager",
        type: "address",
      },
    ],
    name: "ExitRecovery",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recoveryManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
    ],
    name: "InitiateRecovery",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "previousRouter",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRouter",
        type: "bytes32",
      },
    ],
    name: "SetRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "previousGovernorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "newGovernorDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "previousGovernor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "TransferGovernor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousRecoveryManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newRecoveryManager",
        type: "address",
      },
    ],
    name: "TransferRecoveryManager",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callLocal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callRemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "domains",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exitRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governorDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "inRecovery",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recoveryManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initiateRecoveryTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recoveryActiveAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recoveryManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recoveryTimelock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "routers",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouterLocal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_newDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address",
      },
    ],
    name: "transferGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newRecoveryManager",
        type: "address",
      },
    ],
    name: "transferRecoveryManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract XAppConnectionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200395338038062003953833981016040819052620000349162000050565b60e09190911b6001600160e01b03191660805260a05262000087565b6000806040838503121562000063578182fd5b825163ffffffff8116811462000077578283fd5b6020939093015192949293505050565b60805160e01c60a051613891620000c2600039806104a45280610f6352508061081d528061088e5280610f875280611aa552506138916000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806356d5d475116100d8578063db2021ae1161008c578063e6b3d94911610066578063e6b3d949146102a1578063e8c6f83a146102b4578063f05151df146102c757610177565b8063db2021ae1461027e578063de314b1914610291578063e54292981461029957610177565b806366cf8fab116100bd57806366cf8fab1461025b578063670a43c41461026e5780638d3638f41461027657610177565b806356d5d4751461024057806363706be31461025357610177565b806341bdc8b51161012f578063485cc95511610114578063485cc955146102055780634fedbbb5146102185780635585416c1461022b57610177565b806341bdc8b5146101df5780634626abee146101f257610177565b80632ead72f6116101605780632ead72f6146101af578063316c92b6146101cf5780633339df96146101d757610177565b80630c340a241461017c5780630ce219951461019a575b600080fd5b6101846102dc565b60405161019191906132fc565b60405180910390f35b6101ad6101a8366004613194565b6102f8565b005b6101c26101bd3660046130ec565b6103c2565b6040516101919190613328565b6101ad6103d4565b610184610522565b6101ad6101ed366004613004565b61053e565b6101ad610200366004613058565b610638565b6101ad610213366004613020565b610733565b6101ad610226366004613141565b6109c5565b610233610b8d565b604051610191919061359a565b6101ad61024e3660046131bf565b610bb1565b6101ad610e44565b6102336102693660046130d4565b610f27565b6101c2610f61565b610233610f85565b6101ad61028c366004613124565b610fa9565b610184611082565b6101c261109e565b6101ad6102af366004613004565b6110a4565b6101ad6102c2366004613194565b611183565b6102cf611234565b604051610191919061331d565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b610300611234565b6103635760035473ffffffffffffffffffffffffffffffffffffffff16331461035e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613376565b60405180910390fd5b6103b4565b60025473ffffffffffffffffffffffffffffffffffffffff1633146103b4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610355906134f5565b6103be8282611255565b5050565b60056020526000908152604090205481565b6103dc611234565b15610413576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613450565b60025473ffffffffffffffffffffffffffffffffffffffff163314610464576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610355906134f5565b6001541561049e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613487565b6104c8427f00000000000000000000000000000000000000000000000000000000000000006112e6565b600181905560025460405173ffffffffffffffffffffffffffffffffffffffff909116917f4c75781638d2c3a22c08e1295107f831b97683d017a1145733b743479a2ae225916105189190613328565b60405180910390a2565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b610546611234565b6105a05760035473ffffffffffffffffffffffffffffffffffffffff16331461059b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613376565b6105f1565b60025473ffffffffffffffffffffffffffffffffffffffff1633146105f1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610355906134f5565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610640611234565b61069a5760035473ffffffffffffffffffffffffffffffffffffffff163314610695576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613376565b6106eb565b60025473ffffffffffffffffffffffffffffffffffffffff1633146106eb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610355906134f5565b60005b8181101561072e5761072583838381811061070557fe5b90506020028101906107179190613627565b610720906136de565b611363565b506001016106ee565b505050565b600054610100900460ff168061074c575061074c611426565b8061075a575060005460ff16155b6107af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061376c602e913960400191505060405180910390fd5b600054610100900460ff1615801561081557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b3360016108437f00000000000000000000000000000000000000000000000000000000000000008383611437565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861617905561088c8561053e565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638d3638f46040518163ffffffff1660e01b815260040160206040518083038186803b15801561091b57600080fd5b505afa15801561092f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109539190613108565b63ffffffff1614610990576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610355906133e4565b5050801561072e57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055505050565b60035473ffffffffffffffffffffffffffffffffffffffff163314610a16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613376565b610a1e611234565b15610a55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613450565b6000610a608461152e565b90506000610a76610a71848661367e565b611580565b9050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ae057600080fd5b505afa158015610af4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1891906130b8565b73ffffffffffffffffffffffffffffffffffffffff1663d34686398684846040518463ffffffff1660e01b8152600401610b54939291906135ab565b600060405180830381600087803b158015610b6e57600080fd5b505af1158015610b82573d6000803e3d6000fd5b505050505050505050565b60035474010000000000000000000000000000000000000000900463ffffffff1681565b600480546040517f5190bc5300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911691635190bc5391610c06913391016132fc565b60206040518083038186803b158015610c1e57600080fd5b505afa158015610c32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c569190613098565b610c8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613419565b8282610c988282611755565b610cce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610355906133ad565b6000610cda84826117a2565b9050610d077fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082166117c6565b15610d4457610d3f610d3a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611821565b61186f565b610e3c565b610d6f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216611908565b15610da757610d3f610da27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611966565b611980565b610dd27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216611a0b565b15610e0a57610d3f610e057fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611a14565b611a2e565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613563565b505050505050565b60025473ffffffffffffffffffffffffffffffffffffffff163314610e95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610355906134f5565b600154610ece576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103559061333f565b60006001556002546040517f5397c02652a688dd1cac8544f233b3daaf96d7a9f974af80b70ab1538359e26191610f1d9173ffffffffffffffffffffffffffffffffffffffff909116906132fc565b60405180910390a1565b60068181548110610f3757600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60035473ffffffffffffffffffffffffffffffffffffffff163314610ffa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613376565b611002611234565b15611039576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613450565b600061104483611aa3565b9050611051838383611437565b801561105d57506103be565b60006110718461106c85611ad2565b611aeb565b905061107c81611b18565b50505050565b60025473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60025473ffffffffffffffffffffffffffffffffffffffff1633146110f5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610355906134f5565b60025460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f3b3f758030fa296b85e15008f79cd22af8ffd2a7dd360d8963dcaf8e9fa2b5ff90600090a3600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60035473ffffffffffffffffffffffffffffffffffffffff1633146111d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613376565b6111dc611234565b15611213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590613450565b61121d8282611255565b60006112298383611d10565b905061072e81611b18565b60015460009080158015904283111590829061124d5750805b935050505090565b63ffffffff8216600081815260056020526040908190205490519091907fe1cc453e5e6d48a5e3dd7dc6c72117211d2bea20fbb91fd980ebc3e7f73fe546906112a19084908690613331565b60405180910390a2816112bd576112b783611d38565b506103be565b806112cb576112cb83611ddf565b5063ffffffff91909116600090815260056020526040902055565b60008282018381101561135a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b606060006113748360000151611e3f565b905060008173ffffffffffffffffffffffffffffffffffffffff1684602001516040516113a19190613254565b6000604051808303816000865af19150503d80600081146113de576040519150601f19603f3d011682016040523d82523d6000602084013e6113e3565b606091505b50935090508061141f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610355906134be565b5050919050565b600061143130611e42565b15905090565b80611447576114458361152e565b505b600081611455576000611457565b825b600380547fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000063ffffffff8881168202929092177fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff858116918217948590556040519596509094908416937f4daaa39e87dee84708195369c30e97baa0665dc8562ac10535a0f3a9329943aa936115209390910416908990613610565b60405180910390a350505050565b63ffffffff81166000908152600560205260409020548061157b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103559061352c565b919050565b805160609060006002820167ffffffffffffffff811180156115a157600080fd5b506040519080825280602002602001820160405280156115cb578160200160208202803683370190505b509050611619600060016040516020016115e59190613270565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052906117a2565b8160008151811061162657fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000090921660209283029190910182015260405161166c916000916115e5918691016132cc565b8160018151811061167957fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009092166020928302919091019091015260005b828110156117435760008582815181106116c357fe5b6020026020010151905060006116f66000836000015184602001515185602001516040516020016115e593929190613227565b90508084600285018151811061170857fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009092166020928302919091019091015250506001016116ad565b5061174d81611e48565b949350505050565b60035460009063ffffffff848116740100000000000000000000000000000000000000009092041614801561135a57505063ffffffff919091166000908152600560205260409020541490565b8151600090602084016117bd64ffffffffff85168284611e98565b95945050505050565b600060016117d383611ef9565b60ff1614801561135d5750604061180b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611f29565b6bffffffffffffffffffffffff16101592915050565b600061182c826117c6565b156118675761186060015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000841690611f3d565b905061157b565b61135d611f63565b8060016118a0815b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000841690611f87565b5060006118ce7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516612107565b905060005b8151811015611901576118f88282815181106118eb57fe5b6020026020010151611363565b506001016118d3565b5050505050565b600060025b60ff1661191983611ef9565b60ff1614801561135d575060256119517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611f29565b6bffffffffffffffffffffffff161492915050565b600061197182611908565b15611867576118606002611837565b80600261198c81611877565b5060006119ba7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000085166122aa565b905060006119f16119ec7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000087166122db565b611e3f565b905060006119fe83611aa3565b9050610e3c838383611437565b6000600361190d565b6000611a1f82611a0b565b15611867576118606003611837565b806003611a3a81611877565b506000611a687fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000085166122aa565b90506000611a977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000086166122db565b90506119018282611255565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff90811691161490565b73ffffffffffffffffffffffffffffffffffffffff1690565b606061135a611b13611b0e6000600287876040516020016115e593929190613285565b61230c565b612341565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b815260040160206040518083038186803b158015611b8257600080fd5b505afa158015611b96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bba91906130b8565b905060005b60065481101561072e57600063ffffffff1660068281548110611bde57fe5b6000918252602090912060088204015460079091166004026101000a900463ffffffff1614611d08578173ffffffffffffffffffffffffffffffffffffffff1663d346863960068381548110611c3057fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff166005600060068681548110611c6757fe5b6000918252602080832060088304015463ffffffff6004600790941684026101000a909104168452830193909352604091820190205490517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152611cd593928991016135ab565b600060405180830381600087803b158015611cef57600080fd5b505af1158015611d03573d6000803e3d6000fd5b505050505b600101611bbf565b606061135a611b13611d336000600387876040516020016115e593929190613285565b612385565b63ffffffff811660009081526005602052604081208190555b6006548110156103be578163ffffffff1660068281548110611d6f57fe5b6000918252602090912060088204015460079091166004026101000a900463ffffffff161415611dd45760068181548110611da657fe5b90600052602060002090600891828204019190066004026101000a81549063ffffffff021916905550611ddc565b600101611d51565b50565b600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f6008820401805460079092166004026101000a63ffffffff818102199093169390921691909102919091179055565b90565b3b151590565b6040516060906000611e5d8460208401612393565b90506000611e6a82611f29565b6bffffffffffffffffffffffff1690506000611e858361240b565b9184525082016020016040525092915050565b600080611ea5848461241f565b9050604051811115611eb5575060005b80611ee3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611ef2565b611eee858585612491565b9150505b9392505050565b600061135d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083168260016124a4565b60181c6bffffffffffffffffffffffff1690565b60d81b7affffffffffffffffffffffffffffffffffffffffffffffffffffff9091161790565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000090565b6000611f9383836124c5565b612100576000611fb1611fa5856124e7565b64ffffffffff166124ed565b9150506000611fc68464ffffffffff166124ed565b604080517f5479706520617373657274696f6e206661696c65642e20476f742030780000006020808301919091527fffffffffffffffffffff0000000000000000000000000000000000000000000060b088811b8216603d8501527f2e20457870656374656420307800000000000000000000000000000000000000604785015285901b1660548301528251603e818403018152605e8301938490527f08c379a000000000000000000000000000000000000000000000000000000000909352606282018181528351608284015283519496509294508493839260a2019185019080838360005b838110156120c55781810151838201526020016120ad565b50505050905090810190601f1680156120f25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5090919050565b606060006121397fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000084166001806124a4565b905060006121aa60028061216e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611f29565b6bffffffffffffffffffffffff160360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000088169291906125c1565b905060008260ff1667ffffffffffffffff811180156121c857600080fd5b5060405190808252806020026020018201604052801561220257816020015b6121ef612eb8565b8152602001906001900390816121e75790505b50905060005b60006122357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611f29565b6bffffffffffffffffffffffff1611156122a15761225283612651565b82828151811061225e57fe5b60209081029190910101515261227383612681565b82828151811061227f57fe5b602002602001015160200181905250612297836126c0565b9250600101612208565b50949350505050565b600061135d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600160046124a4565b600061135d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166005602061274b565b600061135d61231a83611966565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000166128b9565b606060008061234f84611f29565b6bffffffffffffffffffffffff16905060405191508192506123748483602001612933565b508181016020016040529052919050565b600061135d61231a83611a14565b6000604051828111156123a65760206060fd5b506000805b84518110156123fe5760008582815181106123c257fe5b602002602001015190506123d881848701612933565b506123e281611f29565b6bffffffffffffffffffffffff169290920191506001016123ab565b5061174d60008483612491565b600061241682612a5f565b60200292915050565b8181018281101561135d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b60008160200360080260ff166124bb85858561274b565b901c949350505050565b60008164ffffffffff166124d8846124e7565b64ffffffffff16149392505050565b60d81c90565b600080601f5b600f8160ff1611156125555760ff600882021684901c61251281612a93565b61ffff16841793508160ff1660101461252d57601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016124f3565b50600f5b60ff8160ff1610156125bb5760ff600882021684901c61257881612a93565b61ffff16831792508160ff1660001461259357601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612559565b50915091565b6000806125cd86612ac3565b6bffffffffffffffffffffffff1690506125e686612ad7565b6125fa856125f4848961241f565b9061241f565b1115612629577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000091505061174d565b612633818661241f565b90506126478364ffffffffff168286611e98565b9695505050505050565b600061135d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831682602061274b565b606061135d611b13604061269485612b01565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616919060046125c1565b60008160016126ce81611877565b5060006126da85612b01565b60400190506117bd818061270f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916611f29565b6bffffffffffffffffffffffff160360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000089169291906125c1565b600060ff821661275d57506000611ef2565b61276684611f29565b6bffffffffffffffffffffffff166127818460ff851661241f565b1115612823576127c261279385612ac3565b6bffffffffffffffffffffffff166127aa86611f29565b6bffffffffffffffffffffffff16858560ff16612b31565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482018181528351602484015283519092839260449091019190850190808383600083156120c55781810151838201526020016120ad565b60208260ff161115612880576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a81526020018061379a603a913960400191505060405180910390fd5b60088202600061288f86612ac3565b6bffffffffffffffffffffffff16905060006128aa83612c8c565b91909501511695945050505050565b60006128c482612cd5565b61292f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c656400000000000000604482015290519081900360640190fd5b5090565b600061293e83612d12565b612993576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806137d46028913960400191505060405180910390fd5b61299c83612cd5565b6129f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806137fc602b913960400191505060405180910390fd5b60006129fc84611f29565b6bffffffffffffffffffffffff1690506000612a1785612ac3565b6bffffffffffffffffffffffff1690506000604051905084811115612a3c5760206060fd5b8285848460045afa50612647612a51876124e7565b64ffffffffff168685612491565b60006020612a856020612a7185611f29565b6bffffffffffffffffffffffff169061241f565b81612a8c57fe5b0492915050565b6000612aa560048360ff16901c612d24565b60ff161760081b62ffff0016612aba82612d24565b60ff1617919050565b60781c6bffffffffffffffffffffffff1690565b6000612ae282611f29565b612aeb83612ac3565b016bffffffffffffffffffffffff169050919050565b600061135d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660208061274b565b60606000612b3e866124ed565b9150506000612b4c866124ed565b9150506000612b5a866124ed565b9150506000612b68866124ed565b915050838383836040516020018080613827603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a820152605001602161374b82397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b6000612ce0826124e7565b64ffffffffff1664ffffffffff1415612cfb5750600061157b565b6000612d0683612ad7565b60405110199392505050565b6000612d1d82612e90565b1592915050565b600060f08083179060ff82161415612d4057603091505061157b565b8060ff1660f11415612d5657603191505061157b565b8060ff1660f21415612d6c57603291505061157b565b8060ff1660f31415612d8257603391505061157b565b8060ff1660f41415612d9857603491505061157b565b8060ff1660f51415612dae57603591505061157b565b8060ff1660f61415612dc457603691505061157b565b8060ff1660f71415612dda57603791505061157b565b8060ff1660f81415612df057603891505061157b565b8060ff1660f91415612e0657603991505061157b565b8060ff1660fa1415612e1c57606191505061157b565b8060ff1660fb1415612e3257606291505061157b565b8060ff1660fc1415612e4857606391505061157b565b8060ff1660fd1415612e5e57606491505061157b565b8060ff1660fe1415612e7457606591505061157b565b8060ff1660ff1415612e8a57606691505061157b565b50919050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b60408051808201909152600081526060602082015290565b60008083601f840112612ee1578182fd5b50813567ffffffffffffffff811115612ef8578182fd5b6020830191508360208083028501011115612f1257600080fd5b9250929050565b600082601f830112612f29578081fd5b813567ffffffffffffffff811115612f3d57fe5b612f6e60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161365a565b818152846020838601011115612f82578283fd5b816020850160208301379081016020019190915292915050565b600060408284031215612fad578081fd5b6040516040810167ffffffffffffffff8282108183111715612fcb57fe5b81604052829350843583526020850135915080821115612fea57600080fd5b50612ff785828601612f19565b6020830152505092915050565b600060208284031215613015578081fd5b813561135a81613716565b60008060408385031215613032578081fd5b823561303d81613716565b9150602083013561304d81613716565b809150509250929050565b6000806020838503121561306a578182fd5b823567ffffffffffffffff811115613080578283fd5b61308c85828601612ed0565b90969095509350505050565b6000602082840312156130a9578081fd5b8151801515811461135a578182fd5b6000602082840312156130c9578081fd5b815161135a81613716565b6000602082840312156130e5578081fd5b5035919050565b6000602082840312156130fd578081fd5b813561135a81613738565b600060208284031215613119578081fd5b815161135a81613738565b60008060408385031215613136578182fd5b823561303d81613738565b600080600060408486031215613155578081fd5b833561316081613738565b9250602084013567ffffffffffffffff81111561317b578182fd5b61318786828701612ed0565b9497909650939450505050565b600080604083850312156131a6578182fd5b82356131b181613738565b946020939093013593505050565b6000806000606084860312156131d3578283fd5b83356131de81613738565b925060208401359150604084013567ffffffffffffffff811115613200578182fd5b61320c86828701612f19565b9150509250925092565b6005811061322057fe5b60f81b9052565b600084825283602083015282516132458160408501602087016136ea565b91909101604001949350505050565b600082516132668184602087016136ea565b9190910192915050565b600061327c8284613216565b50600101919050565b60006132918286613216565b5060e09290921b7fffffffff000000000000000000000000000000000000000000000000000000001660018301526005820152602501919050565b60f89190911b7fff0000000000000000000000000000000000000000000000000000000000000016815260010190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b901515815260200190565b90815260200190565b918252602082015260400190565b60208082526016908201527f7265636f76657279206e6f7420696e6974696174656400000000000000000000604082015260600190565b60208082526014908201527f212063616c6c656420627920676f7665726e6f72000000000000000000000000604082015260600190565b6020808252600f908201527f21676f7665726e6f72526f757465720000000000000000000000000000000000604082015260600190565b6020808252818101527f58417070436f6e6e656374696f6e4d616e616765722062616420646f6d61696e604082015260600190565b60208082526008908201527f217265706c696361000000000000000000000000000000000000000000000000604082015260600190565b6020808252600b908201527f696e207265636f76657279000000000000000000000000000000000000000000604082015260600190565b6020808252601a908201527f7265636f7665727920616c726561647920696e69746961746564000000000000604082015260600190565b6020808252600b908201527f63616c6c206661696c6564000000000000000000000000000000000000000000604082015260600190565b6020808252601c908201527f212063616c6c6564206279207265636f76657279206d616e6167657200000000604082015260600190565b60208082526007908201527f21726f7574657200000000000000000000000000000000000000000000000000604082015260600190565b60208082526013908201527f2176616c6964206d657373616765207479706500000000000000000000000000604082015260600190565b63ffffffff91909116815260200190565b600063ffffffff851682528360208301526060604083015282518060608401526135dc8160808501602087016136ea565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01691909101608001949350505050565b63ffffffff92831681529116602082015260400190565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1833603018112613266578182fd5b60405181810167ffffffffffffffff8111828210171561367657fe5b604052919050565b600067ffffffffffffffff83111561369257fe5b60206136a1818286020161365a565b8481528181019084845b878110156136d2576136c03683358901612f9c565b845292840192908401906001016136ab565b50909695505050505050565b600061135d3683612f9c565b60005b838110156137055781810151838201526020016136ed565b8381111561107c5750506000910152565b73ffffffffffffffffffffffffffffffffffffffff81168114611ddc57600080fd5b63ffffffff81168114611ddc57600080fdfe2e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656454797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a264697066735822122089d4f59cbd4151f339d3a1e75386bdecc074b5e5ea4af3d10543d62075266b2764736f6c63430007060033";

export class GovernanceRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    _recoveryTimelock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernanceRouter> {
    return super.deploy(
      _localDomain,
      _recoveryTimelock,
      overrides || {}
    ) as Promise<GovernanceRouter>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    _recoveryTimelock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _localDomain,
      _recoveryTimelock,
      overrides || {}
    );
  }
  attach(address: string): GovernanceRouter {
    return super.attach(address) as GovernanceRouter;
  }
  connect(signer: Signer): GovernanceRouter__factory {
    return super.connect(signer) as GovernanceRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceRouterInterface {
    return new utils.Interface(_abi) as GovernanceRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernanceRouter {
    return new Contract(address, _abi, signerOrProvider) as GovernanceRouter;
  }
}
