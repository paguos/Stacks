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
    "Replication",
    "Synchronous Replication",
    "Asynchronous Replication",
    "Update Everywhere",
    "Primary Copy",
    "Synchronous / Update Everywhere",
    "Synchronous / Primary Copy",
    "Quorums",
    "Ideal and Practical scenarios",
    "Properties",
    "Eventual Consistency",
    "Sharing"
];

var ec03 = [
    "AWS Dynamo - eCommerce needs",
    "AWS Dynamo - Data replication",
    "AWS Dynamo - Conflict Resolution",
    "AWS Dynamo - Techniques",
    "AWS Dynamo - Dynamo System Interface - Consistent Hashing",
    "AWS Dynamo - Data versioning - Vector Clocks",
    "AWS Dynamo - Sloppy Quorum and hinted handoff",
    "AWS Dynamo - Replica synchronization Merkle Trees",
    "AWS Dynamo - Gossip-based protocol and failure detection",
    "Google Filesystem (GFS)",
    "GFS - Requirements and assumptions",
    "GFS - Interface",
    "GFS - Architecture",
    "GFS - Client/ GFS Interaction",
    "GFS - Single master",
    "GFS - Chunk Size",
    "GFS - Metadata",
    "GFS - Operation Log",
    "GFS - Data Mutations",
    "GFS - Consistency Model",
    "GFS - Implications of Loose Data Consistency for Applications",
    "GFS - Leases and Mutation Order",
    "GFS - Atomic Records Append",
    "GFS - Failure Handling During Updates",
    "GFS - Non-Identical Replicas",
    "GFS - Further Issues",
    "GFS - Master Replication",
    "GFS - Data Integrity"
];

var ec04 = [
    "Requirements",
    "Key Questions",
    "Benchmarking vs Monitoring",
    "Building Block of Benchmarks",
    "ACID TP Systems",
    "ACID - Performance benchmarking",
    "ACID - TPC Benchmarks",
    "Cloud benchmarking - Recommendations",
    "Cloud benchmarking - Generic IaaS benchmarking architecture",
    "Cloud benchmarking - Experiment Setup and Runtime",
    "Cloud benchmarking - Elastic Lab",
    "BASE TP Systems",
    "BASE - Consistency benchmarking",
    "BASE - Security-Performance benchmarking",
    "BASE - Cost tracking for cloud services"
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
ecStacks.push({"title" : "BASE_2", "cards" : ec03});
ecStacks.push({"title" : "Benchmarking", "cards" : ec04});
ecStacks.push({"title" : "SALT_1", "cards" : ec05});
ecStacks.push({"title" : "SALT_2", "cards" : ec06});
ecStacks.push({"title" : "Ethereum Hands On", "cards" : ec07});

addCourse("Enterprise Computing", "EC" ,ecStacks);