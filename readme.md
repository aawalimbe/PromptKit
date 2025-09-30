# PromptKit

A **new trend in prompting**: use a PromptKit to enhance your prompts, get consistent and better-quality responses, and cut down the number of tokens wasted as input.

PromptKit is a **shorthand prompt system** a set of codes you can use inside ChatGPT and other AI models to save time, improve consistency, and make prompting easier. Each code expands into a clear instruction for the AI. The best part? **It’s customizable.** You can adapt PromptKit to your personal workflow, your team, or your entire organization.

---

## 🚀 Why PromptKit?

Prompting today is messy:

* Writing full instructions every time wastes time and tokens.
* Templates help, but they’re rigid and don’t scale well.
* Non-technical users struggle with “Markdown-like” prompt tricks.

**PromptKit solves this by giving you:**

* **Shorthand codes**: e.g., `cg:` = Correct grammar.
* **Consistency**: Every code always means the same thing.
* **Customization**: Add your own codes, department dictionaries, or personal shorthand.
* **Efficiency**: Faster prompting, fewer tokens.

**⚠️ Important:** These codes are **input-only** - they expand into full instructions but are **not displayed** in the AI's response. Only the processed content appears in the output.

PromptKit is both a **system** (the rules for creating and using codes) and a **kit** (ready-to-use dictionaries for general users, students, and office departments).

---

## 🛠 Setup and Installation

### With **ChatGPT**

1. Open **ChatGPT**.
2. Go to **Settings → Personalization → Custom Instructions**.
3. In the section that asks about instructions, paste the dictionary of codes you want to use. Example:

   ```
   cp: Correct the text professionally
   cg: Correct grammar
   sm: Summarize in bullet points
   ex: Expand details with examples
   qz: Create a quiz on the given topic
   int: Generate interview-style questions
   ```
4. Save. From now on, you can use shorthand anywhere in ChatGPT.

   * Example:

     ```
     cg: This sentence need fixing.
     ```

     → Becomes *Correct grammar: This sentence need fixing.*

### With **Claude / Gemini / Other Models**

* If personalization exists: paste your codes in the settings.
* If not: paste your dictionary at the start of the chat as a system message.
* Then use the shorthand in your prompts normally.

### With **APIs or Local Models**

* Add the dictionary in the **system prompt**.
* Or preprocess your input with a simple script that expands codes into full instructions before sending them.

### **Troubleshooting**

**Codes not working?**
- Ensure codes end with `:` (colon)
- Check that your AI tool supports custom instructions
- Try restarting your AI session

**Codes showing in response?**
- This shouldn't happen - codes are input-only
- Check that you've properly set up custom instructions
- The AI should only show the processed content, not the codes

**Want to combine codes?**
- Use `+` to chain codes: `cp+sm: [text]`
- Order matters: `cp+sm` = correct professionally, then summarize

