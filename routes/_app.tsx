import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>widget-demo</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <main>
          <header class="sticky flex justify-between items-center bg-black h-16 text-white px-4">
            <a href="/">
              <div class="px-4">Logo</div>
            </a>
            <nav>
              <ul class="flex space-x-4">
                <li>
                  <a
                    href="/about"
                    class="hover:decoration-white hover:underline hover:underline-offset-8"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/capital-rasing"
                    class="hover:decoration-white hover:underline hover:underline-offset-8"
                  >
                    Capital Rasing
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    class="hover:decoration-white hover:underline hover:underline-offset-8"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <Component />
        </main>
      </body>
    </html>
  );
}
