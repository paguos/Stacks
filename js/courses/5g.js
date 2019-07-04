var fiveG01 = [
    "What is convergence? Give an educated exemple of convergence",
    "What are the benefits of convergence?",
    "What are the opportunities brought by convergence?",
    "What are the main limitations of convergence?",
    "Which services have already converged in a telecom network?",
    "Which networks have alreayd converged in a telecommunication system?",
    "What are the next networks supposed to converge?",
    "Which are the main characteristics of a carrier grade network?",
    "Which are characteristics of carrier-grade networks?",
    "What does „4-nines“ mean?"
];

var fiveG02 = [
    "What are the main 5G use cases proposed by NGMN? What are the new business models in 5G?",
    "What are the main values that 5G aims to create? What are the main requirements directions for 5G?",
    "Name 3 design principles of 5G for radio, network or operations and management?",
    "Which is the 5G high level architecture?",
    "What does the EPC integrate with? Name 3 functions which are part of the rest of the operator functionality (beyond EPC)",
    "Name some 5G key technological challenges from 5G PPP view. Name some 5G research directions",
    "5G is a heterogeneous radio environment. Name some functionality needed to support it.",
    "Which are the types of accesses which dock to the 5G convergent core network? What a re the convergent core network features?",
    "What should be the functionality for edge networks, cognitive management systems, robustness and security, device connectivity, application support?",
    "What should be done to integrate satellite networks or autonomous backhaul?",
    "What is needed to migrate a function to an NF environment?",
    "What are the main NFV architectural principles?",
    "What is reliability, at which level should it be ensured?",
    "What is a network model (functional definition)?"
];

var fiveG03 = [
    "What is network slicing? Why is network slicing needed?",
    "What is cloud computing?",
    "What are the cloud computing service models?",
    "What are the benefits of cloud computing?",
    "What is elasticity?",
    "What are the scalability approaches?",
    "Name the differences between stateful and stateless applications",
    "What is a network function?",
    "What are the three stages of the virtual network function evolution? (Slide 30)",
    "Please explain server virtualization",
    "What are the benefits of virtualization?",
    "What is Network Function Virtualization? What is the NFV architecture approach",
    "What is the micro-service architecture?",
    "Name some of the benefits of NFV",
    "Describe the high level framework and the architecture of ETSI NFV",
    "Which are the deployment models for VNFc",
    "Please compare stateless and stateful VNFs",
    "What is elasticity? Which are the elasticity options?",
    "Describer the load balancing models in the NFV environment",
    "What are the challenges of dynamic scaling?",
    "Please describe the auto-scaling pipeline",
    "What is Fault Management? How does fault management function in an NFV environment?",
    "Please describe the MANO domain of ETSI NFV",
    "Please describe the NFVI domain of ETSI NFV",
    "Please describe the VNF life-cycle management",
    "Why do 5G systems need an orchestrator?",
    "What are the two approaches 5G could take in regard to orchestration?",
    "What is a network function?",
    "What is needed to migrate an NF to a virtualized environment?",
    "Where should the reliability be ensured and why?",
    "At which level can an NFV environment be benchmarked?"
];

var fiveG04 = [
    "What are the main architectural changes with SDN?",
    "Which are the SDN planes? Which functionality is placed at each layer?",
    "What are the main advantages of SDN?",
    "What is OpenFlow? What are the basic components of OpenFlow?",
    "Describe OpenFlow tables and processing",
    "What does an OpenFlow entry table include?",
    "Name at least one of the OpenFlow implementation options",
    "What is the OpenFlow Controller? How does it function?",
    "How does the controller-to-controller interface function?",
    "How does the OpenFlow management plane function?",
    "How can be an OpenFlow controller be programmed?",
    "Please describe the main SDN applications",
    "Which the position of SDN in NFV?",
    "What is Service Function Chaining?"
];

var fiveG05 = [
    "What are the key communication changes with 5G?",
    "What are the main advantages of the 5G evolution?",
    "How is seen the 5G system from a network functions perspective?",
    "Why use a 5G system instead of a 4G one?",
    "Describe the high level functionality of a 5G system.",
    "What are the key 5G network principles?",
    "Describe the network functions (AMF, SMF, etc.)",
    "How is session continuity achieved in 5G?",
    "How is QoS achieved in 5G?",
    "NAS, NG-AP and GTP-U short description",
    "State modes for UE and AMF",
    "Describe the integration of non-3GPP accesses",
    "What is the Service Based Architecture?",
    "Compare the service based architecture with the classic architecture",
    "What are the Service Based Architecture specific network functions? Please describe them",
    "What APIs NEF exposes?",
    "What are the interactions between network functions (services) in SBA?",
    "Describe SMS and location services",
    "Describe the NB-IoT architecture and message exchange",
    "Describe the network slice as a service and the network slice instance management",
    "Describe the coordination between 5G and network management",
    "Describe the RAN flexibility of 5G, which other accesses can be integrated, how does the integration look like for each?"
];

var fiveG06 = [
    "Describe the interactions between network functions in the 5G core network procedures",
    "What are the three major use case classes in 5G? Please describe the 5G use case triangle",
    "What is the role of multi-slicing in 5G?",
    "What are the models for edge intelligence? Please describe them.",
    "Please describe the architecture for one of the use cases e.g. Edge intelligence, Smart office, Working in unreliable environments, etc. "
];

var fiveG07 = [
    "What are some R&D steps which can not be missed for innovation results? ",
    "Why using hands-on toolkits?",
    "What is the difference between toolkits and products?",
    "What is early research (in telecom)?",
    "What arte the characteristics of a realistic testbed?",
    "What is a network model?",
    "What is a proof of concept? Please give an example",
    "What is functional testing? Please give an example",
    "What is interoperability testing? Please give an example",
    "Give an example of benchmarking"
];

var fiveGStacks = [];
fiveGStacks.push({"title" : "Network Convergence", "cards" : fiveG01});
fiveGStacks.push({"title" : "Use Cases", "cards" : fiveG02});
fiveGStacks.push({"title" : "Virtualization", "cards" : fiveG03});
fiveGStacks.push({"title" : "SDN", "cards" : fiveG04});
fiveGStacks.push({"title" : "Architecture 1", "cards" : fiveG05});
fiveGStacks.push({"title" : "Architecture 2" , "cards" : fiveG06});
fiveGStacks.push({"title" : "Research", "cards" : fiveG07});

addCourse("5G", "5G" ,fiveGStacks);