**Need help?**
- Check the [Issues](https://github.com/aawalimbe/PromptKit/issues) page
- Join our community discussions
- Submit feature requests

---

## 📦 What's Inside

### **01-General** (Beginner-Friendly)
* **General Dictionary** → universal codes (grammar, summarization, rewriting, etc.)

### **02-Students**
* **Student Dictionary** → study aids, quizzes, interview prep

### **03-R&D**
* **Research & Development** → research methodology, patents, funding, technology transfer

### **04-Regulatory Affairs**
* **Regulatory Affairs** → compliance, submissions, approvals, audits

### **05-Health & Safety**
* **Health & Safety** → safety protocols, incident response, training, compliance

### **06-Facilities**
* **Facilities** → maintenance, security, utilities, space management

### **07-Software Development Pipeline**
* **Developers** → coding, debugging, optimization, Git operations
* **Testers** → testing, validation, automation, environment setup
* **QA** → quality processes, planning, standards, release management
* **DevOps** → deployment, infrastructure, monitoring, automation

### **08-Advance** (Business Operations)
* **Core Business Operations** → executive, operations, project management
* **People & Culture** → HR, recruitment, learning & development, administration
* **Finance & Legal** → accounting, payroll, procurement, compliance
* **Commercial & Client Facing** → sales, business development, marketing, customer support
* **Product & Service** → product management, design, QA, manufacturing, supply chain
* **Technology & Data** → IT, software development, data analytics, AI/R&D, cybersecurity

### **09-Content Writers**
* **Content Writers & Copy Writers** → blog writing, copywriting, social media, technical writing, marketing content, creative writing

---

## ✨ Usage Examples

**General Use**

```
cg: This text need correction.
```

→ Correct grammar

```
cp+sm: The following text...
```

→ Correct professionally + summarize

**Student Use**

```
qz: Basics of economics
```

→ Generates a quiz

```
int: Data Analyst role
```

→ Generates interview-style questions

**Business Operations Examples**

```
ex.str: Digital transformation strategy
hr.jd: Draft a job description for a sales manager
fa.bud: Create Q4 marketing budget proposal
sl.pit: Design sales pitch for enterprise software
pm.road: Create product roadmap for mobile app
it.sup: Develop IT support procedures
```

**Industry-Specific Examples**

```
rd.res: Drug discovery research methodology
ra.sub: FDA approval process submission
hs.saf: Chemical handling safety procedures
fm.main: Building maintenance schedule
```

**Software Development Examples**

```
dev: User authentication system
test: E-commerce checkout flow testing
qa: Mobile app quality assurance
ops.deploy: Production release pipeline
```

**Content Writing Examples**

```
cw.blg: Sustainable energy trends in 2024
cw.cpy: New smartphone features
cw.soc: Company milestone announcement
cw.tch: API integration guide
```

**Real-World Use Cases**

**Content Creation:**
```
cp+st: Make this email more professional and formal
sm+hl: Summarize this meeting notes and highlight action items
```

**Academic Writing:**
```
pf+cl: Proofread and clarify this research paper abstract
ex+exm: Explain machine learning concepts with real examples
```

**Business Communication:**
```
eml: Convert this message into a professional email
pr: Create a pitch for our new product launch
```

**Learning & Development:**
```
tk: Test my understanding of React hooks
im: Review my code and suggest improvements
```

---

## 🌍 Why Open Source?

PromptKit was made open source to:

* Make prompting accessible to everyone, not just techies.
* Allow teams to build their own shared kits.
* Encourage experimentation and improvement.
* Build a **common language of prompting** that’s simple, flexible, and efficient.

Prompting should feel like second nature — not a chore.

---

## 🛠️ Utilities

### **SVG to PNG Converter**
Located in `svg_to_png_utility/` - A simple Python script to convert SVG files to PNG format for printing.

**Quick Usage:**
```bash
# Windows (double-click)
svg_to_png_utility/convert.bat

# Command line
python svg_to_png_utility/convert_svgs.py
```

**Features:**
- Converts all SVG files in directories 01-09 to PNG
- Adds white backgrounds for print optimization
- Works with or without ImageMagick
- Creates HTML files for manual conversion if needed
- 300 DPI output for professional printing

**Output:** PNG files saved alongside SVG files in each directory.

---

## 🚀 Quick Start Guide

### **For Beginners**
1. Start with **01-General** codes from `01-General/general.md`
2. Add to your AI tool's system prompt
3. Try: `cp+sm: [your text]` for professional correction + summary

### **For Students**
1. Copy the **02-Students** codes from `02-Students/students.md`
2. Paste into ChatGPT Custom Instructions
3. Try: `qz: Python basics` or `int: Data Analyst role`

### **For Industry Professionals**
1. Select your **Industry-Specific** dictionary (03-R&D, 04-Regulatory Affairs, 05-Health & Safety, 06-Facilities)
2. Copy codes from your specialized file
3. Use for industry-specific workflows and compliance

### **For Software Development Teams**
1. Choose your role-specific dictionary from **07-Software Development Pipeline/**
2. **Developers**: Use `developers.md` for coding and Git operations
3. **Testers**: Use `testers.md` for testing and validation
4. **QA**: Use `qa.md` for quality processes and planning
5. **DevOps**: Use `devops.md` for deployment and infrastructure

### **For Business Professionals**
1. Choose relevant **08-Advance** dictionaries for your department
2. Copy codes from specific files (e.g., `08-Advance/Finance & Legal/finance_legal.md`)
3. Combine with 01-General Dictionary for comprehensive coverage

### **For Content Writers & Copywriters**
1. Use **09-Content Writers** dictionary from `09-Content Writers/content_writers.md`
2. Copy codes for blog writing, copywriting, social media, and technical writing
3. Try: `cw.blg: AI trends` or `cw.cpy: product launch`

### **For Teams**
1. Combine multiple dictionaries based on your needs
2. Create a shared custom dictionary
3. Standardize across your organization

---

## 🤝 Contributing

We welcome contributions to make PromptKit better for everyone!

### **How to Contribute**
1. **Fork** the repository
2. **Add new codes** to existing dictionaries or create new ones
3. **Test** your codes with real examples
4. **Submit** a pull request with clear descriptions

### **Code Guidelines**
- Keep codes **short** (2-4 characters)
- Make them **memorable** and **intuitive**
- Include **clear examples** in your submission
- Follow existing naming patterns

### **What We're Looking For**
- **Additional industry dictionaries** (Healthcare, Education, Manufacturing, etc.)
- **Language-specific** codes
- **Regional compliance** patterns
- **Integration examples** with popular tools
- **Role-specific** dictionaries for specialized professions

---

## 🔧 Integration Guides

### **With Popular Tools**

**Notion AI:**
- Add codes to your Notion AI system prompt
- Use in AI blocks: `cg: [text to correct]`

**Obsidian:**
- Create a template with common codes
- Use with AI plugins for note-taking

**VS Code:**
- Add to GitHub Copilot custom instructions
- Use in AI-powered code comments

**Slack/Discord:**
- Add to AI bot system prompts
- Use for quick text improvements

### **API Integration**
```python
# Example: Preprocess prompts before sending to API
def expand_prompt_codes(text, dictionary):
    for code, instruction in dictionary.items():
        text = text.replace(f"{code}:", f"{instruction}:")
    return text
```

---

## 📈 Roadmap

### **Recently Added**
- [x] **SVG to PNG Converter** - Convert diagrams to print-ready format
- [x] **Master Dictionary** - Combined JSON file with all codes
- [x] **Catalog System** - Easy browsing of all modules
- [x] **Cheat Sheet** - Quick reference guide

### **Coming Soon**
- [ ] **Web Interface** - Browse and search codes online
- [ ] **Browser Extension** - Quick access in any text field
- [ ] **Mobile App** - Use codes on the go
- [ ] **Team Collaboration** - Shared dictionaries for organizations

### **Planned Features**
- [ ] **Code Validation** - Test codes before adding
- [ ] **Usage Analytics** - Track popular codes
- [ ] **AI Integration** - Auto-suggest codes based on context
- [ ] **Multi-language Support** - Codes in different languages

### **Community Requests**
- [ ] **Healthcare Dictionary** - Medical procedures and compliance
- [ ] **Education Dictionary** - Teaching and curriculum development
- [ ] **Manufacturing Dictionary** - Production and quality control
- [ ] **Retail Dictionary** - Customer service and inventory management
- [ ] **Consulting Dictionary** - Client engagement and project delivery

---

## ⚖️ Terms and Conditions / Liability Disclaimer

By using, downloading, or interacting with PromptKit:

1. You acknowledge that AI outputs can be inaccurate, biased, or misleading.
2. You accept full responsibility for your use of PromptKit and the results it produces.
3. The creators and contributors of PromptKit are **not liable** for any losses, damages, or harms caused directly or indirectly by its use or misuse.
4. This includes but is not limited to: financial loss, data corruption, personal harm, legal consequences, or reputational impact.
5. You are responsible for ensuring that your usage complies with laws, policies, and ethical guidelines.
6. By downloading, using, or modifying PromptKit, you agree to these terms and accept all risks.

---

## 🔑 Final Note

PromptKit is a **prompt system you can shape to your needs**. Start with the ready-to-use dictionaries, add your own shorthand, and build your custom kit.

This isn’t just a tool — it’s a new way of prompting.