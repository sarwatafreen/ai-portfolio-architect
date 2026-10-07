<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep curated portfolio facts in `src/lib/portfolio-data.ts` so the visible portfolio and grounded assistant share one source of truth.
- The portfolio assistant is a single browser-local conversation; only its model request streams through `/api/chat`.
- Public contact inquiries are validated in `/api/contact` and stored privately in `contact_submissions`; never expose them to anonymous reads.
- Keep project-card visual mappings in ProjectExplorer separate from curated project facts, so presentation-only image updates do not alter assistant grounding or filtering.
- Resolve the shared portrait asset pointer against its verified public Lovable asset origin; external hosts such as Vercel do not serve Lovable's relative asset paths.
