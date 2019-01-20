﻿import { Promise } from "q";

var BlockPoll = {
    abi: [{ "constant": true, "inputs": [{ "name": "_index", "type": "uint256" }], "name": "getPollItemFromPoll", "outputs": [{ "name": "", "type": "string" }, { "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getPollData", "outputs": [{ "name": "pollName", "type": "string" }, { "name": "creator", "type": "address" }, { "name": "active", "type": "bool" }, { "name": "totalVotes", "type": "uint256" }, { "name": "creationDate", "type": "uint256" }, { "name": "finishDate", "type": "uint256" }, { "name": "items", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "setActive", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_namePollItem", "type": "string" }], "name": "addPollItem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "closePoll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_pollItemToVote", "type": "string" }], "name": "vote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_name", "type": "string" }, { "name": "_endDate", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }],
    contractInstance: undefined,
    deployContract: function (_name, _endDate) {
        var votingContract = window.web3.eth.contract(this.abi);
        votingContract.new(
            _name,
            _endDate,
            {
                from: window.web3.eth.accounts[0],
                data: '0x60806040523480156200001157600080fd5b506040516200137938038062001379833981018060405262000037919081019062000252565b60c0604051908101604052808381526020013373ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001428152602001828152602001600015158152506000808201518160000190805190602001906200009e9291906200012f565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff021916908315150217905550905050505062000347565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017257805160ff1916838001178555620001a3565b82800160010185558215620001a3579182015b82811115620001a257825182559160200191906001019062000185565b5b509050620001b29190620001b6565b5090565b620001db91905b80821115620001d7576000816000905550600101620001bd565b5090565b90565b600082601f8301121515620001f257600080fd5b8151620002096200020382620002da565b620002ac565b915080825260208301602083018583830111156200022657600080fd5b6200023383828462000311565b50505092915050565b60006200024a825162000307565b905092915050565b600080604083850312156200026657600080fd5b600083015167ffffffffffffffff8111156200028157600080fd5b6200028f85828601620001de565b9250506020620002a2858286016200023c565b9150509250929050565b6000604051905081810181811067ffffffffffffffff82111715620002d057600080fd5b8060405250919050565b600067ffffffffffffffff821115620002f257600080fd5b601f19601f8301169050602081019050919050565b6000819050919050565b60005b838110156200033157808201518184015260208101905062000314565b8381111562000341576000848401525b50505050565b61102280620003576000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c26be3e1461007d57806348bb06cc146100bb578063760a8c2a146100ec578063a02ee90914610103578063ed8c2aed1461012c578063fc36e15b14610143575b600080fd5b34801561008957600080fd5b506100a4600480360361009f9190810190610c47565b61016c565b6040516100b2929190610e34565b60405180910390f35b3480156100c757600080fd5b506100d06102e4565b6040516100e39796959493929190610dbe565b60405180910390f35b3480156100f857600080fd5b506101016103f7565b005b34801561010f57600080fd5b5061012a60048036036101259190810190610c06565b6104f5565b005b34801561013857600080fd5b50610141610702565b005b34801561014f57600080fd5b5061016a60048036036101659190810190610c06565b6107b6565b005b60606000610178610a5a565b600660078581548110151561018957fe5b9060005260206000200160405180828054600181600116156101000203166002900480156101ee5780601f106101cc5761010080835404028352918201916101ee565b820191906000526020600020905b8154815290600101906020018083116101da575b50509150509081526020016040518091039020604080519081016040529081600082018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102a55780601f1061027a576101008083540402835291602001916102a5565b820191906000526020600020905b81548152906001019060200180831161028857829003601f168201915b505050505081526020016001820160009054906101000a900460ff1660ff1660ff16815250509050806000015181602001518191509250925050915091565b606060008060008060008060008001600060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600060050160009054906101000a900460ff16600060020154600060030154600060040154600780549050868054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103d95780601f106103ae576101008083540402835291602001916103d9565b820191906000526020600020905b8154815290600101906020018083116103bc57829003601f168201915b50505050509650965096509650965096509650965090919293949596565b600060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561048c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048390610ea4565b60405180910390fd5b600060040154421015156104d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cc90610e64565b60405180910390fd5b6001600060050160006101000a81548160ff021916908315150217905550565b6104fd610a5a565b600060050160009054906101000a900460ff1615801561056d5750600060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156105ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a590610ea4565b60405180910390fd5b600060040154421015156105f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ee90610e64565b60405180910390fd5b6040805190810160405280838152602001600060ff168152509050806006836040518082805190602001908083835b60208310151561064b5780518252602082019150602081019050602083039250610626565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020600082015181600001908051906020019061069a929190610a77565b5060208201518160010160006101000a81548160ff021916908360ff16021790555090505060078290806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906106fc929190610af7565b50505050565b600060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610797576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078e90610ea4565b60405180910390fd5b60008060050160006101000a81548160ff021916908315150217905550565b600060050160009054906101000a900460ff16151561080a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080190610e84565b60405180910390fd5b60006004015442101515610853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084a90610e64565b60405180910390fd5b60001515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415156108e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108df90610ec4565b60405180910390fd5b60016006826040518082805190602001908083835b60208310151561092257805182526020820191506020810190506020830392506108fd565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060010160009054906101000a900460ff16016006826040518082805190602001908083835b60208310151561099f578051825260208201915060208101905060208303925061097a565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060010160006101000a81548160ff021916908360ff1602179055506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060016000600201540160006002018190555050565b604080519081016040528060608152602001600060ff1681525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ab857805160ff1916838001178555610ae6565b82800160010185558215610ae6579182015b82811115610ae5578251825591602001919060010190610aca565b5b509050610af39190610b77565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b3857805160ff1916838001178555610b66565b82800160010185558215610b66579182015b82811115610b65578251825591602001919060010190610b4a565b5b509050610b739190610b77565b5090565b610b9991905b80821115610b95576000816000905550600101610b7d565b5090565b90565b600082601f8301121515610baf57600080fd5b8135610bc2610bbd82610f11565b610ee4565b91508082526020830160208301858383011115610bde57600080fd5b610be9838284610f95565b50505092915050565b6000610bfe8235610f8b565b905092915050565b600060208284031215610c1857600080fd5b600082013567ffffffffffffffff811115610c3257600080fd5b610c3e84828501610b9c565b91505092915050565b600060208284031215610c5957600080fd5b6000610c6784828501610bf2565b91505092915050565b610c7981610f48565b82525050565b610c8881610f68565b82525050565b6000610c9982610f3d565b808452610cad816020860160208601610fa4565b610cb681610fd7565b602085010191505092915050565b6000601c82527f46696e697368206461746520686173206265656e2072656163686564000000006020830152604082019050919050565b6000600a82527f4e6f7420416374697665000000000000000000000000000000000000000000006020830152604082019050919050565b6000600e82527f4e6f7420417574686f72697a65640000000000000000000000000000000000006020830152604082019050919050565b6000601582527f596f75206861766520616c726561647920766f746500000000000000000000006020830152604082019050919050565b610da981610f74565b82525050565b610db881610f7e565b82525050565b600060e0820190508181036000830152610dd8818a610c8e565b9050610de76020830189610c70565b610df46040830188610c7f565b610e016060830187610da0565b610e0e6080830186610da0565b610e1b60a0830185610da0565b610e2860c0830184610da0565b98975050505050505050565b60006040820190508181036000830152610e4e8185610c8e565b9050610e5d6020830184610daf565b9392505050565b60006020820190508181036000830152610e7d81610cc4565b9050919050565b60006020820190508181036000830152610e9d81610cfb565b9050919050565b60006020820190508181036000830152610ebd81610d32565b9050919050565b60006020820190508181036000830152610edd81610d69565b9050919050565b6000604051905081810181811067ffffffffffffffff82111715610f0757600080fd5b8060405250919050565b600067ffffffffffffffff821115610f2857600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60008115159050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610fc2578082015181840152602081019050610fa7565b83811115610fd1576000848401525b50505050565b6000601f19601f83011690509190505600a265627a7a723058207f97d1fcdbdfcb61160abda908aa1ebda96891b63253dfeb1e6ee21d3fe2c4496c6578706572696d656e74616cf50037',
                gas: '4700000'
            }, function (e, contract) {
                if (typeof contract.address !== 'undefined') {
                    window.instanceVue.contractDeployed(contract);
                }
            });
    },
    async getContract(contractAddress) {
        var contract = window.web3.eth.contract(this.abi);
        return await contract.at(contractAddress);
    },
    async addPollItem(contract, pollItemName) {
        return await new Promise(function (resolve, reject) {
            contract.addPollItem.sendTransaction(pollItemName, function (error, result) {
                if (!error) {
                    resolve(result);
                }
                else {
                    reject(error);
                }
            });
        });
    },
    async getPollData(contract) {
        return await new Promise(function (resolve, reject) {
            contract.getPollData(function (error, result) {
                if (!error) {
                    resolve(result);
                }
                else {
                    reject(error);
                }
            });
        });
    },
    async getPollItemFromPoll(contract, index) {
        return await new Promise(function (resolve, reject) {
            contract.getPollItemFromPoll(index, function (error, result) {
                if (!error) {
                    resolve(result);
                }
                else {
                    reject(error);
                }
            });
        });
    },
    async vote(contract, name) {
        return await new Promise(function (resolve, reject) {
            contract.vote(name, function (error, result) {
                if (!error) {
                    resolve(result);
                }
                else {
                    reject(error);
                }
            });
        });
    },
    async setActive(contract) {
        return await new Promise(function (resolve, reject) {
            contract.setActive(function (error, result) {
                if (!error) {
                    resolve(result);
                }
                else {
                    reject(error);
                }
            });
        });
    },
    async closePoll(contract) {
        return await new Promise(function (resolve, reject) {
            contract.closePoll(function (error, result) {
                if (!error) {
                    resolve(result);
                }
                else {
                    reject(error);
                }
            });
        });
    },
    async getTransactionReceiptMined(txHash) {
        return await new Promise(function (resolve, reject) {
            var receiptFunc = function () {
                window.web3.eth.getTransactionReceipt(txHash, function (err, res) {
                    if (res == null) {
                        setTimeout(function () { receiptFunc(); }, 500);
                    } else if (res != null) {
                        resolve(res);
                    } else if (!err) {
                        reject(err);
                    }
                });
            }
            setTimeout(function () { receiptFunc(); }, 500);
        });
    },
    parsePollData(data) {

    },
    parsePollItem(data) {

    },
    checkIfWeb3IsInWindow() {
        return typeof window.web3 !== 'undefined' ? true : false;
    }
};

export default BlockPoll;