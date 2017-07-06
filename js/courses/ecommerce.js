//eCommerce Content:

var ecomChap1 = ["Dimensions of Digital Value Chains",
"eBusiness Categories",
"eCommerce vs eBusiness",
"mCommerce",
"eCommerce Customer Journey",
"Physical Value Chain",
"Digital Value Chains",
"Added Value of Digital Value Chains",
"Classical Supply Chain",
"Value Networks",
"Disintermediation vs Reintermediation",
"Horizontal vs Vertical Marketplaces",
"Agora Business Web",
"Aggregator Business Web",
"Integrator Business Web",
"Alliance Business Web",
"Distributor Business Web"];

var ecomChap2 = ["Business Model vs Plan vs Case",
"Business Model Examples",
"Value Proposition and Revenue Model Examples",
"Business Model Canvas (Overview)",
"Customer Segments",
"Value Proposition",
"Channels",
"Customer Relationships",
"Revenue Streams",
"Key Resources",
"Key Activities",
"Key Partnerships",
"Cost Structures",
"9 Building Block Canvas",
"Business Model Patterns",
"Unbundling Business Models (Pattern #1)",
"Long Tail Business Models (Pattern #2)",
"Multi-sided Platforms (Pattern #3)",
"Free Business Models (Pattern #4)"];

var ecomChap3 = ["Two and Three-Tier-Architectures",
"N-Tier-Architectures",
"Pre-Web and Web Era",
"Blade Systems",
"Centralized vs Distributed Server Architectures",
"Vertical Scaling",
"Horizontal Scaling",
"Capacity Planning",
"Baseline Measurements",
"System Metrics and Load Balancing",
"eBay example",
"Vertical and Horizontal Attributes",
"Scalability Factor",
"Benefits of Load Balancing",
"DNS-based Load Balancing",
"Layer-4-Switching",
"Content Switching",
"Load Balancing Algorithms",
"Cloud Computing Definition",
"Cloud Service Models",
"Five Attributes of Cloud Computing",
"Cloud Deployment Models",
"Supply-Side Economics of Scale",
"Demand-Side Economics of Scale",
"Economics of Scale",
"Virtualization Types",
"Hypervisors",
"Infrastructure as a Service (AWS)"];

var ecomChap4 = ["Features of the WWW",
"Web 1.0, 2.0, 3.0",
"XML",
"HTML",
"HTTP Get and Post",
"HTML 5",
"CSS",
"Dynamic Web Pages",
"Client-side Programming",
"Scripting Languages and JavaScript",
"JavaScript Basics",
"AJAX and DOM",
"Ajax Basics",
"Application Programs",
"Common Gateway Interface",
"Server Pages",
"PHP",
"Servlets and Java Server Pages",
"Basic Backend Architecture",
"Model-View-Controller",
"Attracting Customers",
"Engaging Customers",
"Increasing Average Order Value",
"Moment of Purchase",
"Customer Retention",
"Loyalty and Advocacy"];

var ecomChap5 = ["Drivers of eCommerce Security Problems",
"Unintentional Threads vs Intentional Attacks",
"Network-level Security vs Application-level Security",
"Firewalls",
"Application-Level Gateways",
"Firewalls vs Gateways",
"Stateful Packet Filter Gateway",
"Demilitarized Zones",
"Intrusion Detection Systems",
"Application-level Security",
"Key Concepts",
"Symmetric Encryption",
"Asymmetric Encryption",
"RSA",
"Digital Signing /Digital Signature / Digital Certificates",
"Certification Authority and Other PKI Components",
"Certification Networks",
"Certification Paths",
"Secure Socket Layer"];

var ecomChap6 = ["ePayment",
"Payment Cards",
"eCash/Digital Cash",
"Smart Cards",
"eWallets/Digital Wallets",
"Successful ePayment System",
"Types and Card Processing Overview",
"Actors and Stakeholders",
"Authorization",
"Clearing and Settelment",
"Additional Actors for Online Transactions",
"Options for the Payment Card Value Chain",
"Payment Card Risks",
"Mechanism for Preventing Payment Card Fraud",
"eCash - Requirements and Challenges",
"eCash - Money Flows",
"eCash - Blind Signatures",
"eCash - Offline Systems"];

var ecomChap7 = ["Basic Approach",
"Bitcoi Overview",
"Transactions as Double-Entry Bookkeeping",
"A Chain of Transactions",
"Comon Transactions Forms",
"Bloack Depth and Height",
"Elliptic Curve Multiplication for Creation of Public/Private Key Pairs",
"Creation of Bitcoin Adresses",
"Nondeterministic Wallets",
"Deterministic Wallets",
"Mnemonic Code Words",
"Paper Wallets",
"Transactions - Overview",
"Struture of a Transaction",
"Script Construction",
"Node Types",
"Initial Handshake between Peers",
"Adress Propagation and Discovery",
"Full Nodes",
"Getting the Blockchain",
"Lightweight SPV Nodes & Simple Payment Verification",
"Getting Block Headers",
"Bloom Filters",
"How SPV Nodes Validate Transactions",
"Structure of Blocks",
"Chaining Blocks",
"The Genesis Block",
"Merkle Trees",
"Mining & Rewards",
"Coinbase and Generation Transactions",
"Emergent Consensus",
"Verification of Transactions",
"Mining Blocks",
"Proof-of-Work",
"Adjusting Difficulty",
"Verification of Blocks",
"Assembling & Selectiong Chains of Blocks",
"Blockchain Forks"];

var ecomChap8 = ["Publishers and Advertisers",
"Ad Agencias and Ad Networks",
"Online Ad Exchanges",
"Demand-side and Supplu-side Platforms",
"Targeted Advertising - Overview",
"Targeting Categories",
"Pricing Models",
"Making HTTP Stateful",
"Cookies - Motivation",
"Cookies - Attributes",
"Cookie Types",
"Cookie - Lifecycle",
"3rd Party Cookies",
"Recommender Systems",
"RS - Problem Statement",
"Conted-based Recommendations",
"Collaborative Filtering",
"Knowlage-based Recommendations",
"Hyrbrid Approach",
"Comparison of Recommender Aproach",
"Content-based Recommendations"];


var ecomStacks = [];
ecomStacks.push({"title" : "eCommerce and Digital Value Chains", "cards" : ecomChap1});
ecomStacks.push({"title" : "eCommerce Business Models", "cards" : ecomChap2});
ecomStacks.push({"title" : "Infrastructures for eCommerce", "cards" : ecomChap3});
ecomStacks.push({"title" : "eCommerce Web Applications", "cards" : ecomChap4});
ecomStacks.push({"title" : "eCommerce Security", "cards" : ecomChap5});
ecomStacks.push({"title" : "Electronic Payment", "cards" : ecomChap6});
ecomStacks.push({"title" : "Bitcoin", "cards" : ecomChap7});
ecomStacks.push({"title" : "Online Advertising, Marketing and Targeting", "cards" : ecomChap8});

addCourse("eCommerce","eCom",ecomStacks);