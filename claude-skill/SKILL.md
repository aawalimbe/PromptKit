---
name: promptkit
description: >
  PromptKit is a shorthand prompt system that expands compact codes into full, high-quality instructions
  for Claude. Use this skill whenever the user includes shorthand codes ending with a colon (e.g., `cg:`,
  `cp:`, `sm:`, `ex:`, `dev:`, `cw.blg:`) in their message, or when they mention "PromptKit",
  "prompt codes", "shorthand prompts", or ask to use abbreviated prompt instructions. Also trigger when
  the user chains codes with `+` (e.g., `cp+sm:`). This skill covers 10 domains: general text operations,
  student/academic tasks, R&D, regulatory affairs, health & safety, facilities, software development
  pipeline (dev/test/QA/DevOps), advanced business operations, content writing, and teaching/education.
  Even if the user only uses a single code like `cg:` without mentioning PromptKit by name, this skill
  should activate to ensure proper expansion and high-quality execution.
---

# PromptKit Skill

**Author: Akshay Walimbe**
**Source: [github.com/aawalimbe/PromptKit](https://github.com/aawalimbe/PromptKit)**
**License: MIT**

PromptKit is a shorthand prompt system - a set of codes that expand into clear, structured instructions.
Each code triggers a specific behavior with defined quality standards, output format, and execution rules.

---

## How It Works

### Code Format

Codes follow these patterns:
- **Simple code**: `code: [content]` - e.g., `cg: This sentence need fixing.`
- **Namespaced code**: `domain.code: [content]` - e.g., `cw.blg: AI trends in 2026`
- **Chained codes**: `code1+code2: [content]` - e.g., `cp+sm: [long text]`

### Execution Rules

1. **Detect** all shorthand codes in the user's input (pattern: 2-4 letter code followed by `:`)
2. **Expand** each code to its full instruction using the dictionaries below
3. **Execute** the expanded instruction against the provided content
4. **Chain execution**: When codes are joined with `+`, execute left to right sequentially - the output of code1 becomes the input for code2
5. **Output only the result** - never show the expanded instruction or code definition to the user unless they ask "what does [code] do?"
6. Codes are **input-only** - they are never displayed in the response

### Confidence & Ambiguity

- If a code is not recognized, ask the user: "I don't recognize the code `xx:`. Did you mean [closest match]?"
- If the content is ambiguous for the given code, apply **conservative interpretation** - do less rather than hallucinate intent
- If multiple interpretations are possible, pick the most common use case and proceed (don't ask unless truly unclear)

---

## Dictionary: 01 - General (Beginner-Friendly)

These are universal codes for everyday text operations. Default starting point for all users.

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `cp:` | Correct the text professionally | Fix grammar, tone, and structure. Preserve meaning. Output should read as if written by a skilled professional writer. |
| `cg:` | Correct grammar | Fix only grammatical errors. Do not change tone, style, or word choice. Minimal intervention. |
| `sm:` | Summarize in bullet points | Extract key points. 3-7 bullets max. Each bullet is one clear idea. No fluff. |
| `ex:` | Expand details with examples | Take the core idea and add depth. Include 2-3 concrete, relevant examples. Aim for 2-3x the original length. |
| `rw:` | Rewrite for clarity | Restructure for readability. Simplify complex sentences. Maintain all original information. |
| `st:` | Change style/tone | Adapt to the tone specified by the user (formal, casual, persuasive, etc.). If no tone specified, default to professional. |
| `tl:` | Translate | Translate to the language specified. If no language given, ask. Preserve tone and intent, not just literal meaning. |
| `hl:` | Highlight key points | Bold or call out the most critical information. Max 3-5 highlights. |
| `pf:` | Proofread | Thorough check for typos, punctuation, spelling, and formatting errors. Return corrected text with a brief changelog. |
| `cl:` | Clarify | Rewrite ambiguous or confusing parts. Make implicit assumptions explicit. |
| `eml:` | Convert to professional email | Format as email with subject line, greeting, body, closing, and signature placeholder. Professional tone. |
| `pr:` | Create a pitch | Structure as: hook, problem, solution, proof, call-to-action. Concise and persuasive. |

---

## Dictionary: 02 - Students

For academic and study-related tasks.

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `qz:` | Create a quiz on the given topic | Generate 5-10 questions. Mix of multiple choice, short answer, and true/false. Include answer key. |
| `int:` | Generate interview-style questions | 8-12 questions ranging from basic to advanced. Include behavioral and technical questions where relevant. |
| `tk:` | Test my knowledge | Ask questions one at a time. Wait for the user's answer before revealing the correct one. Socratic method. |
| `im:` | Review and suggest improvements | Provide specific, actionable feedback. Highlight strengths and weaknesses. Prioritize high-impact changes. |
| `fq:` | Generate flashcard Q&A pairs | Create 10-15 pairs. Front: concise question. Back: clear, memorable answer. Optimized for spaced repetition. |
| `nt:` | Create study notes | Structured notes with headings, key concepts, definitions, and relationships. Include mnemonic aids where helpful. |
| `es:` | Essay outline | Thesis, 3-5 main arguments with supporting points, conclusion. Ready to expand into full essay. |

---

## Dictionary: 03 - R&D

Research and development workflows.

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `rd.res:` | Research methodology | Define approach, variables, data collection, analysis plan. Academic rigor. |
| `rd.lit:` | Literature review structure | Organize by themes. Identify gaps. Suggest search terms and databases. |
| `rd.hyp:` | Hypothesis formulation | Clear, testable hypotheses. Include null and alternative. Define variables. |
| `rd.pat:` | Patent analysis | Prior art search strategy, claims analysis, novelty assessment framework. |
| `rd.fund:` | Funding proposal structure | Problem statement, objectives, methodology, timeline, budget framework, impact. |
| `rd.tech:` | Technology transfer brief | Readiness level, market potential, IP status, commercialization pathway. |

---

## Dictionary: 04 - Regulatory Affairs

Compliance and regulatory workflows.

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `ra.sub:` | Regulatory submission structure | Document structure, required sections, checklist format. Jurisdiction-aware if specified. |
| `ra.comp:` | Compliance checklist | Itemized requirements. Pass/fail criteria. Reference to applicable standards. |
| `ra.aud:` | Audit preparation | Scope, documentation requirements, common findings, remediation templates. |
| `ra.gap:` | Gap analysis | Current state vs requirements. Prioritized action items. Timeline estimate. |

---

## Dictionary: 05 - Health & Safety

Safety protocols and compliance.

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `hs.saf:` | Safety procedure | Step-by-step protocol. Hazard identification. PPE requirements. Emergency contacts placeholder. |
| `hs.inc:` | Incident report template | Who, what, when, where, why, how. Root cause section. Corrective actions. |
| `hs.risk:` | Risk assessment | Hazard identification, likelihood, severity, risk rating matrix, mitigation measures. |
| `hs.train:` | Safety training outline | Learning objectives, content modules, assessment criteria, certification requirements. |

---

## Dictionary: 06 - Facilities

Facility management workflows.

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `fm.main:` | Maintenance schedule | Equipment list, frequency, responsible party, checklist format. |
| `fm.sec:` | Security protocol | Access control, monitoring, incident response, escalation procedures. |
| `fm.util:` | Utility management | Tracking template for consumption, costs, optimization recommendations. |
| `fm.space:` | Space planning | Layout considerations, capacity, utilization metrics, optimization suggestions. |

---

## Dictionary: 07 - Software Development Pipeline

Four sub-dictionaries for the complete development lifecycle.

### Developers

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `dev:` | Write code for the described feature | Clean, well-commented, production-ready code. Include error handling. Follow language conventions. |
| `dev.debug:` | Debug the provided code | Identify root cause. Explain the bug. Provide the fix with before/after. |
| `dev.opt:` | Optimize code | Profile-aware suggestions. Benchmark where possible. Explain tradeoffs. |
| `dev.ref:` | Refactor code | Improve structure without changing behavior. SOLID principles. Explain each change. |
| `dev.doc:` | Generate documentation | Inline comments, function docs, README sections. Follow language-standard doc formats. |
| `dev.git:` | Git operations guidance | Commit message conventions, branching strategy, merge/rebase advice. |
| `dev.api:` | API design/documentation | Endpoint structure, request/response schemas, authentication, error codes. RESTful by default. |
| `dev.arch:` | Architecture design | Component diagram, data flow, technology choices with rationale, scalability considerations. |

### Testers

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `test:` | Create test plan | Test scenarios, coverage matrix, edge cases, expected results. |
| `test.unit:` | Write unit tests | Test functions/methods in isolation. Mock dependencies. High coverage. |
| `test.intg:` | Integration test plan | Component interaction testing. Data flow verification. Error propagation. |
| `test.auto:` | Automation strategy | Tool selection, framework setup, CI integration, reporting. |
| `test.perf:` | Performance test plan | Load scenarios, metrics, thresholds, monitoring, bottleneck identification. |

### QA

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `qa:` | Quality assurance review | Standards compliance, defect categorization, severity assessment, release recommendation. |
| `qa.plan:` | QA plan | Scope, approach, resources, schedule, entry/exit criteria, risk assessment. |
| `qa.std:` | Quality standards | Coding standards, review checklist, acceptance criteria, compliance requirements. |
| `qa.rel:` | Release management | Release checklist, go/no-go criteria, rollback plan, communication template. |

### DevOps

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `ops.deploy:` | Deployment pipeline | CI/CD stages, environment configs, approval gates, rollback procedures. |
| `ops.infra:` | Infrastructure setup | Architecture, provisioning, networking, security groups, cost estimation. |
| `ops.mon:` | Monitoring setup | Metrics, alerts, dashboards, escalation, SLA tracking. |
| `ops.auto:` | Automation script | Idempotent, well-logged, error-handled. Include dry-run option where applicable. |

---

## Dictionary: 08 - Advanced Business Operations

Namespaced codes for enterprise departments.

### Executive & Strategy

| Code | Expansion |
|------|-----------|
| `ex.str:` | Strategic plan - vision, goals, KPIs, timeline, resource allocation |
| `ex.deck:` | Executive presentation - key metrics, decisions needed, recommendations |
| `ex.memo:` | Executive memo - situation, analysis, recommendation, next steps |

### Human Resources

| Code | Expansion |
|------|-----------|
| `hr.jd:` | Job description - role, responsibilities, qualifications, compensation range |
| `hr.rev:` | Performance review template - goals, achievements, areas for development, rating |
| `hr.onb:` | Onboarding plan - day 1 to day 90 milestones, resources, checkpoints |
| `hr.pol:` | HR policy draft - purpose, scope, policy statement, procedures, compliance |

### Finance & Legal

| Code | Expansion |
|------|-----------|
| `fa.bud:` | Budget proposal - line items, justification, projections, approval workflow |
| `fa.rep:` | Financial report - revenue, expenses, variance analysis, forecasts |
| `fa.inv:` | Invoice template - itemized, tax-compliant, payment terms |
| `le.con:` | Contract review checklist - key clauses, risks, negotiation points |
| `le.comp:` | Compliance framework - requirements, controls, monitoring, reporting |

### Sales & Business Development

| Code | Expansion |
|------|-----------|
| `sl.pit:` | Sales pitch - pain point, solution, differentiation, social proof, CTA |
| `sl.prop:` | Proposal - executive summary, scope, deliverables, timeline, pricing |
| `sl.crm:` | CRM update template - deal stage, next actions, blockers, forecast |
| `bd.part:` | Partnership proposal - mutual value, structure, terms, success metrics |

### Product & Design

| Code | Expansion |
|------|-----------|
| `pm.road:` | Product roadmap - themes, features, priorities, timeline, dependencies |
| `pm.prd:` | Product requirements document - problem, solution, user stories, acceptance criteria |
| `pm.feat:` | Feature specification - description, user flow, edge cases, technical requirements |
| `ux.flow:` | User flow diagram description - steps, decisions, error states, happy path |

### Technology & Data

| Code | Expansion |
|------|-----------|
| `it.sup:` | IT support procedure - troubleshooting steps, escalation, SLA targets |
| `da.rep:` | Data analysis report - methodology, findings, visualizations, recommendations |
| `ai.eval:` | AI/ML evaluation - model metrics, bias check, deployment readiness |
| `cy.inc:` | Cybersecurity incident response - detection, containment, eradication, recovery |

---

## Dictionary: 09 - Content Writers

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `cw.blg:` | Write a blog post | SEO-conscious. Hook intro. Scannable structure. 800-1500 words unless specified. CTA at end. |
| `cw.cpy:` | Write marketing copy | Benefit-led. Emotional hooks. Clear CTA. Concise. Power words. |
| `cw.soc:` | Write social media post | Platform-appropriate length. Engaging hook. Hashtag suggestions. |
| `cw.tch:` | Write technical content | Accurate. Well-structured. Code examples where relevant. Jargon-appropriate for audience. |
| `cw.news:` | Write newsletter content | Subject line. Preview text. Scannable body. Single clear CTA. |
| `cw.pr:` | Write press release | Inverted pyramid. Quotes placeholder. Boilerplate. AP style. |
| `cw.script:` | Write video/audio script | Timestamps. Speaker cues. Visual/audio notes. Natural spoken language. |
| `cw.case:` | Write case study | Challenge, solution, results. Data-backed. Customer quote placeholders. |

---

## Dictionary: 10 - Teachers & Educators

| Code | Expansion | Execution Standard |
|------|-----------|-------------------|
| `lpl:` | Lesson plan | Objectives, materials, warm-up, instruction, activity, assessment, differentiation. |
| `quiz:` | Create assessment | Aligned to learning objectives. Varied question types. Rubric included. |
| `rub:` | Create rubric | Criteria, performance levels (4-point scale), descriptors, point values. |
| `act:` | Design classroom activity | Time estimate, materials, instructions, learning outcome, variations for different levels. |
| `diff:` | Differentiation strategies | Modifications for advanced, on-level, and struggling learners. Same learning goal. |
| `par:` | Parent communication | Professional, empathetic, specific, action-oriented. Positive framing. |
| `pdp:` | Professional development plan | Goals, activities, timeline, evidence of growth, reflection prompts. |
| `tech.int:` | Technology integration plan | Tool selection, learning objective alignment, implementation steps, assessment of effectiveness. |

---

## Chaining Rules

When codes are chained with `+`:

1. Execute **left to right**
2. Output of previous code becomes input for next code
3. All quality standards of each individual code still apply
4. Example: `cp+sm: [text]` = First correct professionally, then summarize the corrected text

Common useful chains:
- `cp+sm:` - Clean up then summarize
- `cp+st:` - Clean up then change tone
- `pf+cl:` - Proofread then clarify
- `sm+hl:` - Summarize then highlight key points
- `ex+exm:` - Expand with examples

---

## Edge Cases

1. **No content after code**: If user writes just `cg:` with nothing after, ask: "What text would you like me to correct?"
2. **Unknown code**: Suggest the closest match from this dictionary
3. **Multiple codes without chaining**: If user writes `cg: text1` and `sm: text2` in the same message, treat as two separate operations
4. **Code in the middle of text**: Only recognize codes at the start of a line or after a newline
5. **Escaped codes**: If user writes `\cg:` with a backslash, treat as literal text, not a code

---

## Custom Codes

Users can define their own codes by saying:
- "Add a PromptKit code: `xx:` = [instruction]"
- These persist for the current conversation only
- Custom codes override default codes if there's a name conflict
- Custom codes follow the same format and chaining rules
