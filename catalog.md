# PromptKit Catalog

**Version:** 1.0 | **Last Updated:** 2025-09-30

## Overview

PromptKit is a comprehensive collection of shorthand codes for AI interactions across various business departments and functions. Each code expands into detailed instructions when used with a colon (`:`).

## Quick Start

```bash
# Format: code: your content
cg: Fix grammar in this text
dev: Create a login function
cw.blg: Write about AI trends

# Combine codes: code1+code2: your content  
dev+test: Create login function with tests
```

## Department Index

### 01. General (55 codes)
**File:** `01-General/general.json`  
**Description:** General purpose codes for corrections, improvements, and basic operations

**Key Codes:**
- `cg:` - Correct grammar only
- `cp:` - Correct text professionally (tone + clarity)
- `cl:` - Correct text for clarity and readability
- `sp:` - Suggest improvements for better structure
- `pf:` - Polish and refine text for professional use
- `co:` - Convert text to different format or style
- `fx:` - Fix specific issues in text
- `im:` - Improve text quality and effectiveness
- `sm:` - Summarize content concisely
- `sh:` - Shorten text while maintaining meaning

### 02. Students
**File:** `02-Students/students.json`  
**Description:** Codes for student-related tasks and educational content

### 03. Research & Development
**File:** `03-R&D/research_development.json`  
**Description:** Codes for research, development, and innovation tasks

### 04. Regulatory Affairs
**File:** `04-Regulatory Affairs/regulatory_affairs.json`  
**Description:** Codes for regulatory compliance and affairs management

### 05. Health & Safety
**File:** `05-Health & Safety/health_safety_ehs.json`  
**Description:** Codes for health, safety, and environmental management

### 06. Facilities
**File:** `06-Facilities/facilities_maintenance.json`  
**Description:** Codes for facilities management and maintenance

### 07. Software Development Pipeline

#### 07a. Developers (29 codes)
**File:** `07-Software Development Pipeline/Developers/developers.json`  
**Description:** Codes for software development and programming tasks

**Key Codes:**
- `dev:` - Write clean, efficient code with proper documentation
- `bug:` - Debug and fix code issues with detailed explanations
- `opt:` - Optimize code for performance and efficiency
- `ref:` - Refactor code for better structure and maintainability
- `doc:` - Generate comprehensive code documentation
- `rev:` - Review code for quality and best practices
- `test:` - Create unit tests and test cases
- `api:` - Design and implement API endpoints
- `db:` - Database design and query optimization
- `ui:` - User interface design and implementation

#### 07b. DevOps
**File:** `07-Software Development Pipeline/DevOps/devops.json`  
**Description:** Codes for DevOps, deployment, and infrastructure management

#### 07c. QA
**File:** `07-Software Development Pipeline/QA/qa.json`  
**Description:** Codes for quality assurance and testing

#### 07d. Testers
**File:** `07-Software Development Pipeline/Testers/testers.json`  
**Description:** Codes for software testing and validation

### 08. Advanced Operations

#### 08a. Commercial & Client Facing
**File:** `08-Advance/Commercial & Client Facing/commercial_client.json`  
**Description:** Codes for commercial operations and client-facing activities

#### 08b. Core Business Operations
**File:** `08-Advance/core_business/core_business_ops.json`  
**Description:** Codes for core business operations and management

#### 08c. Finance & Legal
**File:** `08-Advance/Finance & Legal/finance_legal.json`  
**Description:** Codes for financial and legal operations

#### 08d. People & Culture
**File:** `08-Advance/people and culture/people_and_culture.json`  
**Description:** Codes for human resources and organizational culture

#### 08e. Product & Service
**File:** `08-Advance/Product & Service/product_service.json`  
**Description:** Codes for product and service management

#### 08f. Technology & Data
**File:** `08-Advance/Technology & Data/tech_data.json`  
**Description:** Codes for technology and data management

### 09. Content Writers (25 codes)
**File:** `09-Content Writers/content_writers.json`  
**Description:** Codes for content writing, copywriting, and marketing communications

