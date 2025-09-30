# PromptKit Quick Reference Cheat Sheet

## 🚀 Quick Start
```bash
# Format: code: your content
cg: Fix grammar in this text
dev: Create a login function
cw.blg: Write about AI trends

# Combine: code1+code2: your content
dev+test: Create login with tests
cp+sm: Professional correction + summary
```

---

## 📝 General (Most Used)
| Code | Purpose | Example |
|------|---------|---------|
| `cg:` | Correct grammar | `cg: This sentence need fixing.` |
| `cp:` | Professional correction | `cp: Make this email professional` |
| `cl:` | Improve clarity | `cl: Make this text clearer` |
| `sm:` | Summarize | `sm: Summarize this long article` |
| `im:` | Improve quality | `im: Make this more engaging` |
| `sp:` | Better structure | `sp: Improve this document structure` |
| `pf:` | Polish & refine | `pf: Polish this presentation` |
| `co:` | Convert format | `co: Convert to bullet points` |
| `fx:` | Fix issues | `fx: Fix the formatting issues` |
| `sh:` | Shorten text | `sh: Make this more concise` |

---

## 💻 Development
| Code | Purpose | Example |
|------|---------|---------|
| `dev:` | Write clean code | `dev: Create user authentication` |
| `bug:` | Debug & fix | `bug: Fix memory leak in payment` |
| `test:` | Create tests | `test: Unit tests for login` |
| `api:` | API design | `api: REST API for users` |
| `db:` | Database queries | `db: Optimize this SQL query` |
| `ui:` | User interface | `ui: Design login form` |
| `opt:` | Optimize code | `opt: Improve performance` |
| `ref:` | Refactor code | `ref: Clean up this function` |
| `doc:` | Code documentation | `doc: Document this API` |
| `rev:` | Code review | `rev: Review this pull request` |

---

## ✍️ Content Writing
| Code | Purpose | Example |
|------|---------|---------|
| `cw.blg:` | Blog posts | `cw.blg: AI trends in healthcare` |
| `cw.cpy:` | Sales copy | `cw.cpy: New product features` |
| `cw.hdl:` | Headlines | `cw.hdl: Attention-grabbing title` |
| `cw.eml:` | Email marketing | `cw.eml: Newsletter about updates` |
| `cw.soc:` | Social media | `cw.soc: LinkedIn post about success` |
| `cw.cap:` | Instagram captions | `cw.cap: Product photo with story` |
| `cw.lin:` | LinkedIn content | `cw.lin: Professional insights` |
| `cw.tag:` | Hashtags | `cw.tag: Fitness and wellness` |
| `cw.tch:` | Technical docs | `cw.tch: API integration guide` |
| `cw.man:` | User manuals | `cw.man: Software setup guide` |
| `cw.api:` | API documentation | `cw.api: Payment processing API` |
| `cw.tsh:` | Troubleshooting | `cw.tsh: Network connectivity issues` |
| `cw.prs:` | Press releases | `cw.prs: Product launch announcement` |
| `cw.prd:` | Product descriptions | `cw.prd: Smart home security system` |
| `cw.cas:` | Case studies | `cw.cas: Software implementation success` |
| `cw.prp:` | Business proposals | `cw.prp: Marketing strategy project` |
| `cw.str:` | Story concepts | `cw.str: Science fiction adventure` |
| `cw.chr:` | Character profiles | `cw.chr: Protagonist for mystery novel` |
| `cw.dlg:` | Dialogue writing | `cw.dlg: Conversation between friends` |
| `cw.scn:` | Scene descriptions | `cw.scn: Tense confrontation scene` |

---

## 🔄 Popular Combinations
| Combination | Purpose | Example |
|-------------|---------|---------|
| `dev+test:` | Code with tests | `dev+test: Login function with tests` |
| `cp+sm:` | Professional + summary | `cp+sm: Long document correction` |
| `cw.blg+cw.seo:` | Blog with SEO | `cw.blg+cw.seo: AI trends optimized` |
| `cw.cpy+cw.cta:` | Sales copy + CTA | `cw.cpy+cw.cta: Product launch campaign` |
| `cw.soc+cw.tag:` | Social + hashtags | `cw.soc+cw.tag: Company milestone post` |
| `cw.tch+cw.man:` | Technical + manual | `cw.tch+cw.man: API guide with examples` |
| `bug+opt:` | Debug + optimize | `bug+opt: Fix and improve performance` |
| `im+pf:` | Improve + polish | `im+pf: Make content engaging and professional` |

---

## 📋 Other Departments
| Department | File | Key Codes |
|------------|------|-----------|
| **Students** | `02-Students/` | Educational content codes |
| **R&D** | `03-R&D/` | Research & development |
| **Regulatory** | `04-Regulatory/` | Compliance & affairs |
| **Health & Safety** | `05-Health & Safety/` | EHS management |
| **Facilities** | `06-Facilities/` | Maintenance & operations |
| **DevOps** | `07-Software/DevOps/` | Deployment & infrastructure |
| **QA** | `07-Software/QA/` | Quality assurance |
| **Testers** | `07-Software/Testers/` | Software testing |
| **Commercial** | `08-Advance/Commercial/` | Client-facing operations |
| **Core Business** | `08-Advance/core_business/` | Business operations |
| **Finance & Legal** | `08-Advance/Finance & Legal/` | Financial & legal |
| **People & Culture** | `08-Advance/people and culture/` | HR & culture |
| **Product & Service** | `08-Advance/Product & Service/` | Product management |
| **Technology & Data** | `08-Advance/Technology & Data/` | Tech & data management |

---

## ⚡ Pro Tips

### 1. **Always use colons**
```bash
✅ cg: Fix this text
❌ cg Fix this text
```

### 2. **Combine codes for better results**
```bash
✅ dev+test: Create login with tests
✅ cp+sm: Professional correction + summary
```

### 3. **Be specific in your content**
```bash
✅ cw.blg: AI trends in healthcare for 2024
❌ cw.blg: Write something
```

### 4. **Use the right department prefix**
```bash
✅ cw.blg: (Content Writers)
✅ dev: (Developers)
✅ cg: (General)
```

---

## 🔍 Validation Rules
- **Max length:** 4 characters + colon
- **Format:** `^[a-z.]{2,4}:$`
- **No duplicates** across departments
- **Required colon** at the end

---

## 🛠️ Tools
- **Validation:** `python validation.py`
- **Catalog:** See `catalog.md` for complete list
- **Master JSON:** `dicts/master.json` for programmatic access

---

## 📞 Need Help?
- Check `catalog.md` for complete documentation
- Run `python validation.py` to validate your codes
- See individual department files for specific codes

---

**Total Codes:** 109+ | **Departments:** 9 | **Version:** 1.0
