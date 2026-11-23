import { mkdirSync, writeFileSync } from "node:fs";

const message = "fix(prod): unban the load balancer. welcome back, everyone";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", message + "\n", "utf8");
