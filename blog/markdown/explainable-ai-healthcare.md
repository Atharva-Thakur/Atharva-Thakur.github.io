---
title: Making AI Explainable: Why Black Boxes Are a Problem
date: October 2024
---

When we built an AI model for early sepsis detection, accuracy wasn't enough. Doctors needed to understand *why* the model made its predictions. Here's how we made our AI explainable—and why it matters.

## The Problem with Black Boxes

Imagine a doctor receives an alert: "Patient in bed 7 has 85% risk of sepsis." The doctor's first question isn't "Is this accurate?" It's "Why? What signs is the model seeing?"

Without explanations, even highly accurate models remain unused. In healthcare, trust requires transparency.

## What is Sepsis?

Sepsis is a life-threatening condition where the body's response to infection causes tissue damage and organ failure. Early detection is crucial—every hour of delay increases mortality by 8%. But early symptoms are subtle and easily missed.

## Why Traditional ML Falls Short

Most AI models for sepsis detection are deep neural networks trained on electronic health records. They achieve impressive accuracy but operate as black boxes. Clinicians can't verify if the model is using medically sound reasoning or just finding spurious correlations.

## Our Approach: Integrating Clinical Knowledge

Instead of treating explainability as an afterthought, we built it into the model architecture:

### 1. Feature Engineering with Clinical Input

We worked with healthcare professionals to identify medically relevant features:

- Vital signs: heart rate, blood pressure, temperature, respiratory rate
- Lab values: white blood cell count, lactate levels, creatinine
- Clinical context: age, comorbidities, recent procedures

### 2. Rule-Based Baseline

We implemented the SIRS (Systemic Inflammatory Response Syndrome) criteria as a baseline. This gave us medically validated rules to compare against.

### 3. Hybrid Model Architecture

Our final model combined:

- **Rule-based component:** Implementing known clinical criteria
- **ML component:** Learning subtle patterns from data
- **Attention mechanism:** Highlighting which features drove each prediction

## Making Predictions Explainable

### SHAP Values for Feature Importance

We used SHAP (SHapley Additive exPlanations) to show each feature's contribution to a prediction. For example:

- Heart rate > 100: +0.3 risk
- Rising lactate levels: +0.25 risk
- Temperature 38.5°C: +0.15 risk
- Low blood pressure: +0.2 risk

### Temporal Attention Visualization

Sepsis develops over time. We visualized which time windows the model focused on, showing doctors when concerning patterns began.

### Counterfactual Explanations

For high-risk predictions, we generated counterfactuals: "If the patient's lactate level decreased by 2 mmol/L, the risk would drop to 40%." This helps doctors understand actionable interventions.

## Real-World Validation

We validated our approach with clinicians:

- **Clinical consistency:** 92% of explanations aligned with medical reasoning
- **Actionable insights:** Doctors could verify predictions against patient charts
- **Trust building:** Clinicians were more willing to act on explained predictions

## The Performance Trade-off

One concern with explainable AI is reduced accuracy. Our results:

- Black-box neural network: 89% accuracy, 0.87 AUROC
- Our explainable model: 87% accuracy, 0.85 AUROC

A small accuracy drop, but massive gain in usability. Doctors actually used our model.

## Challenges We Faced

### Conflicting Explanations

Sometimes the ML component learned patterns that conflicted with clinical rules. We addressed this by flagging inconsistencies for review rather than hiding them.

### Explanation Overload

Initial versions provided too much information. We learned to prioritize the top 3-5 most important factors.

### False Confidence

Explanations can create false confidence. We emphasized uncertainty estimation and included confidence intervals.

## Lessons for Explainable AI

1. **Domain expertise is essential:** Work with end users from day one
2. **Design for explainability:** Don't bolt it on after training
3. **Multiple explanation types:** Different users need different explanations
4. **Validate explanations:** Check that they make domain sense, not just statistical sense
5. **Accept trade-offs:** Sometimes 87% accurate and explainable beats 92% black box

## The Broader Implications

Healthcare is just one domain where explainability matters. Finance, criminal justice, and hiring all involve high-stakes decisions where understanding the "why" is as important as the "what."

As AI systems become more powerful, the gap between capability and trust grows. Explainable AI isn't about making models simpler—it's about making complex models understandable.

## What We're Publishing

We're currently preparing our findings for publication (preprint on arXiv). The paper covers our architecture, validation methodology, and clinical evaluation in detail.

## Key Takeaways

- Accuracy without explainability often means zero adoption in high-stakes domains
- Explainable AI requires integrating domain knowledge, not just applying post-hoc techniques
- Different stakeholders need different types of explanations
- Small accuracy trade-offs are acceptable for large gains in trust and usability
- The future of AI in healthcare depends on building systems doctors can understand and verify

Building explainable AI for sepsis detection taught me that the hardest problems aren't technical—they're about bridging the gap between what machines can compute and what humans need to understand.

---

Interested in explainable AI or healthcare ML? Let's connect on [LinkedIn](https://www.linkedin.com/in/atharva-r-thakur/) or check out the code on [GitHub](https://github.com/Atharva-Thakur).
