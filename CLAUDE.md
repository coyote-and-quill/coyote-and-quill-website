@AGENTS.md

## Claude Code only

- `AGENTS.md` (imported above) is the canonical instruction file, and every rule in it applies to every agent tool. Put shared rules there, not here.
- No MCP servers are configured in-repo. C&Q plays to use here: `cq-tools:no-slop` on anything a person reads, `cq-marketing:mkt-publish` to mirror a post (it opens a draft PR and never publishes), and `/cq-toolkit:closeout <issue>` (run by Glen) after each merge.
