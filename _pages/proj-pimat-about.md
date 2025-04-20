---
layout: gridlay
title: "Explore the project"
sitemap: false
permalink: /proj-pimat-about/
---
 

<table style="width: 100%; border-collapse: collapse; text-align: left;">
	<tr>
        <th style="border: 1px solid black; padding: 8px;">Project Name</th>
        <td style="border: 1px solid black; padding: 8px;">Processing-in-Memory Accelerators for Transformers</td>
    </tr>
    <tr>
        <th style="border: 1px solid black; padding: 8px;">Project Acronym</th>
        <td style="border: 1px solid black; padding: 8px;">PIMAT</td>
    </tr>
    <tr>
        <th style="border: 1px solid black; padding: 8px;">Project Coordinator </th>
        <td style="border: 1px solid black; padding: 8px;">Dr. Esteban Garzón</td>
    </tr>
    <tr>
        <th style="border: 1px solid black; padding: 8px;">Project Start Date</th>
        <td style="border: 1px solid black; padding: 8px;">15/04/2025</td>
    </tr>
    <tr>
        <th style="border: 1px solid black; padding: 8px;">Budget</th>
        <td style="border: 1px solid black; padding: 8px;">€ 249.625,00 </td>
    </tr>
</table>

## Motivation and Overview

The European Union (EU) emphasizes the importance of advancing **hardware innovation** to strengthen its technological leadership, as highlighted by the "European Chips Act" and substantial financial investments in the semiconductor supply chain. These efforts are aimed at advancing fields such as **artificial intelligence (AI)**, edge computing, and other data-intensive applications. **Neural network (NN) architectures**, particularly transformer kernels, are central to AI development, from processing sequential data for natural language tasks to computer vision tasks. However, the quadratic self-attention mechanism (closely related to **matrix-vector multiplications**) of transformers places high demands on both computation and memory, as seen in large language models (LLMs) like GPT-3, which requires trillions of operations and vast datasets, leading to **considerable carbon emissions**. This **enormous volume of data** is processed during **training and inference** overwhelming current data center infrastructures. Moreover, the cost of training and inference for AI-based technology is expected to escalate, with model parameters doubling at a rapid pace. The **"memory wall"** problem—related to memory bandwidth and access speed—highlights the limitations of traditional von Neumann architectures in handling such tasks. Adopting the **processing-in-memory (PIM)** approach could address these challenges, enabling more energy-efficient and **sustainable AI computing**.


This project, titled PIM-based Accelerators for Transformers (**PIMAT**), aims to break down the aforementioned computational barriers by using optimized algorithm-hardware co-design using key memory technologies and paradigms (i.e., processing-in-memory). Memory technolgies include **content-addressable memories, associative processors, emerging memory technologies** (CMOS-memories are the fallback alternative). The main objectives of this project is to:
- Develop **hardware-aware algorithms** to optimize transformer computations (e.g., matrix-vector multiplications).
- Hardware-aware design properly tailored to allow **massively parallel in-memory computation** for data-intensive workloads.
- Optimize PIMAT for cutting-edge CMOS process.