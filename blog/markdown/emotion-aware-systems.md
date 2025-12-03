---
title: Building Emotion-Aware Systems: From Faces to Food
date: September 2024
---

What if your computer could read your mood and suggest the perfect comfort food? That's the idea behind EMOQ—an emotion-based food recommendation system. Here's how we built it and what I learned about emotion AI.

## The Concept

The premise is simple: emotions influence our food preferences. When you're stressed, you might crave chocolate. When you're happy, maybe something light and fresh. When you're sad, comfort food hits differently.

EMOQ uses computer vision to detect your emotional state from facial expressions and recommends food accordingly.

## The Technical Challenge

Building an emotion-aware system involves three main challenges:

1. Accurately detecting emotions from facial expressions
2. Mapping emotions to food preferences
3. Making it work in real-time with reasonable accuracy

## Computer Vision Pipeline

### 1. Face Detection

We started with face detection using OpenCV's Haar Cascade classifier. It's fast and works well for frontal faces. For better accuracy in varied conditions, we also experimented with dlib's HOG-based detector.

### 2. Facial Landmark Detection

Once we had the face, we extracted key facial landmarks—68 points mapping eyes, eyebrows, nose, mouth, and jaw contours. These landmarks are crucial for understanding facial expressions.

### 3. Feature Extraction

We computed several features from these landmarks:

- **Eye aspect ratio:** Detects if eyes are wide open (surprise) or narrowed (concentration/anger)
- **Mouth curvature:** Upward curve indicates happiness, downward suggests sadness
- **Eyebrow position:** Raised eyebrows signal surprise, furrowed ones indicate concern/anger
- **Jaw tension:** Clenched jaw can indicate stress or anger

### 4. Emotion Classification

We trained a CNN (Convolutional Neural Network) to classify seven basic emotions: happy, sad, angry, surprised, disgusted, fearful, and neutral. We used the FER-2013 dataset for training.

## Mapping Emotions to Food

The interesting part wasn't the computer vision—it was figuring out what people want to eat when feeling different emotions. We conducted a survey of 200+ people asking about their food preferences in various emotional states.

### Patterns We Found

- **Happy:** Light, fresh, colorful foods—salads, fruits, light desserts
- **Sad:** Comfort foods—ice cream, chocolate, mac and cheese, pizza
- **Stressed:** Crunchy or chewy foods—chips, nuts, gummy candy
- **Angry:** Spicy foods or protein-rich meals—hot wings, steak
- **Neutral:** Whatever's convenient—balanced meals, everyday favorites

### Cultural Considerations

Food-emotion associations are cultural. Our initial model was trained on Western food preferences but didn't work well for Indian users. We had to create region-specific mappings:

- Sad → Indian: Khichdi, chai, pakoras instead of ice cream and pizza
- Happy → Indian: Biryani, sweets like gulab jamun instead of salads

## Real-time Implementation

### Optimization Challenges

Running CNN inference on every frame was too slow. Solutions:

- **Frame skipping:** Process every 3rd frame instead of all frames
- **Model quantization:** Reduced model size from 100MB to 25MB with minimal accuracy loss
- **ROI tracking:** Once face is detected, track it instead of re-detecting every frame

### Handling Edge Cases

- **Multiple faces:** Focus on the primary face (largest in frame)
- **Poor lighting:** Histogram equalization to improve contrast
- **Partial occlusion:** Confidence thresholds to reject low-quality predictions
- **Mixed emotions:** Show top 2 emotions with confidence scores

## Model Performance

Our final model achieved:

- 70% accuracy on FER-2013 test set (comparable to human performance)
- 15 FPS on laptop CPU, 45 FPS on GPU
- Average latency of 80ms from capture to recommendation

## User Testing Results

We tested with 50 users. Key findings:

- **Novelty factor:** Users found it entertaining, even when recommendations weren't perfect
- **Accuracy perception:** Users felt it was 65% accurate on average
- **Use cases:** Most interesting for breaking decision paralysis—"I don't know what I want"
- **Privacy concerns:** Some users uncomfortable with webcam-based emotion tracking

## Lessons Learned

### 1. Emotion Detection is Hard

Humans don't always display clear emotions. Many expressions are subtle or mixed. Context matters—a smile can be genuine happiness or polite masking of discomfort.

### 2. Ground Truth is Subjective

Training data annotation is challenging. Different annotators disagreed on 30% of images. We used consensus labels from multiple annotators.

### 3. Cultural Context Matters

Both emotion expression and food preferences vary by culture. A one-size-fits-all model doesn't work.

### 4. Privacy First

We made the system fully offline—no images sent to servers. All processing happens locally. Users appreciated this.

## Beyond Food Recommendations

The EMOQ project was really a proof of concept for emotion-aware computing. Potential applications:

- **Mental health:** Mood tracking apps for therapy
- **Education:** Adapting content difficulty based on student frustration levels
- **Customer service:** Routing calls based on customer emotional state
- **Automotive:** Detecting driver drowsiness or road rage
- **Entertainment:** Choosing music, movies, or games based on mood

## Ethical Considerations

Emotion AI raises important questions:

- **Consent:** When is it okay to analyze someone's emotions?
- **Manipulation:** Could it be used to exploit emotional vulnerabilities?
- **Accuracy:** False predictions could cause harm (e.g., in mental health apps)
- **Bias:** Models trained on Western datasets may not work for all populations

## Technical Stack

For those interested in building something similar:

- **Computer Vision:** OpenCV, dlib
- **Deep Learning:** TensorFlow/Keras for CNN training
- **Dataset:** FER-2013, CK+, custom data
- **Backend:** Flask API for serving recommendations
- **Frontend:** JavaScript for webcam access, real-time display

## What's Next?

Future improvements we're considering:

- Multi-modal emotion detection: voice + face + text
- Personalized learning: adapting to individual preferences over time
- Context awareness: time of day, weather, recent activities
- Integration with food delivery APIs for one-click ordering

## Published Research

We published our findings in NeuroQuantology (2022). The paper covers our methodology, survey results, and emotion-food mapping in detail.

## Key Takeaways

- Emotion detection is feasible but challenging—expect 70-75% accuracy at best
- Cultural context is critical for both emotion recognition and response generation
- Real-time performance requires careful optimization and trade-offs
- Privacy concerns are valid—design for local processing when possible
- The novelty factor alone makes emotion-aware systems engaging, even when imperfect
- Emotion AI has potential beyond gimmicks—mental health and education are promising areas

Building EMOQ taught me that emotion-aware computing is less about perfect accuracy and more about creating contextually appropriate interactions. Sometimes knowing someone is "kind of stressed" is enough to offer something comforting.

---

Curious about computer vision or emotion AI? Connect with me on [LinkedIn](https://www.linkedin.com/in/atharva-r-thakur/) or explore my projects on [GitHub](https://github.com/Atharva-Thakur).
