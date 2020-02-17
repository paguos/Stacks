var dstStacks = [];

var dst01 = [
    "Data Pipeline",
    "Document Object Model"
];
dstStacks.push({ title: "Web Crawling", cards: dst01 });

var dst02 = [
    "Survey Medium",
    "Survey Types",
    "Empirical Research Paradigm",
    "Quantitative Methodology",
    "Survey Process",
    "Survey Process - Sample",
    "Survey Process - Research Model",
    "Survey Process - Operationalization",
    "Survey Process - Survey & Data Collection",
    "Survey Process - Data Analysis"
];
dstStacks.push({ title: "Surveys", cards: dst02 });

var dst03 = [
    "Correlation & Causality",
    "Lab vs Field Experiments",
    "Experiments - Main advantages",
    "Experiments - Issues & Limitations",
    "Induced Value Theory",
    "Recommendations for experimental design"
];
dstStacks.push({ title: "Experiments", cards: dst03 });

var dst04 = [
    "Tidy data structures",
    "Data Cleaning",
    "Wide and Format",
    "Dummy coding",
    "Outliers",
    "Standard Error",
    "t-Test",
    "Linear regression models",
    "Linear Regression Models and Variance Structure",
    "Linear Regression - Examples with R2",
    "Anscombe’s Quartet",
    "Hypothesis & Statistic Hypothesis Testing",
    "Evaluation Metrics",
    "Linear Regression - Special Cases"
];
dstStacks.push({ title: "Data, Tests, Regression", cards: dst04 });

var dst05 = [
    "Background: Network Analysis",
    "Background: Social Science",
    "Practical Applications",
    "Social Network Analysis",
    "SNA - Networks",
    "SNA - The Strength",
    "SNA - Key Players",
    "SNA - Cohesion",
    "Typical Social Network Characteristics"
];
dstStacks.push({ title: "Network Analysis", cards: dst05 });

var dst06 = [
    "dplyr: Basics",
    "Time series analysis",
    "Time series analysis - Linear filters",
    "Time series analysis - Non-Linear filters",
    "Cluster analysis",
    "Similarity",
    "Distance Measures",
    "Distance Between Clusters",
    "Cluster Algorithms",
    "Quality Assessment"
];
dstStacks.push({ title: "Filter & Clustering", cards: dst06 });

var dst07 = [
    "Explaining vs Predicting",
    "Overfitting",
    "Neural Networks",
    "Neural Networks: Forward Pass",
    "Neural Networks: Error Calculation",
    "Neural Networks: Error Minimization",
    "Neural Networks: Backward Pass",
    "Data Division",
    "Model strategies",
    "Evaluation Metrics",
    "Recipe for better ML models"
  ];
  dstStacks.push({ title: "Machine Learning", cards: dst07 });

  var dst08 = [
    "Definition of Data Visualization",
    "Data Visualization Techniques",
    "Data Visualization - Geospatial Data",
    "Data Visualization - Vernoi Diagram",
    "Data Visualization - Distribution",
    "Data Visualization - Ranking",
    "Data Visualization - Evolution",
    "Data Visualization - Correlation",
    "Data Visualization - Flow",
    "Data Visualization - Proportion",
    "Principles of Data Visualization",
    "Principles - Gestalt Theory",
    "Principles - Visual Variables",
    "Principles - Visual Asthethics",
    "Principles - Typography",
  ];
  dstStacks.push({ title: "Data Visualization", cards: dst08 });

addCourse("Data Science Toolbox", "DST", dstStacks);
