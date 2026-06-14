### What is `cuid()`?

`cuid()` is a function that generates a **Collision-Resistant Unique Identifier**. It is a short, unique string of letters and numbers designed specifically for web applications and databases.

---

### `cuid` vs `uuid`: Are they different? Is one better?

Yes, they are different, and **`cuid` is generally better for modern web apps.**

* **The Problem with UUID (v4):** Random UUIDs look like `4fa6b211-73df...`. Because they are completely random, inserting them into a database ruins the natural sorting order, which slows down your database performance.
* **Why CUID is Better:** CUIDs are **chronologically sortable**. They start with a timestamp, followed by a counter and a random string. Because new CUIDs are naturally sequential, databases index them much faster. They are also shorter and much easier to double-click and copy than UUIDs.

---

### How to use it?

#### 1. In your Prisma Schema

You don't need to install anything extra. Prisma supports it natively to auto-generate IDs for your database rows:

```prisma
model User {
  id   String @id @default(cuid()) // Automatically creates a CUID on user creation
  name String
}

```

#### 2. In JavaScript / TypeScript (outside the database)

If you need to generate a CUID manually in your application code, install the official package:

```bash
npm install @cuid(parallel) # or npm install @paralleldrive/cuid2 for the newer v2

```

```typescript
import { createId } from '@paralleldrive/cuid2';

const userId = createId(); 
console.log(userId); // Outputs something like: "tz4a98aza00001vgr7e16cl6q"

```