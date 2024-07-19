import { useEffect } from "preact/hooks";

interface WidgetProps {
  url: string;
}

export default function Widget({ url }: WidgetProps) {
  useEffect(() => {
    const host = document.querySelector("#host");
    if (!host) return;
    const shadow = host.attachShadow({ mode: "open" });
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        shadow.innerHTML = text;
      });
  }, []);

  return <section id="host"></section>;
}
