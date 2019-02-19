var ec01 = [
    "Transactions",
    "Transactions Processing Systems",
    "ACID properties",
    "Two-Phase Commit",
    "Relational Database & DBMS",
    "SQL",
    "Types of SQL Commands",
    "TP Monitors",
    "Transaction Manager"
];

var ec02 = [
    "Motivation",
    "CAP Theorem",
    "PACELC",
    "Replication",
    "Synchronous Replication",
    "Asynchronous Replication",
    "Update Everywhere",
    "Primary Copy",
    "Synchronous / Update Everywhere",
    "Synchronous / Primary Copy",
    "Quorums",
    "Ideal and Practical scenarios",
    "Base Properties",
    "Reconciliation",
    "Sharding"
];

var ec03aws = [
    "eCommerce needs",
    "Data replication",
    "Conflict Resolution",
    "Techniques",
    "Dynamo System Interface - Consistent Hashing",
    "Data versioning - Vector Clocks",
    "Sloppy Quorum and hinted handoff",
    "Replica synchronization Merkle Trees",
    "Gossip-based protocol and failure detection"
];

var ec03gfs = [
    "Google Filesystem (GFS)",
    "Requirements and assumptions",
    "Interface",
    "Architecture",
    "Client/ GFS Interaction",
    "Single master",
    "Chunk Size",
    "Metadata",
    "Operation Log",
    "Data Mutations",
    "Consistency Model",
    "Implications of Loose Data Consistency for Applications",
    "Leases and Mutation Order",
    "Atomic Records Append",
    "Failure Handling During Updates",
    "Non-Identical Replicas",
    "Further Issues",
    "Master Replication",
    "Data Integrity"
];

var ec04 = [
    "Requirements",
    "Key Questions",
    "Benchmarking vs Monitoring",
    "Building Block of Benchmarks",
    "ACID - TPC Benchmarks",
    "Cloud benchmarking - Generic IaaS benchmarking architecture",
    "Cloud benchmarking - Experiment Setup and Runtime",
    "Cloud benchmarking - Elastic Lab",
    "BASE - Benchmarks",
];

var ec05 = [
    "What is blockchain?",
    "Key Properties",
    "Perspectives",
    "Crypto Economy",
    "Decentralized database",
    "Programming Platform",
    "Shared ledger",
    "Types of blockchains",
    "Consensus",
    "The consensus problem",
    "Failures",
    "BFT Solutions"
];

var ec06 = [
    "Blockchain Systems",
    "Centralized vs Decentralized",
    "A peer-to-peer public ledger",
    "Structure of a block",
    "Solving Consensus",
    "Proof of Work",
    "PoW - Mining Puzzle",
    "PoW - Security",
    "PoW - Incentives",
    "Blockchain Forks",
    "Transaction Models",
    "Unspent Transaction Outputs (UTXO) Model",
    "Account Model",
    "Ethereum",
    "Ethereum - Smart Contracts",
    "SALT",
    "SALT - ACID",
    "SALT - BASE"
];

var ec07 = [
    "Contracts",
    "The EVM",
    "Accounts",
    "Transactions",
    "Gas",
    "Storage, Memory and the Stack",
    "Introduction Set",
    "Solidity",
    "Solidity - Source File Layout",
    "Solidity - Structure of Contract",
    "Solidity - State variables",
    "Solidity - Functions",
    "Solidity - Function Modifiers",
    "Solidity - Events",
    "Solidity - Units and Globally Available Variables",
    "Solidity - Control structures",
    "Solidity - Smart Contract ABIs",
    "Solidity - Interfacing with Smart Contracts",
    "Solidity - Web3"
];

var ecStacks = [];
ecStacks.push({"title" : "ACID", "cards" : ec01});
ecStacks.push({"title" : "BASE_1", "cards" : ec02});
ecStacks.push({"title" : "BASE_2 - AWS Dynamo", "cards" : ec03aws});
ecStacks.push({"title" : "BASE_2 - GFS", "cards" : ec03gfs});
ecStacks.push({"title" : "Benchmarking", "cards" : ec04});
ecStacks.push({"title" : "SALT_1", "cards" : ec05});
ecStacks.push({"title" : "SALT_2", "cards" : ec06});
ecStacks.push({"title" : "Ethereum Hands On", "cards" : ec07});

addCourse("Enterprise Computing", "EC" ,ecStacks);