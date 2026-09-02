# Images

Next.js only serves static files from the **`public/`** folder, not from `app/`.
Put campaign images here (`public/images/`) and reference them as `/images/<file>`.

## Files the site currently expects

| File | Used for | Suggested size |
|---|---|---|
| `candidate-portrait.jpg` | Homepage hero portrait, About page | 1000 × 1250 (4:5 portrait) |
| `candidate-hero.jpg` | "Meet the candidate" section | 1000 × 1250 (4:5 portrait) |

Add the two files above with those exact names and they will appear automatically.
Other sections (achievements, events, gallery) still use remote placeholder images
in `data/*.js` — swap those `src` values for local `/images/...` paths the same way.
