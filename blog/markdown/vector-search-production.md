---
title: Building Vector Search Engines: Lessons from Production
date: November 2024
---

During my research internship at PTC, I built a high-performance vector search engine using PostgreSQL with pgvector. Here's what I learned about taking vector search from prototype to production.

## Why Vector Search?

Traditional keyword-based search has its limits. When you're dealing with semantic similarity, finding similar documents, or building recommendation systems, you need vector search. The challenge? Making it fast enough for production use.

## Choosing the Right Stack

We went with PostgreSQL and pgvector instead of specialized vector databases like Pinecone or Weaviate. Why?

- **Simplicity:** No need to maintain a separate database system
- **ACID guarantees:** PostgreSQL's reliability is hard to beat
- **Cost-effective:** One database instead of two
- **Familiar tooling:** The team already knew PostgreSQL

## The Architecture

Our vector search pipeline had three main components:

1. **Embedding Generation:** Converting text to vectors using pre-trained models
2. **Storage & Indexing:** pgvector with HNSW indices for fast approximate nearest neighbor search
3. **Query Processing:** Optimized SQL queries with distance functions (cosine, L2, inner product)

## Key Optimizations

### 1. Index Selection

pgvector supports two index types: IVFFlat and HNSW. We chose HNSW (Hierarchical Navigable Small World) for better recall-performance tradeoffs:

```sql
CREATE INDEX ON documents USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);
```

### 2. Batch Processing

Instead of generating embeddings one at a time, we batched requests to the embedding model. This reduced latency by 60%.

### 3. Query Optimization

We combined vector search with traditional filtering to narrow down results before computing distances:

```sql
SELECT id, title, 1 - (embedding <=> query_vector) AS similarity
FROM documents
WHERE category = 'technical' AND published_date > '2024-01-01'
ORDER BY embedding <=> query_vector
LIMIT 10;
```

## Challenges We Faced

### Cold Start Problem

Initial queries were slow until PostgreSQL's cache warmed up. Solution? Pre-warming the cache with common queries during deployment.

### Embedding Drift

When we updated our embedding model, old vectors weren't compatible. Lesson learned: version your embeddings and plan for migrations.

### Memory Usage

HNSW indices are memory-intensive. For 1M vectors of dimension 768, we needed about 12GB just for the index. Proper capacity planning is crucial.

## Performance Results

After optimization, our system achieved:

- Query latency: ~50ms for top-10 results from 1M vectors
- Recall@10: 95% compared to brute-force search
- Throughput: 200+ queries per second on a single instance

## Winning the Hackathon

This work culminated in a team hackathon where we demonstrated the vector search capabilities. The key differentiator? Real-time performance with actual production data, not just toy datasets.

## Key Takeaways

1. **Start simple:** PostgreSQL + pgvector is often enough before reaching for specialized databases
2. **Index tuning matters:** Experiment with HNSW parameters (m and ef_construction) for your use case
3. **Combine approaches:** Vector search + traditional filtering = best of both worlds
4. **Monitor everything:** Cache hit rates, query latency, and index size are all important metrics
5. **Plan for scale:** Memory requirements grow with your dataset—plan accordingly

## What's Next?

Vector search is evolving rapidly. Areas I'm watching:

- Hybrid search combining dense and sparse vectors
- Multi-vector representations for different aspects of documents
- Quantization techniques to reduce memory footprint
- Dynamic embedding updates without full reindexing

Building production-ready vector search taught me that while the ML models get the attention, the infrastructure decisions often determine success. Choose tools that match your team's expertise and your scale requirements.

---

Have questions about vector search or want to discuss implementation details? Reach out on [LinkedIn](https://www.linkedin.com/in/atharva-r-thakur/) or [GitHub](https://github.com/Atharva-Thakur).
