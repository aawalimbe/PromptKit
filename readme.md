# PromptKit

A **new trend in prompting**: use a PromptKit to enhance your prompts, get consistent and better-quality responses, and cut down the number of tokens wasted as input.

PromptKit is a **shorthand prompt system** — a set of codes you can use inside ChatGPT and other AI models to save time, improve consistency, and make prompting easier. Each code expands into a clear instruction for the AI. The best part? **It’s customizable.** You can adapt PromptKit to your personal workflow, your team, or your entire organization.

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

## 📦 What’s Inside

* **General Dictionary** → universal codes (grammar, summarization, rewriting, etc.)
* **Student Dictionary** → study aids, quizzes, interview prep
* **Work Dictionaries** → office department–wise codes (HR, Marketing, Finance, etc.)
* **Custom Dictionary** → build your own for personal workflows

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

**Workplace Examples**

```
hr.jd: Draft a job description for a sales manager
mkt.sm: Summarize social media engagement data
fin.rep: Generate a financial report summary
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

## 🚀 Quick Start Guide

### **For Students**
1. Copy the **Student Dictionary** codes from `students/students.md`
2. Paste into ChatGPT Custom Instructions
3. Try: `qz: Python basics` or `int: Data Analyst role`

### **For Professionals**
1. Start with **General Dictionary** codes from `general/general.md`
2. Add to your AI tool's system prompt
3. Try: `cp+sm: [your text]` for professional correction + summary

### **For Teams**
1. Choose relevant codes from both dictionaries
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
- **Specialized dictionaries** (HR, Marketing, Finance, etc.)
- **Language-specific** codes
- **Industry-specific** prompt patterns
- **Integration examples** with popular tools

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
- [ ] **HR Dictionary** - Recruitment and employee management
- [ ] **Marketing Dictionary** - Content creation and campaigns
- [ ] **Finance Dictionary** - Reports and analysis
- [ ] **Legal Dictionary** - Document review and drafting

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