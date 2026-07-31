import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const basePath = "/portfolio";
const outputDirectory = path.resolve("dist");

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url ?? "/", "http://localhost").pathname;
  const relativePath = pathname.startsWith(`${basePath}/`)
    ? pathname.slice(basePath.length + 1)
    : pathname.slice(1);
  const filePath = path.join(outputDirectory, relativePath || "index.html");

  try {
    const contents = await readFile(filePath);
    response.writeHead(200);
    response.end(contents);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});

await new Promise((resolve, reject) => {
  server.once("error", reject);
  server.listen(0, "127.0.0.1", resolve);
});

try {
  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Could not determine the local server address.");
  }

  const origin = `http://127.0.0.1:${address.port}`;
  const pageResponse = await fetch(`${origin}${basePath}/`);
  const html = await pageResponse.text();
  const stylesheetPath = html.match(
    /href="(\/portfolio\/_next\/[^"]+\.css)"/,
  )?.[1];

  if (!pageResponse.ok || !html.includes("<title>Gururaj Yadav")) {
    throw new Error("The portfolio page did not render correctly.");
  }
  if (!stylesheetPath) {
    throw new Error("The exported stylesheet path is missing the base path.");
  }

  const stylesheetResponse = await fetch(`${origin}${stylesheetPath}`);
  if (!stylesheetResponse.ok) {
    throw new Error("The exported stylesheet could not be served.");
  }

  console.log(`Page: ${pageResponse.status} ${basePath}/`);
  console.log(`Asset: ${stylesheetResponse.status} ${stylesheetPath}`);
} finally {
  server.close();
}