**Key Codes:**
- `cw.blg:` - Write comprehensive blog posts with proper structure and engaging content
- `cw.out:` - Create detailed blog post outlines with headlines, sections, and key points
- `cw.int:` - Write compelling blog post introductions that hook the reader
- `cw.con:` - Write strong blog post conclusions with clear takeaways and call-to-action
- `cw.cpy:` - Write persuasive sales copy with compelling headlines and calls-to-action
- `cw.hdl:` - Create attention-grabbing headlines for marketing content and campaigns
- `cw.eml:` - Write effective email marketing content with compelling subject lines
- `cw.lnd:` - Create high-converting landing page copy with clear value propositions
- `cw.cta:` - Write compelling call-to-action buttons and phrases for conversions
- `cw.soc:` - Create engaging social media posts optimized for specific platforms
- `cw.cap:` - Write compelling Instagram captions with relevant hashtags
- `cw.lin:` - Create professional LinkedIn content for thought leadership
- `cw.tag:` - Generate relevant hashtags for social media content
- `cw.tch:` - Write clear technical documentation with step-by-step instructions
- `cw.man:` - Create user-friendly instruction manuals and guides
- `cw.api:` - Write comprehensive API documentation with examples
- `cw.tsh:` - Create troubleshooting guides with common issues and solutions
- `cw.prs:` - Write professional press releases with compelling headlines
- `cw.prd:` - Create compelling product descriptions with key benefits
- `cw.cas:` - Write detailed case studies with metrics and results
- `cw.prp:` - Create persuasive business proposals and presentations
- `cw.str:` - Develop compelling story concepts with characters and plot
- `cw.chr:` - Create detailed character profiles with backgrounds and motivations
- `cw.dlg:` - Write natural, engaging dialogue between characters
- `cw.scn:` - Create vivid scene descriptions with atmosphere and details

## Code Combinations

### Popular Combinations
- `cw.blg+cw.seo:` - Blog post with SEO optimization
- `cw.cpy+cw.cta:` - Sales copy with strong call-to-action
- `cw.soc+cw.tag:` - Social media post with hashtags
- `cw.tch+cw.man:` - Technical documentation with user manual
- `cw.prs+cw.prd:` - Press release with product description
- `dev+test:` - Development with testing
- `cp+sm:` - Professional correction with summarization

## Usage Examples

### Content Writing
```
cw.blg: Sustainable energy trends in 2024
cw.cpy: New smartphone features and benefits
cw.soc: Company milestone announcement
cw.tch: API integration guide for developers
cw.prs: Product launch announcement
```

### Development
```
dev: Create a user authentication system
bug: Fix memory leak in payment module
test: Write unit tests for login functionality
api: Design REST API for user management
```

### General
```
cg: This sentence need fixing.
cp: Please review this text for errors.
sm: Summarize this 2000-word article
im: Make this email more professional
```

## Validation Rules

- **Max Code Length:** 4 characters
- **Required Format:** Must end with colon (`:`)
- **No Duplicates:** Each code must be unique across all departments
- **Pattern:** `^[a-z]{2,4}:$`

## File Structure

```
prompt-kit/
├── dicts/
│   └── master.json          # Master dictionary combining all codes
├── 01-General/
├── 02-Students/
├── 03-R&D/
├── 04-Regulatory Affairs/
├── 05-Health & Safety/
├── 06-Facilities/
├── 07-Software Development Pipeline/
│   ├── Developers/
│   ├── DevOps/
│   ├── QA/
│   └── Testers/
├── 08-Advance/
│   ├── Commercial & Client Facing/
│   ├── core_business/
│   ├── Finance & Legal/
│   ├── people and culture/
│   ├── Product & Service/
│   └── Technology & Data/
├── 09-Content Writers/
├── catalog.md               # This file
├── validation.py            # Code validation script
└── README.md
```

## Contributing

When adding new codes:
1. Follow the existing JSON structure
2. Ensure code uniqueness across all departments
3. Use descriptive, actionable descriptions
4. Include usage examples
5. Update this catalog accordingly

## License

MIT License - see LICENSE file for details.

---

**Total Departments:** 9  
**Total Codes:** 109+ (and growing)  
**Last Updated:** 2025-09-30
